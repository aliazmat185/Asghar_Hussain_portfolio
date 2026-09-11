import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Share Your Goals",
    description: "Tell me about your business, platform, and priorities.",
  },
  {
    number: "02",
    title: "Review Your Account",
    description: "We review the current position and identify opportunities.",
  },
  {
    number: "03",
    title: "Agree on a Plan",
    description: "Confirm the scope, timeline, and quotation before work begins.",
  },
  {
    number: "04",
    title: "Execute and Review",
    description: "Carry out the agreed work and review progress.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-anchor bg-warm">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          number="03"
          eyebrow="How it works"
          title="A simple, transparent process."
          align="center"
          light
        />

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute top-6 right-0 left-0 hidden h-px bg-warm-text/15 lg:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li key={step.number} className="relative flex flex-col items-start">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-warm-text font-display text-sm font-bold text-warm">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-warm-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-text/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
