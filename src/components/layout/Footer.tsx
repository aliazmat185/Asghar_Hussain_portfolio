import Link from "next/link";
import { site, contact, social } from "@/data/site";
import SocialLink from "@/components/ui/SocialLink";
import { TikTokIcon, FacebookIcon } from "@/components/ui/icons";

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-dark">
                {site.monogram}
              </span>
              <span className="font-display text-base font-semibold text-text">
                {site.fullName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {site.title}. Helping creators and businesses grow on TikTok,
              Facebook, Instagram, and YouTube.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink
                href={social.tiktok.href}
                label="TikTok profile"
                icon={TikTokIcon}
                variant="icon-only"
              />
              <SocialLink
                href={social.facebook.href}
                label="Facebook profile"
                icon={FacebookIcon}
                variant="icon-only"
              />
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm text-text-muted">
            <a href={`https://wa.me/${contact.whatsappNumber}`} className="hover:text-text">
              {contact.whatsappDisplay}
            </a>
            <a href={contact.emailHref} className="hover:text-text">
              {contact.email}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-text-muted">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
