import { useEffect, useState } from "react";
import { ONGOING_PROJECTS, COMPLETED_PROJECTS, PROFILE } from "./content";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import { scrollToSection } from "./components/shared";

const ALL_PROJECTS = [...ONGOING_PROJECTS, ...COMPLETED_PROJECTS];

// Project pages live at #project/<id>, and a section of a project page at
// #project/<id>/<section>, e.g. #project/helmet-impact-rigs/fea.
// Hash links work on GitHub Pages without any server setup.
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHash();
  const match = hash.match(/^#project\/([^/]+)(?:\/([^/]+))?$/);
  const activeProject = match
    ? ALL_PROJECTS.find((p) => p.id === match[1])
    : null;
  const section = match ? match[2] : null;

  useEffect(() => {
    if (activeProject) {
      document.title = `${activeProject.title} — ${PROFILE.name}`;
    } else {
      document.title = `${PROFILE.name} — ${PROFILE.title}`;
    }
  }, [activeProject]);

  // Opening a project starts at the top, unless the link points at a section.
  useEffect(() => {
    if (!activeProject) return;
    if (!section) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const t = setTimeout(() => scrollToSection(section), 50);
    return () => clearTimeout(t);
  }, [activeProject, section]);

  return (
    <div className="font-body min-h-screen bg-[var(--paper)]">
      <Nav />
      {activeProject ? (
        <ProjectDetail project={activeProject} allProjects={ALL_PROJECTS} />
      ) : (
        <>
          <Hero />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}
