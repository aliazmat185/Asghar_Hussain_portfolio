import type { IconType } from "@/types";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: IconType;
  variant?: "row" | "icon-only";
  className?: string;
}

export default function SocialLink({
  href,
  label,
  icon: Icon,
  variant = "row",
  className = "",
}: SocialLinkProps) {
  if (variant === "icon-only") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
      >
        <Icon className="h-5 w-5" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
