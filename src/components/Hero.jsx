import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { PROFILE } from "../content";
import { asset, GridBackground } from "./shared";

export function ContactButtons({ dark = false }) {
  const primary = dark
    ? "bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--accent-bright)] hover:text-[var(--paper)]"
    : "bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)]";
  const secondary = dark
    ? "border border-white/20 hover:border-white/60"
    : "border border-[var(--line)] hover:border-[var(--ink)]";
  const base =
    "font-mono flex items-center gap-2 text-xs uppercase tracking-widest transition-colors duration-200";

  return (
    <div className="flex flex-wrap items-center gap-4">
      <a href={`mailto:${PROFILE.email}`} className={`${base} ${primary} px-5 py-3`}>
        <Mail size={15} />
        {PROFILE.email}
      </a>
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${secondary} px-4 py-3`}
      >
        <Linkedin size={15} />
        LinkedIn
      </a>
      {PROFILE.github && (
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${secondary} px-4 py-3`}
        >
          <Github size={15} />
          GitHub
        </a>
      )}
      {PROFILE.resume && (
        <a
          href={asset(PROFILE.resume)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${secondary} px-4 py-3`}
        >
          <FileText size={15} />
          Resume
        </a>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <GridBackground />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--accent)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <div className="font-mono mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--accent)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--flag)]" />
              {PROFILE.status}
            </div>

            <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              {PROFILE.name}
            </h1>
            <p className="font-mono mt-5 text-sm uppercase tracking-[0.2em] text-[var(--accent-bright)] md:text-base">
              {PROFILE.title}
            </p>

            <p className="font-body mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              {PROFILE.bio}
            </p>

            <div className="mt-10">
              <ContactButtons />
            </div>
          </div>

          <div className="mx-auto w-40 sm:w-48 md:mx-0 md:mt-2 md:w-56 lg:w-64">
            <img
              src={asset(PROFILE.headshot)}
              alt={PROFILE.name}
              className="h-auto w-full border border-[var(--line)] object-cover shadow-[8px_8px_0_0_var(--accent)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
