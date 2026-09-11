import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[1200px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
      <p className="font-display text-sm font-semibold tracking-wide text-teal uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
        This page couldn&apos;t be found.
      </h1>
      <p className="mt-4 max-w-md text-base text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/#services" variant="secondary">
          View Services
        </Button>
      </div>
    </div>
  );
}
