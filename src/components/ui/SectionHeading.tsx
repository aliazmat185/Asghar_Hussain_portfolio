interface SectionHeadingProps {
  eyebrow?: string;
  number?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  number,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {(eyebrow || number) && (
        <p
          className={`mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase ${
            align === "center" ? "justify-center" : ""
          } ${light ? "text-teal" : "text-teal"}`}
        >
          {number && <span className="text-accent">{number}</span>}
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-semibold ${
          light ? "text-warm-text" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-warm-text/70" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
