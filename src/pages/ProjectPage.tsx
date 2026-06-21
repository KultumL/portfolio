import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, ChevronLeft, ChevronRight, FileText, Figma } from "lucide-react";
import { getProject } from "@/lib/projects";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    if (project) document.title = `${project.title} — Kultum Lhabaik`;
  }, [project]);

  if (!project) return <NotFound />;

  const isPortrait = project.imageAspect === "portrait";

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
            <div className="hidden md:flex">
              {project.repo ? (
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              ) : (
                <span className="w-[88px]" aria-hidden />
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
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

          {/* Carousel or single cover */}
          <div className="mt-10">
            {project.screenshots && project.screenshots.length > 1 ? (
              <Carousel images={project.screenshots} title={project.title} aspect={project.imageAspect} />
            ) : (
              <div className="overflow-hidden rounded-2xl border border-white/10 glass">
                {project.coverType === "video" && project.videoUrl ? (
                  <video src={project.videoUrl} controls className="aspect-video w-full bg-black object-cover" />
                ) : (
                  <img src={project.cover} alt={project.title} className="aspect-video w-full object-cover" />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="mt-20">
        <div className="mx-auto max-w-3xl px-6 space-y-20">
          {project.sections.map((s, i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                {String(i + 1).padStart(2, "0")} / {s.title.toUpperCase()}
              </p>
            
              {s.body && (
                <div className="mt-6 space-y-4">
                  {(Array.isArray(s.body) ? s.body : [s.body]).map((para, j) => (
                    <p key={j} className="text-lg leading-relaxed text-muted-foreground">{para}</p>
                  ))}
                </div>
              )}
              {s.image && (
                <div className={`mt-6 space-y-4 ${isPortrait ? "mx-auto max-w-sm" : ""}`}>
                  {(Array.isArray(s.image) ? s.image : [s.image]).map((src, j) => (
                    <div key={j} className="overflow-hidden rounded-2xl border border-white/10 glass">
                      <img src={src} alt={`${s.title} ${j + 1}`} loading="lazy" className="w-full object-contain" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer actions */}
      <section className="mt-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-10">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:shadow-[0_0_30px_var(--aurora-mint)]">
                <Github className="h-4 w-4" /> View Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition hover:bg-white/10">
                <ExternalLink className="h-4 w-4" /> Live Website
              </a>
            )}
            {project.paper && (
              <a href={project.paper} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition hover:bg-white/10">
                <FileText className="h-4 w-4" /> Read Paper
              </a>
            )}
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition hover:bg-white/10">
                <Figma className="h-4 w-4" /> View in Figma
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

function Carousel({
  images,
  title,
  aspect = "video",
}: {
  images: string[];
  title: string;
  aspect?: "video" | "portrait" | "square";
}) {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState<"left" | "right" | null>(null);

  const goTo = useCallback((next: number, direction: "left" | "right") => {
    setSliding(direction);
    setTimeout(() => {
      setCurrent(next);
      setSliding(null);
    }, 350);
  }, []);

  const prev = () => goTo((current - 1 + images.length) % images.length, "right");
  const next = () => goTo((current + 1) % images.length, "left");

  const aspectClass =
    aspect === "portrait" ? "aspect-[3/4]" : aspect === "square" ? "aspect-square" : "aspect-video";
  const containerClass =
    aspect === "portrait"
      ? "group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 glass"
      : "group relative overflow-hidden rounded-2xl border border-white/10 glass";
  const imgFit = aspect === "video" ? "object-cover" : "object-contain";

  return (
    <div className={containerClass}>
      {/* Slide */}
      <div className={`${aspectClass} w-full overflow-hidden`}>
        <img
          key={current}
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className={`h-full w-full ${imgFit} transition-all duration-350 ease-out
            ${sliding === "left" ? "-translate-x-4 opacity-0" : ""}
            ${sliding === "right" ? "translate-x-4 opacity-0" : ""}
            ${!sliding ? "translate-x-0 opacity-100" : ""}
          `}
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2.5 text-white
          bg-black/60 border border-white/20 shadow-lg
          transition-colors hover:bg-black/80"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2.5 text-white
          bg-black/60 border border-white/20 shadow-lg
          transition-colors hover:bg-black/80"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "left" : "right")}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 bg-primary shadow-[0_0_8px_var(--aurora-mint)]"
                : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}