import { steps } from "@/data/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="bg-ink py-24 text-ink-foreground sm:py-36">
      <div className="container-x">
        <Reveal><p className="eyebrow mb-6 text-ink-muted">Our Process</p><h2 className="display-lg mb-20">FROM IDEA TO IMPACT.</h2></Reveal>
        <ol className="relative grid gap-12 border-l border-ink-muted/40 pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-12">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.num} delay={i * 0.1} className="relative">
              <span className="absolute -left-[2.4rem] top-1 h-3 w-3 rounded-full bg-brand lg:-top-[3.45rem] lg:left-0" />
              <span className="font-display text-sm font-bold text-brand">{s.num}</span>
              <h3 className="mt-3 font-display text-3xl font-bold">{s.title}</h3>
              <p className="mt-3 max-w-xs text-ink-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
