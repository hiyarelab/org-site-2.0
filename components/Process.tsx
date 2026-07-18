import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { process } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="pb-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="mb-4 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
              Five steps to launch.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[16.5px] leading-relaxed text-muted">
              A clear, collaborative process so you always know what happens next.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-10">
          <div className="absolute top-[34px] right-0 left-0 hidden h-px bg-linear-to-r from-ink/8 via-primary to-ink/8 sm:block" />
          <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="group text-left">
                  <div className="mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-primary bg-surface font-display text-[19px] font-bold text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    {p.n}
                  </div>
                  <h4 className="mb-2 text-[17px] font-semibold">{p.title}</h4>
                  <p className="text-[13.5px] leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
