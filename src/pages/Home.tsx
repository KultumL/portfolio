import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Github, Mail, FileDown, ArrowUpRight, Linkedin } from "lucide-react";
import { groups, type Project } from "@/lib/projects";
import profileImg from "@/assets/portfolioPicture.jpg";

const NAV = [
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const ROLES = ["Developer", "Innovator", "Learner"];

export default function Home() {
  const active = useScrollSpy(["top", "about", "projects", "contact"]);
  useEffect(() => {
    document.title = "Kultum Lhabaik — Developer · Innovator · Learner";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Nav active={active} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids.join(",")]);
  return active;
}

function Nav({ active }: { active: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-5xl px-4">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse-glow shadow-[0_0_12px_var(--aurora-mint)]" />
            <span>Kultum<span className="text-aurora">.</span></span>
          </a>
          <ul className="hidden gap-6 text-sm md:flex">
            {NAV.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-primary shadow-[0_0_8px_var(--aurora-mint)]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="/portfolio/KultumL_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Resume <FileDown className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <span
        className="flex flex-col transition-transform duration-700 ease-out"
        style={{ transform: `translateY(-${i * 1.4}em)` }}
      >
        {ROLES.map((r) => (
          <span key={r} className="h-[1.4em] text-aurora font-semibold">
            {r}
          </span>
        ))}
      </span>
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      <div className="relative mx-auto w-full max-w-5xl px-6">
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Kultum<br />
          <span className="text-aurora">Lhabaik</span>
        </h1>
        <p className="mt-8 text-2xl text-muted-foreground md:text-3xl">
          <RotatingRole />
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:translate-y-[-1px] hover:shadow-[0_0_30px_var(--aurora-mint)]">
            View Projects <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/10">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">// About</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Building for a more accessible and efficient world.<span className="text-aurora"> think and feel</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Hi, I’m Kultum, a recent graduate of Emory University with a bachelor’s degree in Computer Science and a minor in Economics.
              I’m passionate about using my background to solve complex problems, take on new challenges, and build solutions that create meaningful impact.
              I’m especially motivated by work that improves access, expands opportunity, and supports underrepresented communities.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 glass">
              <img src={profileImg} alt="Kultum Lhabaik" className="h-full w-full object-cover" width={600} height={750} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">// Projects</p>
        <div className="mt-12 space-y-20">
          {groups.map((g) => (
            <div key={g.id}>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">{g.label}</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {g.projects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass text-left transition duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_var(--aurora-violet)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h4 className="font-display text-xl font-semibold">{project.title}</h4>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{t}</span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
          View details <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: "var(--gradient-glow)" }} aria-hidden />
          <p className="relative text-xs uppercase tracking-[0.3em] text-primary">// Contact</p>
          <h2 className="relative mt-4 font-display text-4xl font-bold md:text-6xl">
            Get in <span className="text-aurora">touch</span>.
          </h2>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <a href="mailto:klhabaik@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:shadow-[0_0_30px_var(--aurora-mint)]">
              <Mail className="h-4 w-4" /> klhabaik@gmail.com
            </a>
            <a href="https://github.com/KultumL/Kultum-s-Personal-Projects" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/10">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/kultum2026" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/10">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="/portfolio/KultumL_resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/10">
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Kultum Lhabaik. Crafted with curiosity.</span>
        <span className="font-display tracking-widest">DEV · INNOVATE · LEARN</span>
      </div>
    </footer>
  );
}
