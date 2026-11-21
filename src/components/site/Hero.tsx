import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Box, BrainCircuit, Code2, Plus } from "lucide-react";
import { ProductComposer } from "./ProductComposer";

const lines = [
  { text: "WE BUILD" },
  { text: "DIGITAL", outline: true },
  { text: "EXPERIENCES", editorial: true },
  { text: "THAT MOVE" },
  { text: "BUSINESS" },
  { text: "FORWARD.", accent: true },
];

const modes = [
  {
    label: "ARTIFICIAL INTELLIGENCE",
    icon: BrainCircuit,
    stream: "Building intelligent systems that learn, adapt and turn complex workflows into effortless experiences.",
  },
  {
    label: "AUGMENTED REALITY",
    icon: Box,
    stream: "Blending digital imagination with the physical world through immersive, interactive AR experiences.",
  },
  {
    label: "DIGITAL PRODUCTS",
    icon: Code2,
    stream: "Engineering fast, scalable web and mobile products around real people and measurable business growth.",
  },
];

function StreamingText({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleText(text);
      return;
    }

    let character = 0;
    const timer = window.setInterval(() => {
      character += 1;
      setVisibleText(text.slice(0, character));
      if (character >= text.length) window.clearInterval(timer);
    }, 24);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <p aria-label={text} className="min-h-[3.75rem] text-sm leading-relaxed text-muted-foreground sm:min-h-[3.5rem] sm:text-base">
      <span aria-hidden="true">{visibleText}</span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] bg-brand animate-pulse motion-reduce:hidden" />
    </p>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const ActiveModeIcon = modes[active]!.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    import("gsap").then(({ gsap }) => {
      ctx = gsap.context(() => {
        gsap.from("[data-line]", { yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.07 });
        gsap.from("[data-fade]", { opacity: 0, y: 24, duration: 1, delay: 0.45, stagger: 0.1, ease: "power3.out" });
      }, el);
    });
    return () => ctx?.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % modes.length), 5000);
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <section id="home" ref={ref} className="relative isolate overflow-hidden border-b pb-12 pt-32 sm:pb-16 sm:pt-40 lg:pt-36">
      <div aria-hidden="true" className="absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand-soft/20 blur-3xl" />
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-20">
          <div className="relative z-10">
            <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-2 -z-10 select-none font-display text-[25rem] font-bold leading-none text-brand-soft/10 sm:text-[32rem]">S</div>
            <div data-fade className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full border border-brand/40">
                <Plus className="h-3.5 w-3.5 text-brand" />
              </span>
              <p className="eyebrow">AI & DIGITAL ENGINEERING STUDIO</p>
            </div>

            <div className="relative mt-8">
              <div aria-hidden="true" className="absolute -left-8 top-0 hidden h-full flex-col justify-between py-2 xl:flex">
                {modes.map((mode, index) => (
                  <span key={mode.label} className={`w-px transition-all duration-500 ${index === active ? "h-16 bg-brand" : "h-8 bg-border"}`} />
                ))}
              </div>
              <h1 className="font-display text-[clamp(2.75rem,5.2vw,5rem)] font-bold leading-[0.88] tracking-[-0.05em]">
                {lines.map((line) => (
                  <span key={line.text} className="block overflow-hidden pb-[0.08em]">
                    <span
                      data-line
                      className={`block ${line.editorial ? "font-editorial font-normal italic tracking-[-0.055em]" : ""} ${line.accent ? "text-brand" : ""} ${line.outline ? "text-transparent [-webkit-text-stroke:1.25px_var(--foreground)]" : ""}`}
                    >
                      <span className="relative inline-block">
                        {line.text}
                        {line.accent ? <span aria-hidden="true" className="absolute bottom-0 left-0 h-[0.055em] w-full origin-left bg-brand animate-[forward-line_5s_ease-in-out_infinite] motion-reduce:animate-none" /> : null}
                      </span>
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <div data-fade className="relative mt-7 max-w-xl overflow-hidden rounded-xl border bg-paper/45">
              <div className="flex items-center gap-3 border-b px-4 py-3">
                <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <span className="text-[8px] font-bold tracking-[0.18em] text-muted-foreground">LIVE STREAM / 0{active + 1}</span>
                <span className="h-3 w-px bg-border" aria-hidden="true" />
                <div key={active} className="flex min-w-0 items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-500 motion-reduce:animate-none">
                  <ActiveModeIcon className="h-3.5 w-3.5 shrink-0 text-brand" />
                  <span className="truncate font-display text-[9px] font-bold tracking-[0.08em] text-brand sm:text-[10px]">{modes[active]!.label}</span>
                </div>
              </div>
              <div className="relative px-4 py-4 pl-5">
                <span aria-hidden="true" className="absolute bottom-4 left-4 top-4 w-px bg-brand/30" />
                <div className="pl-3">
                  <StreamingText key={active} text={modes[active]!.stream} />
                </div>
              </div>
              <div className="h-0.5 overflow-hidden bg-border" aria-hidden="true">
                <span key={active} className="block h-full origin-left bg-brand animate-[engine-progress_5s_linear] motion-reduce:animate-none" />
              </div>
            </div>

            <div data-fade className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-ink-foreground transition-colors hover:bg-foreground hover:text-background">
                Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#work" className="group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-4 font-semibold transition-colors hover:border-brand hover:text-brand">
                Explore our work <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          <ProductComposer active={active} onSelect={setActive} />
        </div>

        <div data-fade className="mt-14 flex items-center justify-between gap-6 border-t pt-5 text-[10px] font-bold tracking-[0.18em] text-muted-foreground sm:text-xs">
          <span>INTELLIGENCE MEETS INNOVATION.</span>
          <a href="#work" className="group flex shrink-0 items-center gap-2 transition-colors hover:text-brand">
            SCROLL TO EXPLORE <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
