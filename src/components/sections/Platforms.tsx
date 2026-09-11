import { TikTokIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/ui/icons";

const platforms = [
  { name: "TikTok", icon: TikTokIcon },
  { name: "Facebook", icon: FacebookIcon },
  { name: "Instagram", icon: InstagramIcon },
  { name: "YouTube", icon: YouTubeIcon },
];

export default function Platforms() {
  return (
    <section
      aria-label="Supported platforms"
      className="border-y border-border bg-surface/40"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8">
        <p className="mb-5 text-center text-xs font-semibold tracking-wide text-text-muted uppercase">
          Platforms supported
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {platforms.map((platform) => (
            <span
              key={platform.name}
              className="flex items-center gap-2 text-text-muted"
            >
              <platform.icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium">{platform.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
