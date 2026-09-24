import { MapPin, GitBranch } from "lucide-react";
import { PROFILE } from "../content";
import { GridBackground } from "./shared";
import { ContactButtons } from "./Hero";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]"
    >
      <GridBackground opacity="opacity-10" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-6 bg-[var(--accent-bright)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-bright)]">
            Get in touch
          </span>
        </div>
        <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          {PROFILE.contactHeadline}
        </h2>

        <div className="mt-10">
          <ContactButtons dark />
        </div>

        <div className="font-mono mt-16 flex flex-wrap items-center gap-2 text-xs text-white/40">
          <MapPin size={13} />
          {PROFILE.location}
          <span className="mx-2">·</span>
          <GitBranch size={13} />
          Built with React + Tailwind
          <span className="mx-2">·</span>© {new Date().getFullYear()}{" "}
          {PROFILE.name}
        </div>
      </div>
    </section>
  );
}
