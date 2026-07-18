import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { reasons } from "@/data/content";

export function WhyChooseUs() {
  return (
    <section id="about" className="pb-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="scale">
          <div className="overflow-hidden rounded-[36px] bg-dark px-6 py-[70px] text-white sm:px-10 sm:py-[90px]">
            <Eyebrow className="border-accent/25 bg-accent/12 text-accent">Why Choose Us</Eyebrow>
            <h2 className="mb-4 max-w-xl text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
              Small studio. Big-agency craft.
            </h2>
            <p className="max-w-lg text-[16.5px] leading-relaxed text-white/65">
              We keep our client list small on purpose — so every project gets senior-level
              attention, start to finish.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-[2px] overflow-hidden rounded-[20px] bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className="bg-[#062f19] p-7 transition-colors duration-300 hover:bg-[#0a3d20]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/14 text-accent">
                      <Icon size={20} />
                    </div>
                    <h4 className="mb-1.5 text-[16px] font-semibold">{r.title}</h4>
                    <p className="text-[13.5px] leading-relaxed text-white/60">{r.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
