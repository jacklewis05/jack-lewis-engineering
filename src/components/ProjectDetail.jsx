import { ArrowUpRight, ArrowLeft, ArrowRight, Link2 } from "lucide-react";
import { asset, goTo, slugify, scrollToSection, Tag, GridBackground } from "./shared";
import { orgLine } from "./Projects";

function Caption({ text }) {
  if (!text) return null;
  return (
    <figcaption className="font-mono mt-2 text-center text-[11px] uppercase tracking-widest text-[var(--muted)]">
      {text}
    </figcaption>
  );
}

// Scrolls to a section and updates the address bar so the link can be shared.
function jumpTo(projectId, slug) {
  const target = `#project/${projectId}/${slug}`;
  if (window.location.hash === target) {
    scrollToSection(slug);
  } else {
    window.location.hash = target;
  }
}

// Renders one piece of a project's `content` list (see src/content.js).
function Block({ block, projectId }) {
  if (typeof block === "string") {
    return (
      <p className="font-body leading-relaxed text-[var(--muted)]">{block}</p>
    );
  }
  if (block.heading) {
    const slug = slugify(block.heading);
    return (
      <h2
        id={`sec-${slug}`}
        className="font-display group flex scroll-mt-24 items-center gap-2 pt-6 text-2xl font-semibold tracking-tight text-[var(--ink)]"
      >
        {block.heading}
        <a
          href={`#project/${projectId}/${slug}`}
          onClick={(e) => {
            e.preventDefault();
            jumpTo(projectId, slug);
          }}
          aria-label={`Link to ${block.heading}`}
          className="text-[var(--muted)] opacity-0 transition-opacity hover:text-[var(--accent-bright)] group-hover:opacity-100"
        >
          <Link2 size={16} />
        </a>
      </h2>
    );
  }
  if (block.image) {
    return (
      <figure>
        <img
          src={asset(block.image)}
          alt={block.caption || ""}
          loading="lazy"
          className="h-auto w-full border border-[var(--line)] object-cover"
        />
        <Caption text={block.caption} />
      </figure>
    );
  }
  if (block.video) {
    return (
      <figure>
        {block.video.startsWith("http") ? (
          <div className="aspect-video w-full overflow-hidden border border-[var(--line)] bg-[var(--paper-dim)]">
            <iframe
              src={block.video}
              title={block.caption || "Project video"}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            src={asset(block.video)}
            controls
            playsInline
            className="h-auto w-full border border-[var(--line)]"
          />
        )}
        <Caption text={block.caption} />
      </figure>
    );
  }
  if (block.images) {
    const n = block.images.length;
    const cols = n === 2 || n === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3";
    return (
      <div className={`grid grid-cols-1 gap-4 ${cols}`}>
        {block.images.map((img, i) => (
          <figure key={i}>
            <img
              src={asset(img.src)}
              alt={img.caption || ""}
              loading="lazy"
              className={`aspect-[4/3] w-full border border-[var(--line)] ${
                block.fit === "contain"
                  ? "bg-white object-contain p-2"
                  : "object-cover"
              }`}
            />
            <Caption text={img.caption} />
          </figure>
        ))}
      </div>
    );
  }
  if (block.list) {
    return (
      <ul className="space-y-3">
        {block.list.map((item, i) => (
          <li
            key={i}
            className="font-body relative pl-5 leading-relaxed text-[var(--muted)] before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:bg-[var(--accent)]/40 before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

// "Jump to" links built from the page's headings.
function JumpLinks({ project, headings }) {
  if (headings.length < 2) return null;
  return (
    <nav className="mt-10 border border-[var(--line)] bg-[var(--paper)] p-5">
      <p className="font-mono mb-3 text-[10px] uppercase tracking-widest text-[var(--accent)]">
        Jump to
      </p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {headings.map((h) => {
          const slug = slugify(h);
          return (
            <a
              key={slug}
              href={`#project/${project.id}/${slug}`}
              onClick={(e) => {
                e.preventDefault();
                jumpTo(project.id, slug);
              }}
              className="font-body text-sm text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--accent-bright)] hover:decoration-[var(--accent-bright)]"
            >
              {h}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

// Previous / next project links at the bottom of the page.
function PrevNext({ project, allProjects }) {
  const i = allProjects.findIndex((p) => p.id === project.id);
  const prev = allProjects[(i - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(i + 1) % allProjects.length];
  const card =
    "group flex flex-1 flex-col gap-1 border border-[var(--line)] bg-[var(--paper)] p-5 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[6px_6px_0_0_var(--accent)]";
  return (
    <div className="mt-20 flex flex-col gap-4 border-t border-[var(--line)] pt-10 sm:flex-row">
      <a href={`#project/${prev.id}`} className={card}>
        <span className="font-mono flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--muted)]">
          <ArrowLeft size={12} /> Previous project
        </span>
        <span className="font-display font-semibold text-[var(--ink)] group-hover:text-[var(--accent-bright)]">
          {prev.title}
        </span>
      </a>
      <a href={`#project/${next.id}`} className={`${card} sm:text-right`}>
        <span className="font-mono flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--muted)] sm:justify-end">
          Next project <ArrowRight size={12} />
        </span>
        <span className="font-display font-semibold text-[var(--ink)] group-hover:text-[var(--accent-bright)]">
          {next.title}
        </span>
      </a>
    </div>
  );
}

export default function ProjectDetail({ project, allProjects }) {
  const Icon = project.icon;
  const content = project.content ?? [];
  const headings = content
    .filter((b) => b && typeof b === "object" && b.heading)
    .map((b) => b.heading);

  return (
    <article className="relative">
      <GridBackground />
      <div className="relative mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            goTo("#projects");
          }}
          className="font-mono mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent-bright)]"
        >
          <ArrowUpRight size={14} className="rotate-[225deg]" />
          Back to projects
        </a>

        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-[var(--accent)] text-[var(--accent)]">
            {Icon && <Icon size={18} />}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
            {project.category}
          </span>
        </div>

        <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
          {project.title}
        </h1>
        <p className="font-mono mt-3 text-sm text-[var(--accent)]">
          {orgLine(project)}
        </p>

        <p className="font-body mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--line)] pt-6">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        {project.cover && (
          <figure className="mt-10">
            <img
              src={asset(project.cover.image)}
              alt={project.cover.caption || project.title}
              className="h-auto max-h-[560px] w-full border border-[var(--line)] object-cover shadow-[8px_8px_0_0_var(--accent)]"
            />
            <Caption text={project.cover.caption} />
          </figure>
        )}

        <JumpLinks project={project} headings={headings} />

        {content.length === 0 ? (
          <div className="mt-16 flex items-center justify-center rounded-sm border border-dashed border-[var(--line)] py-24">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              Updates coming soon.
            </p>
          </div>
        ) : (
          <div className="mt-12 max-w-2xl space-y-6">
            {content.map((block, i) => (
              <Block key={i} block={block} projectId={project.id} />
            ))}
          </div>
        )}

        <PrevNext project={project} allProjects={allProjects} />
      </div>
    </article>
  );
}
