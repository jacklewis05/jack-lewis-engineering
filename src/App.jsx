import { useEffect, useState } from "react";
import { ONGOING_PROJECTS, COMPLETED_PROJECTS } from "./content";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

const ALL_PROJECTS = [...ONGOING_PROJECTS, ...COMPLETED_PROJECTS];

// Project pages live at #project/<id>, e.g. .../portfolio/#project/egg-thief.
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
  const match = hash.match(/^#project\/(.+)$/);
  const activeProject = match
    ? ALL_PROJECTS.find((p) => p.id === match[1])
    : null;

  useEffect(() => {
    if (activeProject) {
      window.scrollTo(0, 0);
      document.title = `${activeProject.title} — Jack Lewis`;
    } else {
      document.title =
        "Jack Lewis — Mechanical Design, Mechatronics, and Biomechanics";
    }
  }, [activeProject]);

  return (
    <div className="font-body min-h-screen bg-[var(--paper)]">
      <Nav />
      {activeProject ? (
        <ProjectDetail project={activeProject} />
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
