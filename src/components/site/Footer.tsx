import logo from "@/assets/logo.png";
import { navLinks, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-ink-foreground">
      <div className="container-x">
        <div className="grid gap-12 border-b border-ink-muted/30 pb-16 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="w-full max-w-[420px]"><img src={logo} alt="SyGent — Intelligence meets innovation." className="block h-auto w-full" /></div>
          <nav aria-label="Footer"><p className="eyebrow mb-5 text-ink-muted">Navigate</p><ul className="space-y-3">{navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-brand">{l.label}</a></li>)}</ul></nav>
          <div><p className="eyebrow mb-5 text-ink-muted">Services</p><ul className="space-y-3">{services.map((s) => <li key={s.num}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}</ul></div>
        </div>
        <p className="pt-8 text-sm text-ink-muted">© {new Date().getFullYear()} SyGent. All rights reserved.</p>
      </div>
    </footer>
  );
}
