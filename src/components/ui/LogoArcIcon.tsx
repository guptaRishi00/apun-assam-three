import type { LogoArcIconProps } from "@/types";

export const LogoArcIcon: React.FC<LogoArcIconProps> = ({ className }) => (
    <svg
        viewBox="0 0 200 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 80C20 80 50 20 100 20C150 20 180 80 180 80"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
        />
        <circle cx="100" cy="55" r="8" fill="currentColor" />
        <circle cx="70" cy="65" r="6" fill="currentColor" />
        <circle cx="130" cy="65" r="6" fill="currentColor" />
    </svg>
);
