import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { pricing } from "@/data/content";

export function Pricing() {
  return (
    <section id="pricing" className="pb-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mb-4 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
            Simple, honest pricing.
          </h2>
          <p className="max-w-md text-[16.5px] leading-relaxed text-muted">
            No hidden fees. Pick the plan that fits where your business is today.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-md grid-cols-1 items-start gap-6 lg:max-w-none lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-3xl p-9 transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.highlight
                    ? "bg-linear-to-br from-dark to-[#0a3d20] text-white shadow-xl lg:scale-105"
                    : "border border-ink/8 bg-surface hover:shadow-xl"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 right-8 rounded-full bg-accent px-3.5 py-1.5 text-[11.5px] font-bold tracking-wide text-dark uppercase">
                    Most Popular
                  </span>
                )}
                <div className={`mb-3.5 text-[13.5px] font-semibold tracking-wide uppercase ${plan.highlight ? "text-accent" : "text-primary"}`}>
                  {plan.name}
                </div>
                <div className="mb-1.5 font-display text-[42px] font-extrabold">
                  ${plan.price}
                  <span className="text-[15px] font-medium opacity-60">/project</span>
                </div>
                <p className={`mb-[26px] text-[13.5px] ${plan.highlight ? "text-white/65" : "text-muted"}`}>
                  {plan.desc}
                </p>
                <ul className="mb-[30px]">
                  {plan.features.map((f, fi) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 py-2 text-[14px] ${
                        fi > 0 ? (plan.highlight ? "border-t border-white/10" : "border-t border-ink/8") : ""
                      }`}
                    >
                      <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-accent" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#contact"
                  variant={plan.highlight ? "primary" : "ghost"}
                  className="w-full justify-center"
                >
                  Get Started
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
