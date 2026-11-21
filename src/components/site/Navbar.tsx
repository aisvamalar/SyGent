import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container-x">
        <nav className={`flex items-center justify-between gap-4 rounded-full border bg-background/85 py-2 pl-2 pr-2 backdrop-blur-md transition-shadow duration-500 ${scrolled ? "shadow-[0_10px_40px_-20px_var(--ink)]" : ""}`} aria-label="Main">
          <a href="#home" className="flex shrink-0 items-center rounded-full bg-ink px-4 py-2" aria-label="SyGent home">
            <img src={logo} alt="SyGent — Intelligence meets innovation." className="h-8 w-auto sm:h-9" />
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="group hidden items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:text-ink-foreground transition-colors hover:bg-brand lg:inline-flex">
            Schedule a Meeting <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button className="grid h-11 w-11 place-items-center rounded-full bg-secondary lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="mt-2 rounded-3xl border bg-background p-4 lg:hidden">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b py-4 font-display text-2xl font-bold last:border-0">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 font-semibold text-ink-foreground">Schedule a Meeting <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        )}
      </div>
    </header>
  );
}
