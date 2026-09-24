import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../content";
import { goTo } from "./shared";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    goTo(href);
  };

  return (
    <header
      className={`font-body sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <button
          onClick={() => handleNav("#top")}
          className="font-display flex items-center gap-2 text-lg font-semibold tracking-tight text-[var(--ink)]"
        >
          <span className="inline-block h-2 w-2 rotate-45 bg-[var(--accent)]" />
          {PROFILE.name}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent-bright)]"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="text-[var(--ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-b border-[var(--line)] bg-[var(--paper)] px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono text-left text-sm uppercase tracking-widest text-[var(--muted)]"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
