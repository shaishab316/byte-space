interface IconProps {
  color?: string;
  className?: string;
}

export function BarChartIcon({ color = '#242528', className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.5 4H19.5V20H16.5V4ZM4.5 14H7.5V20H4.5V14ZM10.5 9H13.5V20H10.5V9Z"
        fill={color}
      />
    </svg>
  );
}

export function CheckCircleIcon({ color = '#003BE2', className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
        fill={color}
      />
    </svg>
  );
}
