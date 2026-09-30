import type { HTMLAttributes } from 'react';

export type SkeletonTone = 'default' | 'inverse';

const toneClassName: Record<SkeletonTone, string> = {
  default: 'skeleton',
  inverse: 'skeleton-inverse',
};

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  tone?: SkeletonTone;
  circle?: boolean;
}

export function Skeleton({
  tone = 'default',
  circle = false,
  className = '',
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`${toneClassName[tone]} ${
        circle ? 'rounded-full' : 'rounded-md'
      } ${className}`}
      {...props}
    />
  );
}

export interface SkeletonTextProps {
  lines?: number;
  className?: string;
  lineClassName?: string;
  lastLineClassName?: string;
}

export function SkeletonText({
  lines = 3,
  className = '',
  lineClassName = 'h-4',
  lastLineClassName = 'w-2/3',
}: SkeletonTextProps) {
  return (
    <div aria-hidden="true" className={`space-y-1 ${className}`}>
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton
          key={index}
          className={`${lineClassName} ${
            lines > 1 && index === lines - 1 ? lastLineClassName : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}
