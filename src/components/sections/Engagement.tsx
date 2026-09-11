import { engagementOptions } from "@/data/engagements";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export default function Engagement() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        number="04"
        eyebrow="Ways to work together"
        title="Engagement options for every stage."
        description="Every project is scoped individually — these are starting points for the conversation."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {engagementOptions.map((option) => (
          <div
            key={option.title}
            className="flex flex-col rounded-[22px] border border-border bg-surface p-7"
          >
            <h3 className="font-display text-lg font-semibold text-text">
              {option.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {option.description}
            </p>

            <ul className="mt-5 space-y-2">
              {option.scopeExamples.map((example) => (
                <li
                  key={example}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                    aria-hidden="true"
                  />
                  {example}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-1 flex-col justify-end gap-4">
              <span className="text-xs font-semibold tracking-wide text-accent uppercase">
                Custom quote
              </span>
              <WhatsAppLink
                message={`Hello M Asghar Hussain, I'd like to discuss ${option.title}.`}
              >
                Discuss on WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
