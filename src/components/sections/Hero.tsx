import { Users, BadgeCheck, Megaphone } from "lucide-react";
import { site, social } from "@/data/site";
import Button from "@/components/ui/Button";
import SocialLink from "@/components/ui/SocialLink";
import { TikTokIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/ui/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const capabilityCards = [
  {
    icon: Users,
    title: "Account Growth",
    description: "Strategy-led growth across TikTok, Facebook, Instagram, and YouTube.",
  },
  {
    icon: BadgeCheck,
    title: "Monetization Guidance",
    description: "Clear guidance on eligibility requirements and next steps.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "Targeted campaigns planned, launched, and reviewed for you.",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold tracking-wide text-teal uppercase">
            {site.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05] font-semibold text-text">
            Turn your social presence into your next opportunity.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            I&apos;m {site.fullName}. I help creators and businesses build
            their social presence through growth strategies, monetization
            guidance, and targeted advertising.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={buildWhatsAppUrl(
                "Hello M Asghar Hussain, I'd like to discuss my project."
              )}
              external
            >
              Discuss Your Project
            </Button>
            <Button href="/#services" variant="secondary">
              Explore Services
            </Button>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-sm font-medium text-text-muted">
              Connect with me
            </p>
            <div className="flex flex-wrap gap-3">
              <SocialLink
                href={social.tiktok.href}
                label={`TikTok ${social.tiktok.handle}`}
                icon={TikTokIcon}
              />
              <SocialLink
                href={social.facebook.href}
                label="Facebook — View Profile"
                icon={FacebookIcon}
              />
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="rounded-[24px] border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-accent-dark">
                {site.monogram}
              </span>
              <div className="flex items-center gap-2 text-text-muted">
                <TikTokIcon className="h-5 w-5" aria-hidden="true" />
                <FacebookIcon className="h-5 w-5" aria-hidden="true" />
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
                <YouTubeIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {capabilityCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-bg p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <card.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {card.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-text-muted">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
