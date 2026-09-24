import { ONGOING_PROJECTS, COMPLETED_PROJECTS } from "../content";
import { SectionHeader, Tag, GridBackground } from "./shared";

export function orgLine(project) {
  return [project.org, project.period].filter(Boolean).join(" · ");
}

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <a
      href={`#project/${project.id}`}
      className="group relative flex h-full cursor-pointer flex-col border border-[var(--line)] bg-[var(--paper)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[6px_6px_0_0_var(--accent)]"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--line)] text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--paper)]">
          {Icon && <Icon size={18} />}
        </div>
        <span className="font-mono text-right text-[10px] uppercase tracking-widest text-[var(--muted)]">
          {project.category}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug text-[var(--ink)]">
        {project.title}
      </h3>
      <p className="font-mono mt-1 text-xs text-[var(--accent)]">
        {orgLine(project)}
      </p>

      <p className="font-body mt-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--line)] pt-5">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </a>
  );
}

function ProjectSubsection({ eyebrow, title, projects }) {
  if (!projects.length) return null;
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-4 bg-[var(--accent)]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          {eyebrow}
        </span>
        <h3 className="font-display ml-1 text-xl font-semibold text-[var(--ink)]">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <GridBackground />
      <div className="relative mx-auto max-w-6xl border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          eyebrow="Builds"
          title="Projects"
          blurb="A working set of the mechanisms, devices, and systems I've built across labs, clubs, classes, and weekends."
        />
        <ProjectSubsection
          eyebrow="In progress"
          title="Ongoing projects"
          projects={ONGOING_PROJECTS}
        />
        <ProjectSubsection
          eyebrow="Shipped"
          title="Completed projects"
          projects={COMPLETED_PROJECTS}
        />
      </div>
    </section>
  );
}
