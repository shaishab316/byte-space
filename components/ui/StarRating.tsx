interface StarRatingProps {
  rating: number;
  className?: string;
}

export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={className}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}
