import { SKILLS, BEYOND_THE_LAB } from "../content";
import { SectionHeader, GridBackground } from "./shared";

export default function About() {
  return (
    <section id="about" className="relative">
      <GridBackground />
      <div className="relative mx-auto max-w-6xl border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-32">
        <SectionHeader eyebrow="Spec sheet" title="Skills & background" />

        <div className="mb-16 grid gap-10 md:grid-cols-3">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-mono mb-4 text-xs uppercase tracking-widest text-[var(--accent)]">
                {group}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-body border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--ink)] transition-colors duration-200 hover:border-[var(--accent)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {BEYOND_THE_LAB.length > 0 && (
          <div className="border-t border-[var(--line)] pt-10">
            <h4 className="font-mono mb-5 text-xs uppercase tracking-widest text-[var(--accent)]">
              Beyond the lab
            </h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BEYOND_THE_LAB.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    {Icon && (
                      <Icon
                        size={18}
                        className="mt-0.5 shrink-0 text-[var(--accent)]"
                      />
                    )}
                    <p className="font-body text-sm leading-relaxed text-[var(--muted)]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
