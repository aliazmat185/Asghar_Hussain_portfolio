import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.62h-3.45v13.6a3.15 3.15 0 0 1-5.6 1.95 3.15 3.15 0 0 1 3.6-4.95v-3.5a6.6 6.6 0 1 0 5.45 6.5V9.1a8.1 8.1 0 0 0 4.75 1.53V7.2a4.75 4.75 0 0 1-3.35-1.38Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.5 21v-8.2h2.75l.41-3.2h-3.16V7.55c0-.93.26-1.56 1.6-1.56h1.7V3.14C17.5 3.1 16.5 3 15.32 3c-2.46 0-4.14 1.5-4.14 4.26v2.34H8.42v3.2h2.76V21h3.32Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.2V8.8L15.8 12 10 15.2Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.5 14.4c-.3-.15-1.65-.8-1.9-.9-.25-.1-.45-.15-.63.15-.2.3-.73.9-.9 1.1-.16.2-.33.2-.6.1-.3-.15-1.27-.47-2.4-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.07-.15-.62-1.52-.87-2.07-.22-.55-.45-.47-.62-.48h-.53c-.18 0-.47.07-.72.37-.25.3-.94.93-.94 2.25 0 1.33.96 2.6 1.1 2.8.14.17 1.9 2.9 4.6 4.06.65.28 1.15.44 1.55.57.65.2 1.24.18 1.7.1.52-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.2-.53-.33ZM12 2.1a9.9 9.9 0 0 0-8.53 14.9L2 22l5.13-1.4A9.9 9.9 0 1 0 12 2.1Zm0 18.06a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.05.83.82-3-.2-.32a8.16 8.16 0 1 1 6.88 3.8Z" />
    </svg>
  );
}
