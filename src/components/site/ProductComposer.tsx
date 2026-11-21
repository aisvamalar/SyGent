import { useEffect, useRef } from "react";
import { Box, BrainCircuit, Code2, MousePointer2, Plus } from "lucide-react";

type SceneId = "ai" | "ar" | "web";
type Point = { x: number; y: number };
type Particle = Point & { vx: number; vy: number };

const items: Array<{ id: SceneId; label: string; name: string; description: string; icon: typeof BrainCircuit }> = [
  { id: "ai", label: "AI", name: "Artificial intelligence", description: "Adaptive systems, agents and intelligent automation.", icon: BrainCircuit },
  { id: "ar", label: "AR", name: "Augmented reality", description: "Immersive 3D experiences connecting physical and digital worlds.", icon: Box },
  { id: "web", label: "WEB", name: "Digital products", description: "Web, mobile and e-commerce platforms engineered to scale.", icon: Code2 },
];

export function ProductComposer({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  const selected = items[active]!;
  const SelectedIcon = selected.icon;

  return (
    <div data-fade className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
      <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[2.5rem] border border-brand/15" />
      <div className="rounded-[2rem] border bg-paper/80 p-4 shadow-[0_40px_120px_-50px_var(--brand)] sm:p-6">
        <div className="flex items-center justify-between gap-4 px-1">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            SYGENT / LIVING IDENTITY
          </div>
          <span className="shrink-0 font-display text-xs font-bold text-brand">0{active + 1} / 03</span>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[1.5rem] border bg-background">
          <div className="flex items-center justify-between border-b px-4 py-3 text-[8px] font-bold tracking-[0.17em] text-muted-foreground">
            <span>MORPHING LIVE</span>
            <span className="inline-flex items-center gap-1.5"><MousePointer2 className="h-3 w-3 text-brand" /> MOVE TO DISRUPT</span>
          </div>
          <div className="blueprint-grid relative aspect-[14/11]">
            <ParticleCanvas shape={selected.id} />
            <Plus aria-hidden="true" className="absolute left-4 top-4 h-3.5 w-3.5 text-brand/60" />
            <Plus aria-hidden="true" className="absolute bottom-4 right-4 h-3.5 w-3.5 text-brand/60" />
            <span aria-hidden="true" className="absolute bottom-4 left-4 text-[7px] font-bold tracking-[0.2em] text-muted-foreground">FORM / {selected.label}</span>
          </div>
          <div className="grid grid-cols-3 border-t">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show ${item.name}`}
                  aria-pressed={isActive}
                  onClick={() => onSelect(index)}
                  className={`flex items-center justify-center gap-2 border-r px-3 py-4 text-[10px] font-bold tracking-[0.14em] transition-colors last:border-r-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand ${isActive ? "bg-brand text-ink-foreground" : "text-muted-foreground hover:bg-brand-soft/20 hover:text-brand"}`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.7} /> {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-h-24 px-1 pb-1 pt-5">
          <div key={selected.id} className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500 motion-reduce:animate-none">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
              <SelectedIcon className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-xl font-bold">{selected.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{selected.description}</p>
            </div>
          </div>
        </div>
        <div className="mx-1 h-px overflow-hidden bg-border">
          <div key={active} className="h-full origin-left bg-brand animate-[engine-progress_5s_linear] motion-reduce:animate-none" />
        </div>
      </div>
    </div>
  );
}

function ParticleCanvas({ shape }: { shape: SceneId }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const width = 560;
    const height = 440;
    canvas.width = width;
    canvas.height = height;
    const targets = createTextTargets(shape, width, height);
    const previous = particlesRef.current;
    const particles = targets.map((target, index) => previous[index] ?? {
      x: width / 2 + (Math.random() - 0.5) * width,
      y: height / 2 + (Math.random() - 0.5) * height,
      vx: 0,
      vy: 0,
    });
    particlesRef.current = particles;

    const brand = getComputedStyle(document.documentElement).getPropertyValue("--brand").trim();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse: Point = { x: -1000, y: -1000 };
    let frame = 0;

    function draw() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      context.fillStyle = brand;

      particles.forEach((particle, index) => {
        const target = targets[index]!;
        if (reducedMotion) {
          particle.x = target.x;
          particle.y = target.y;
        } else {
          const dx = target.x - particle.x;
          const dy = target.y - particle.y;
          particle.vx = (particle.vx + dx * 0.018) * 0.88;
          particle.vy = (particle.vy + dy * 0.018) * 0.88;

          const mouseX = particle.x - mouse.x;
          const mouseY = particle.y - mouse.y;
          const distance = Math.hypot(mouseX, mouseY);
          if (distance < 85 && distance > 0) {
            const force = (85 - distance) / 85;
            particle.vx += (mouseX / distance) * force * 3.2;
            particle.vy += (mouseY / distance) * force * 3.2;
          }
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        context.globalAlpha = 0.58 + (index % 6) * 0.075;
        context.beginPath();
        context.arc(particle.x, particle.y, index % 13 === 0 ? 2.1 : 1.25, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    }

    function onPointerMove(event: PointerEvent) {
      const bounds = canvasRef.current?.getBoundingClientRect();
      if (!bounds) return;
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * width;
      mouse.y = ((event.clientY - bounds.top) / bounds.height) * height;
    }
    function onPointerLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    draw();

    return () => {
      window.cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [shape]);

  return <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />;
}

function createTextTargets(shape: SceneId, width: number, height: number): Point[] {
  const buffer = document.createElement("canvas");
  buffer.width = width;
  buffer.height = height;
  const context = buffer.getContext("2d", { willReadFrequently: true });
  if (!context) return [{ x: width / 2, y: height / 2 }];

  const label = shape === "web" ? "WEB" : shape.toUpperCase();
  const fontSize = shape === "web" ? 158 : 220;
  context.fillStyle = "currentColor";
  context.font = `800 ${fontSize}px Archivo, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(label, width / 2, height / 2 + 8);

  const pixels = context.getImageData(0, 0, width, height).data;
  const points: Point[] = [];
  const step = 5;
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if ((pixels[(y * width + x) * 4 + 3] ?? 0) > 100) points.push({ x, y });
    }
  }
  if (points.length === 0) return [{ x: width / 2, y: height / 2 }];

  const count = Math.min(1500, Math.max(900, points.length));
  return Array.from({ length: count }, (_, index) => points[index % points.length]!);
}
