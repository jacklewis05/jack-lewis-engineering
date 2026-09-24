import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "../content";
import { SectionHeader, Tag, GridBackground } from "./shared";

function TimelineItem({ item, isLast }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-10 md:pl-14">
      {!isLast && (
        <span className="absolute bottom-[-2.5rem] left-[7px] top-6 w-px bg-[var(--line)] md:left-[11px]" />
      )}
      <span className="absolute left-0 top-1.5 h-4 w-4 rotate-45 border-2 border-[var(--accent)] bg-[var(--paper)] md:left-1" />

      <button
        onClick={() => setExpanded((v) => !v)}
        className="group w-full pb-10 text-left"
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            {item.dates}
          </span>
          <span className="font-mono border border-[var(--flag)]/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[var(--flag)]">
            {item.tag}
          </span>
        </div>

        <h3 className="font-display mt-2 flex items-center gap-2 text-xl font-semibold text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--accent-bright)] md:text-2xl">
          {item.role}
          <ArrowUpRight
            size={18}
            className={`shrink-0 transition-transform duration-200 ${
              expanded ? "rotate-45" : ""
            }`}
          />
        </h3>
        <p className="font-mono mt-1 text-sm text-[var(--accent)]">{item.org}</p>
        <p className="font-body mt-3 max-w-xl text-[var(--muted)]">
          {item.summary}
        </p>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            expanded
              ? "mt-4 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="mb-4 space-y-2">
              {item.details.map((d, i) => (
                <li
                  key={i}
                  className="font-body relative max-w-2xl pl-4 text-sm leading-relaxed text-[var(--muted)] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:bg-[var(--accent)]/40 before:content-['']"
                >
                  {d}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </div>

        <span className="font-mono mt-2 inline-block text-[10px] uppercase tracking-widest text-[var(--muted)]/70">
          {expanded ? "Hide details" : "View details"}
        </span>
      </button>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <GridBackground />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          eyebrow="Log"
          title="Experience"
          blurb="A timeline of my research, team, and club experience."
        />
        <div>
          {EXPERIENCE.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
