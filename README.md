<center>
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="./public/images/logo/logo-light.svg"
    />
    <source
      media="(prefers-color-scheme: light)"
      srcset="./public/images/logo/logo-dark.svg"
    />
    <img
      src="./public/images/logo/logo-dark.svg"
      alt="ByteSpace"
      width="180"
    />
  </picture>

A modern learning platform built with Next.js, TypeScript, MongoDB, and Redux Toolkit.
</center>

## Overview

ByteSpace is a learning platform focused on course discovery, instructor profiles, and a responsive user experience.

The project uses the **Next.js App Router** with route-level component colocation, reusable UI components, Mongoose for data access, and Redux Toolkit for client-side state.

## Tech Stack

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS 4
- MongoDB + Mongoose
- Redux Toolkit
- React Icons
- Docker + Docker Compose
- pnpm

## Features

- Course browsing, search, filtering, and pagination
- Course detail pages
- Instructor profiles and course listings
- Login and registration pages
- Responsive UI
- Reusable components
- Course ratings and metadata
- REST API endpoints for courses and instructors
- MongoDB database with seed data

## Project Structure

```text
bytespace-new/
├── app/
│   ├── (auth-layout)/
│   ├── (main-layout)/
│   └── api/
├── components/
│   ├── icons/
│   ├── layout/
│   └── ui/
├── lib/
│   ├── constants/
│   ├── db/
│   ├── fonts/
│   ├── hooks/
│   ├── models/
│   ├── store/
│   └── types/
├── public/
│   └── images/
├── scripts/
│   └── seed.ts
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── package.json
```

Route-specific components are colocated inside private `_components` folders, while reusable components live under `components/`.

## Getting Started

### Requirements

- Docker
- Docker Compose

### Run with Docker

Copy the environment file:

```bash
cp .env.example .env
```

Start the application:

```bash
docker compose up --build
```

The Compose setup automatically:

1. Starts MongoDB
2. Waits for MongoDB to become healthy
3. Seeds the database
4. Starts the Next.js application

Open:

```text
http://localhost:3000
```

No local MongoDB installation is required.

### Stop

```bash
docker compose down
```

To remove the database volume as well:

```bash
docker compose down -v
```

## Environment Variables

The default `.env.example` is ready for Docker:

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://mongo:27017/bytespace
```

## API

### Courses

```http
GET /api/courses
GET /api/courses/:id
```

### Instructors

```http
GET /api/instructors/:id
```

## Local Development

Docker is the recommended way to run the project.

For local development, install Node.js 20+, pnpm 11+, and MongoDB:

```bash
pnpm install
pnpm seed
pnpm dev
```

## Available Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Create production build  |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |
| `pnpm seed`  | Seed the database        |

## Architecture

The project keeps responsibilities separated:

- **`app/`** — routes, layouts, and API handlers
- **`components/`** — reusable UI and layout components
- **`lib/models/`** — Mongoose models
- **`lib/db/`** — database connection
- **`lib/store/`** — Redux Toolkit state
- **`lib/hooks/`** — reusable application hooks
- **`scripts/`** — database seeding

The structure keeps route-specific code close to its route while shared functionality remains reusable.

## License

This project is private and intended for evaluation purposes.
