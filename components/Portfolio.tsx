import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { portfolio } from "@/data/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="pb-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Portfolio</Eyebrow>
            <h2 className="mb-4 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
              Recent work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[16.5px] leading-relaxed text-muted">
              A few of the local businesses we&apos;ve helped build a real online presence.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <a
                  href="#contact"
                  className="group interactive-cursor block overflow-hidden rounded-[20px] border border-ink/8 shadow-sm"
                >
                  <div
                    className="relative flex h-[230px] items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                  >
                    <div className="text-white/90 transition-transform duration-[600ms] group-hover:scale-[1.15] group-hover:rotate-3">
                      <Icon size={54} strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 flex items-end bg-linear-to-t from-dark/90 to-transparent to-[55%] p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-1.5 text-[13px] font-semibold text-white">
                        Visit Project <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface px-[22px] py-5">
                    <div className="mb-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                      {p.cat}
                    </div>
                    <h3 className="mb-1.5 text-[18px] font-semibold">{p.title}</h3>
                    <div className="text-[12.5px] text-muted">{p.tech}</div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
