import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function FeaturedProject() {
  return (
    <section className="pb-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="scale">
          <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[32px] border border-ink/8 bg-linear-to-br from-[#eefdf3] to-white p-8 sm:p-12 lg:grid-cols-2 lg:gap-[50px] lg:p-16 dark:from-[#062f19] dark:to-[#04140b]">
            <div>
              <Eyebrow>Featured Project</Eyebrow>
              <h2 className="mb-4 text-[28px] leading-[1.12] sm:text-[36px] lg:text-[44px]">
                The Wayfarer Hotel
              </h2>
              <p className="mb-7 max-w-md text-[16.5px] leading-relaxed text-muted">
                A full booking experience for a boutique hotel — real-time availability, a
                photo-rich room browser, and a 1.1s average load time that keeps guests from
                bouncing.
              </p>
              <div className="mb-7 flex flex-wrap gap-3">
                {["Next.js", "Tailwind CSS", "Motion"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/8 bg-surface px-[18px] py-3 text-[13.5px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button href="#contact">Visit Project</Button>
            </div>

            <div className="relative">
              <div className="rounded-t-[14px] bg-dark p-4 shadow-2xl">
                <div className="mb-3 flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-[9px] w-[9px] rounded-full bg-white/20" />
                  ))}
                </div>
                <div className="mb-2.5 flex h-[170px] items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent font-display font-bold text-white">
                  The Wayfarer Hotel
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-11 rounded-md bg-white/8" />
                  ))}
                </div>
              </div>
              <div className="relative h-3.5 rounded-b-lg bg-[#c9d3ce]">
                <div className="absolute top-0 left-1/2 h-1.5 w-[60px] -translate-x-1/2 rounded-b-md bg-[#a8b5ae]" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
