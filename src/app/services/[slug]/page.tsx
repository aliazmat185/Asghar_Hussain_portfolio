import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { serviceInquiryMessage } from "@/lib/whatsapp";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import ServiceCard from "@/components/ui/ServiceCard";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.slug);
  const Icon = service.icon;

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-20">
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-text-muted">
        <Link href="/" className="hover:text-text">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        <Link href="/#services" className="hover:text-text">
          Services
        </Link>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="text-text">{service.name}</span>
      </nav>

      <div className="mt-8 flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-accent">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
            {service.name}
          </h1>
          <p className="mt-1 text-base text-text-muted">{service.tagline}</p>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted">
        {service.description}
      </p>

      <div className="mt-8">
        <WhatsAppLink message={serviceInquiryMessage(service.name)}>
          Ask about {service.shortName}
        </WhatsAppLink>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-xl font-semibold text-text">
            What this service covers
          </h2>
          <ul className="mt-4 space-y-3">
            {service.covers.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-text">
            Who it&apos;s suitable for
          </h2>
          <ul className="mt-4 space-y-3">
            {service.suitableFor.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-text">
          Engagement process
        </h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <li key={step} className="rounded-2xl border border-border bg-surface p-4">
              <span className="font-display text-sm font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm text-text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {service.faqs.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-text">
            Frequently asked questions
          </h2>
          <div className="mt-4 divide-y divide-border rounded-[22px] border border-border bg-surface">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5 open:bg-surface-hover first:rounded-t-[22px] last:rounded-b-[22px]">
                <summary className="cursor-pointer list-none text-base font-semibold text-text [&::-webkit-details-marker]:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-text">
          Related services
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
