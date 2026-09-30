FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

# ─────────────────────────────────────────────
# Dependencies
# ─────────────────────────────────────────────

FROM base AS deps

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

# ─────────────────────────────────────────────
# Source
# ─────────────────────────────────────────────

FROM deps AS source

WORKDIR /app

COPY . .

# ─────────────────────────────────────────────
# Builder
# ─────────────────────────────────────────────

FROM source AS builder

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

# ─────────────────────────────────────────────
# Production
# ─────────────────────────────────────────────

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]