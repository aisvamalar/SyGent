import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-paper py-24 sm:py-36">
      <div className="container-x">
        <Reveal className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="display-lg">WHAT WE DO</h2>
          <p className="max-w-md text-lg text-muted-foreground md:justify-self-end">We bring intelligence and engineering together to create technology that makes a difference.</p>
        </Reveal>
        <ul className="border-t border-foreground/15">
          {services.map((s) => (
            <Reveal as="li" key={s.num} className="group border-b border-foreground/15">
              <a href="#contact" className="grid gap-4 py-10 transition-all duration-500 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-8 sm:group-hover:px-6">
                <span className="font-display text-lg font-bold text-brand">{s.num}</span>
                <div className="grid gap-3 lg:grid-cols-2 lg:items-center lg:gap-12">
                  <h3 className="font-display text-3xl font-bold sm:text-4xl">{s.title}</h3>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
                <span className="hidden h-14 w-14 place-items-center rounded-full border border-foreground/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-ink-foreground sm:grid">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
