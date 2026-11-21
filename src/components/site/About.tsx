import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-ink py-24 text-ink-foreground sm:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7"><p className="eyebrow mb-6 text-ink-muted">About SyGent</p><h2 className="display-lg">INTELLIGENCE<br />MEETS <span className="text-brand">INNOVATION.</span></h2></Reveal>
        <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-ink-muted lg:col-span-5 lg:pt-16">
          <p className="text-2xl font-semibold leading-snug text-ink-foreground">At SyGent, we believe technology should do more than solve problems. It should create possibilities.</p>
          <p>We combine artificial intelligence, software engineering, automation, and immersive technology to build meaningful digital experiences.</p>
          <p>From early-stage ideas to end-to-end digital products, our focus is on turning complex challenges into practical, scalable solutions.</p>
        </Reveal>
      </div>
    </section>
  );
}
