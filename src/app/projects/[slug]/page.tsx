import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { default: Body } = await import(`@/content/projects/${slug}.mdx`);

  return (
    <main className="flex flex-1 justify-center bg-background px-6 py-24 sm:px-12">
      <div className="flex w-full max-w-[720px] flex-col items-start">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Case Study
        </span>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-foreground/80">
          {project.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:opacity-80"
          >
            View repository
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              Watch demo
            </a>
          )}
        </div>

        <div className="mt-12 w-full border-t border-border pt-12">
          <Body />
        </div>
      </div>
    </main>
  );
}
