import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  return (
    <section id="faq" className="section-anchor mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        number="05"
        eyebrow="Questions"
        title="Frequently asked questions"
      />

      <div className="mt-10 divide-y divide-border rounded-[22px] border border-border bg-surface">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-6 py-5 first:rounded-t-[22px] last:rounded-b-[22px] open:bg-surface-hover">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-text [&::-webkit-details-marker]:hidden">
              {faq.question}
              <ChevronDown
                className="h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
