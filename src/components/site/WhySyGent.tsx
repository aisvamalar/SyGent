import { reasons } from "@/data/site";
import { Reveal } from "./Reveal";

export function WhySyGent() {
  return (
    <section className="py-24 sm:py-36">
      <div className="container-x">
        <Reveal><h2 className="display-lg mb-16 max-w-4xl">WHY BUILD WITH SYGENT?</h2></Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} className={`group rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1 sm:p-12 ${i === 1 || i === 2 ? "bg-ink text-ink-foreground" : "bg-paper"}`}>
              <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
              <h3 className="mt-16 font-display text-3xl font-bold sm:text-4xl">{r.title}</h3>
              <p className={`mt-4 max-w-sm ${i === 1 || i === 2 ? "text-ink-muted" : "text-muted-foreground"}`}>{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
