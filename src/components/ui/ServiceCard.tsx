import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { serviceInquiryMessage } from "@/lib/whatsapp";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article
      className={`flex flex-col rounded-[22px] border p-6 transition-colors ${
        service.featured
          ? "border-accent/40 bg-surface shadow-[0_0_0_1px_rgba(199,243,107,0.15)]"
          : "border-border bg-surface hover:border-accent/30"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-bg text-accent">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {service.featured && (
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
            Most requested
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-text">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">
        {service.tagline}
      </p>

      <ul className="mt-4 space-y-2">
        {service.highlights.slice(0, 3).map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-sm text-text-muted"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
              aria-hidden="true"
            />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-text hover:text-accent"
        >
          View Service
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <WhatsAppLink
          message={serviceInquiryMessage(service.name)}
          className="w-full"
        >
          Ask about {service.shortName}
        </WhatsAppLink>
      </div>
    </article>
  );
}
