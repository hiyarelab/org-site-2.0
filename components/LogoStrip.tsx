import { logos } from "@/data/content";

export function LogoStrip() {
  return (
    <section className="border-y border-ink/8 py-9">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 font-semibold tracking-wide text-muted opacity-70">
        {logos.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </section>
  );
}
