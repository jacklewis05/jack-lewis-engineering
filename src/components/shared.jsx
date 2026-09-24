// Small pieces used in several places. You shouldn't need to edit this file.

// Turns "/images/foo.jpg" into a path that works under /portfolio/ on GitHub Pages.
export function asset(path) {
  if (!path || /^https?:\/\//.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}

// Scrolls to a section on the home page, e.g. goTo("#projects").
// If we're on a project page, it goes back to the home page first.
export function goTo(hash) {
  const scroll = () => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  if (window.location.hash.startsWith("#project/")) {
    window.location.hash = hash;
    setTimeout(scroll, 50);
  } else {
    scroll();
  }
}

export function SectionHeader({ eyebrow, title, blurb }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-6 bg-[var(--accent)]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
        {title}
      </h2>
      {blurb && (
        <p className="font-body mt-3 max-w-xl text-[var(--muted)]">{blurb}</p>
      )}
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span className="font-mono bg-[var(--paper-dim)] px-2 py-1 text-[10px] uppercase tracking-wider text-[var(--muted)]">
      {children}
    </span>
  );
}

export function GridBackground({ opacity = "opacity-40" }) {
  return (
    <div
      className={`blueprint-grid pointer-events-none absolute inset-0 ${opacity}`}
    />
  );
}
