import { useEffect, useRef, type ReactNode } from "react";

/** Fades/slides children in on scroll with GSAP ScrollTrigger. Respects reduced motion. */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "section" | "li" }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(el, { y: 40, opacity: 0, duration: 1, delay, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
    })();
    return () => { cancelled = true; ctx?.revert(); };
  }, [delay]);
  return <Tag ref={ref as never} className={className}>{children}</Tag>;
}
