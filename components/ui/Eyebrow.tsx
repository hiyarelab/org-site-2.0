import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 py-1.5 pr-4 pl-3 text-xs font-semibold tracking-wider text-primary uppercase",
        className
      )}
    >
      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}
