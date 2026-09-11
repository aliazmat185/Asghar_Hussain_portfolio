import { Target, Globe2, MessageCircle, SlidersHorizontal } from "lucide-react";
import { site, social } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLink from "@/components/ui/SocialLink";
import { TikTokIcon, FacebookIcon } from "@/components/ui/icons";

const capabilities = [
  { icon: Target, text: "Strategies built around your goals" },
  { icon: Globe2, text: "Support across major social platforms" },
  { icon: MessageCircle, text: "Clear communication" },
  { icon: SlidersHorizontal, text: "Flexible project scope" },
];

export default function About() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-accent font-display text-3xl font-bold text-accent-dark">
            {site.monogram}
          </span>
          <div className="flex items-center gap-3">
            <SocialLink
              href={social.tiktok.href}
              label={`TikTok ${social.tiktok.handle}`}
              icon={TikTokIcon}
              variant="icon-only"
            />
            <SocialLink
              href={social.facebook.href}
              label="Facebook — View Profile"
              icon={FacebookIcon}
              variant="icon-only"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            number="02"
            eyebrow="About"
            title="Your next stage of growth starts with a clear strategy."
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
            I&apos;m {site.fullName}, a digital marketing professional
            focused on social media growth, monetization guidance, and
            advertising. I work with creators and businesses to understand
            their goals and plan practical steps for TikTok, Facebook,
            Instagram, and YouTube.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-text">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
