import { founders } from "@/data/site";
import { Reveal } from "./Reveal";

export function FoundingTeam() {
  return (
    <section id="team" className="py-24 sm:py-36">
      <div className="container-x">
        <Reveal className="mb-16">
          <p className="eyebrow mb-6">THE PEOPLE BUILDING SYGENT</p>
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="display-lg">FIVE FOUNDERS.<br />ONE SHARED VISION.</h2>
            <p className="max-w-md text-lg text-muted-foreground md:justify-self-end">A multidisciplinary founding team bringing together AI innovation, platform engineering, and digital product development.</p>
          </div>
        </Reveal>
        <ul className="grid border-t sm:grid-cols-2 lg:grid-cols-6">
          {founders.map((f, i) => (
            <Reveal as="li" key={f.name} delay={i * 0.06} className={`group relative flex min-h-64 flex-col justify-between overflow-hidden border-b p-6 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground sm:p-8 lg:col-span-2 ${i >= 3 ? "lg:col-span-3" : ""} sm:border-r`}>
              <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
              <div>
                <h3 className="font-display text-4xl font-bold uppercase sm:text-5xl">{f.name}</h3>
                <p className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-ink-muted">{f.expertise.join(" / ")}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
