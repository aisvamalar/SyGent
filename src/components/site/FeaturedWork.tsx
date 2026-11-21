import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, Monitor, Smartphone } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "./Reveal";
import { projectGalleries } from "./ProjectPreviews";
import { Shot } from "./Shot";

export function FeaturedWork() {
  const [activeId, setActiveId] = useState(projects[0]!.id);
  const [screenIndex, setScreenIndex] = useState(0);
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0]!;
  const gallery = projectGalleries[activeProject.id]!;
  const currentScreen = gallery[screenIndex] ?? gallery[0]!;
  const DeviceIcon = currentScreen.device === "web" ? Monitor : Smartphone;

  function selectProject(id: string) {
    setActiveId(id);
    setScreenIndex(0);
  }

  function changeScreen(direction: number) {
    setScreenIndex((current) => (current + direction + gallery.length) % gallery.length);
  }

  return (
    <section id="work" className="py-24 sm:py-36">
      <div className="container-x">
        <Reveal className="mb-12 grid gap-6 md:grid-cols-2 md:items-end sm:mb-16">
          <div>
            <p className="eyebrow mb-4 text-brand">SELECTED PROJECTS / 04</p>
            <h2 className="display-lg">OUR WORK</h2>
          </div>
          <p className="max-w-md text-lg text-muted-foreground md:justify-self-end">
            Four products, explored up close. Choose a project, browse its screens, and zoom into the details.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid min-w-0 overflow-hidden rounded-[2rem] border bg-paper lg:grid-cols-[270px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="min-w-0 border-b lg:border-b-0 lg:border-r">
              <div className="hidden items-center justify-between border-b px-6 py-5 lg:flex">
                <span className="eyebrow">PROJECT INDEX</span>
                <span className="font-display text-xs font-bold text-brand">01—04</span>
              </div>
              <nav aria-label="Choose a project" className="flex overflow-x-auto lg:block lg:overflow-visible">
                {projects.map((project) => {
                  const isActive = project.id === activeProject.id;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      aria-pressed={isActive}
                      aria-controls="project-showcase"
                      onClick={() => selectProject(project.id)}
                      className={`group relative min-w-[175px] flex-1 border-r px-5 py-5 text-left transition-colors last:border-r-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand lg:flex lg:w-full lg:min-w-0 lg:items-center lg:gap-4 lg:border-b lg:border-r-0 lg:px-6 lg:py-7 ${isActive ? "bg-brand-soft/25" : "hover:bg-background/50"}`}
                    >
                      {isActive ? <span className="absolute inset-y-0 left-0 w-0.5 bg-brand" aria-hidden="true" /> : null}
                      <span className={`font-display text-xs font-bold ${isActive ? "text-brand" : "text-muted-foreground"}`}>{project.num}</span>
                      <span className="mt-1 block lg:mt-0 lg:flex-1">
                        <span className="block font-display text-lg font-bold tracking-tight">{project.name}</span>
                        <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-wider text-muted-foreground lg:block">{project.platform}</span>
                      </span>
                      <ArrowUpRight className={`hidden h-4 w-4 shrink-0 transition-all lg:block ${isActive ? "text-brand opacity-100" : "opacity-0 group-hover:opacity-60"}`} aria-hidden="true" />
                    </button>
                  );
                })}
              </nav>
              <div className="hidden border-t p-6 lg:block">
                <p className="text-xs leading-relaxed text-muted-foreground">Select a project to open its interactive case-study gallery.</p>
              </div>
            </aside>

            <article id="project-showcase" aria-live="polite" className="min-w-0">
              <div key={activeProject.id} className="animate-in fade-in duration-500 motion-reduce:animate-none">
                <div className="grid gap-7 p-6 sm:p-8 xl:grid-cols-[1fr_1.1fr] xl:gap-12 xl:p-10">
                  <div>
                    <p className="eyebrow text-brand">PROJECT {activeProject.num} / {activeProject.category}</p>
                    <h3 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{activeProject.name}</h3>
                    <p className="mt-3 max-w-lg text-lg font-semibold">{activeProject.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2" aria-label={`Available on ${activeProject.platform}`}>
                      {activeProject.devices.includes("web") ? (
                        <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-2 text-[10px] font-bold uppercase tracking-wider">
                          <Monitor className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> Web
                        </span>
                      ) : null}
                      {activeProject.devices.includes("mobile") ? (
                        <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-2 text-[10px] font-bold uppercase tracking-wider">
                          <Smartphone className="h-3.5 w-3.5 text-brand" aria-hidden="true" /> {activeProject.id === "speaksi" ? "Mobile app" : "Mobile web"}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="max-w-2xl leading-relaxed text-muted-foreground">{activeProject.description}</p>
                    <a href="#contact" className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold underline-offset-8 hover:underline">
                      Start a similar project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                <div className="border-y bg-background/45 p-4 sm:p-6 lg:p-8">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                        <DeviceIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-brand">{currentScreen.deviceLabel}</p>
                        <p className="truncate text-sm font-semibold">{currentScreen.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="mr-2 font-display text-xs font-bold text-muted-foreground">0{screenIndex + 1} / 0{gallery.length}</span>
                      <button type="button" onClick={() => changeScreen(-1)} aria-label="Previous screen" className="grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                      <button type="button" onClick={() => changeScreen(1)} aria-label="Next screen" className="grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="blueprint-grid grid min-h-[280px] place-items-center rounded-2xl border p-3 sm:min-h-[360px] sm:p-6">
                    <div key={currentScreen.src} className={`relative w-full animate-in fade-in zoom-in-95 duration-500 motion-reduce:animate-none ${currentScreen.device === "mobile" ? "max-w-[310px]" : "max-w-[1100px]"}`}>
                      <Shot src={currentScreen.src} alt={currentScreen.alt} width={currentScreen.width} height={currentScreen.height} />
                      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border bg-background/90 px-3 py-2 text-[9px] font-bold uppercase tracking-wider backdrop-blur-md">
                        <Maximize2 className="h-3 w-3 text-brand" aria-hidden="true" /> Click to zoom
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <div className={`grid gap-3 ${gallery.length === 2 ? "grid-cols-2" : "grid-cols-3"}`} aria-label={`${activeProject.name} screens`}>
                    {gallery.map((screen, index) => {
                      const isActive = index === screenIndex;
                      return (
                        <button
                          key={screen.src}
                          type="button"
                          aria-pressed={isActive}
                          aria-label={`Show ${screen.title}`}
                          onClick={() => setScreenIndex(index)}
                          className={`group min-w-0 overflow-hidden rounded-xl border text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${isActive ? "border-brand bg-brand-soft/20" : "hover:border-brand/50"}`}
                        >
                          <span className="block aspect-[16/8] overflow-hidden border-b bg-background">
                            <img src={screen.src} alt="" width={screen.width} height={screen.height} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                          </span>
                          <span className="block p-2.5 sm:p-3">
                            <span className={`block text-[8px] font-bold uppercase tracking-[0.14em] ${isActive ? "text-brand" : "text-muted-foreground"}`}>0{index + 1} / {screen.deviceLabel}</span>
                            <span className="mt-1 block truncate text-[11px] font-semibold sm:text-xs">{screen.title}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
