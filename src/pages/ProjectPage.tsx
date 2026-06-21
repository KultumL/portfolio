import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { getProject } from "@/lib/projects";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    if (project) document.title = `${project.title} — Kultum Lhabaik`;
  }, [project]);

  if (!project) return <NotFound />;

  const galleryImages = project.sections
    .slice(1)
    .map((s) => s.image)
    .filter((src): src is string => Boolean(src));

  return (
    <div className="relative min-h-screen pb-32">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto mt-4 max-w-5xl px-4">
          <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
            <span className="font-display text-sm tracking-tight">
              Kultum<span className="text-aurora">.</span>
            </span>
            <a href={project.repo} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          </nav>
        </div>
      </header>

      <section className="relative pt-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">{project.groupTitle}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{t}</span>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 glass">
            {project.coverType === "video" && project.videoUrl ? (
              <video src={project.videoUrl} controls className="aspect-video w-full bg-black object-cover" />
            ) : (
              <img src={project.cover} alt={project.title} className="aspect-video w-full object-cover" />
            )}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-lg leading-relaxed text-muted-foreground">{project.sections[0].body}</p>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="mt-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-8">
              {galleryImages.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-white/10 glass">
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mt-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-10">
            <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:shadow-[0_0_30px_var(--aurora-mint)]">
              <Github className="h-4 w-4" /> View Code
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition hover:bg-white/10">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            <Link to="/#projects" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition hover:bg-white/10">
              More projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
