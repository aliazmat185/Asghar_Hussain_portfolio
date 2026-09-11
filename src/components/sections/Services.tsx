import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export default function Services() {
  return (
    <section id="services" className="section-anchor mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        number="01"
        eyebrow="What I offer"
        title="Services built around growth, monetization, and advertising."
        description="From TikTok growth to paid campaigns across platforms — pick a starting point, or send a custom request."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-[22px] border border-border bg-surface p-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-base font-medium text-text">
          Need another social media service? Let&apos;s discuss your
          requirements.
        </p>
        <WhatsAppLink message="Hello M Asghar Hussain, I have a custom social media request.">
          Message on WhatsApp
        </WhatsAppLink>
      </div>
    </section>
  );
}
