import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  tags: string[];
  status: "live" | "soon";
  href?: string;
};

export function ProjectCard({
  name,
  description,
  tags,
  status,
  href,
}: ProjectCardProps) {
  const content = (
    <div
      className={`w-full rounded-lg border border-border bg-surface p-6 transition-colors ${
        status === "live" ? "hover:border-accent/50" : "opacity-80"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium text-foreground">{name}</h3>
        {status === "live" ? (
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
            View &rarr;
          </span>
        ) : (
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
            Coming soon
          </span>
        )}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (status === "live" && href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
