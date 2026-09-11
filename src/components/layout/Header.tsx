"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site, social } from "@/data/site";
import { TikTokIcon, FacebookIcon } from "@/components/ui/icons";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-border bg-bg/90 backdrop-blur-sm"
          : "border-transparent bg-bg/60"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-text"
          aria-label={`${site.fullName} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-dark">
            {site.monogram}
          </span>
          <span className="font-display text-base font-semibold">
            {site.navName}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppLink message="Hello M Asghar Hussain, I'd like to discuss a project.">
            Let&apos;s Talk
          </WhatsAppLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-bg px-5 pt-2 pb-6 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-text hover:bg-surface"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={social.tiktok.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted hover:text-accent"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href={social.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted hover:text-accent"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-4">
            <WhatsAppLink
              message="Hello M Asghar Hussain, I'd like to discuss a project."
              className="w-full"
            >
              Let&apos;s Talk
            </WhatsAppLink>
          </div>
        </nav>
      )}
    </header>
  );
}
