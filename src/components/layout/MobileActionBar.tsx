import { Mail } from "lucide-react";
import { contact } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const introMessage = "Hello M Asghar Hussain, I'd like to discuss a project.";

export default function MobileActionBar() {
  return (
    <>
      <a
        href={buildWhatsAppUrl(introMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        className="fixed right-6 bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-dark shadow-lg transition-transform hover:scale-105 md:flex"
      >
        <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
      </a>

      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-bg/95 backdrop-blur-sm md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={buildWhatsAppUrl(introMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 flex-1 items-center justify-center gap-2 text-sm font-semibold text-accent-dark bg-accent"
        >
          <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={contact.emailHref}
          className="flex min-h-14 flex-1 items-center justify-center gap-2 border-l border-border text-sm font-semibold text-text"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email
        </a>
      </nav>
    </>
  );
}
