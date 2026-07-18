import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mb-4 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
              Everything your business
              <br />
              needs online.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[16.5px] leading-relaxed text-muted">
              From first sketch to launch day and beyond — a full toolkit for getting your
              business online and growing.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-[20px] border border-ink/8 bg-surface p-[30px] transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_-12px_rgba(5,46,22,0.15)]">
                  <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-linear-to-br from-primary/12 to-accent/18 text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-[18.5px] font-semibold">{s.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
