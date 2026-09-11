import type { IconType } from "@/types";

interface ContactCardProps {
  icon: IconType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-[22px] border border-border bg-surface p-5 transition-colors hover:border-accent/40"
    >
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg text-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold tracking-wide text-text-muted uppercase">
          {label}
        </span>
        <span className="block truncate text-base font-medium text-text">
          {value}
        </span>
      </span>
    </a>
  );
}
