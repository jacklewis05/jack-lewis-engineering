import { ArrowUpRight } from "lucide-react";
import { asset, goTo, Tag, GridBackground } from "./shared";
import { orgLine } from "./Projects";

function Caption({ text }) {
  if (!text) return null;
  return (
    <figcaption className="font-mono mt-2 text-center text-[11px] uppercase tracking-widest text-[var(--muted)]">
      {text}
    </figcaption>
  );
}

// Renders one piece of a project's `content` list (see src/content.js).
function Block({ block }) {
  if (typeof block === "string") {
    return (
      <p className="font-body leading-relaxed text-[var(--muted)]">{block}</p>
    );
  }
  if (block.heading) {
    return (
      <h2 className="font-display pt-6 text-2xl font-semibold tracking-tight text-[var(--ink)]">
        {block.heading}
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
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {block.images.map((img, i) => (
          <figure key={i}>
            <img
              src={asset(img.src)}
              alt={img.caption || ""}
              loading="lazy"
              className="aspect-square h-auto w-full border border-[var(--line)] object-cover"
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

export default function ProjectDetail({ project }) {
  const Icon = project.icon;
  const content = project.content ?? [];

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

        {content.length === 0 ? (
          <div className="mt-16 flex items-center justify-center rounded-sm border border-dashed border-[var(--line)] py-24">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              Updates coming soon.
            </p>
          </div>
        ) : (
          <div className="mt-16 max-w-2xl space-y-6">
            {content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
