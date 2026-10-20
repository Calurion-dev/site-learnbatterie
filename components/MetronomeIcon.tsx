type MetronomeIconProps = {
  size?: number;
  className?: string;
};

export function MetronomeIcon({ size = 20, className }: MetronomeIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8.5 3h7l3.5 18h-14L8.5 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 17 15.5 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="6" r="1.2" fill="currentColor" />
      <path
        d="M8 18h8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
