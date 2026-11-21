import { capabilities } from "@/data/site";

export function Capabilities() {
  const items = [...capabilities, ...capabilities];
  return (
    <section aria-label="Capabilities" className="overflow-hidden border-y bg-paper py-6">
      <div className="marquee flex w-max gap-10">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-semibold tracking-tight sm:text-3xl" aria-hidden={i >= capabilities.length}>
            {c}<span className="text-brand">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
