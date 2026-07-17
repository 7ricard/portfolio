import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";

const projects = [
  {
    name: "GTM Intelligence Platform",
    description:
      "Agentic account intelligence for GTM teams. Sources, verifies, enriches, and scores net-new accounts against a weighted ICP rubric you define and tune in-app. Built entirely on free tools.",
    tags: ["Python", "Claude API", "Supabase", "Streamlit", "Tavily"],
    status: "live" as const,
    href: "/projects/gtm-intelligence-platform",
  },
  {
    name: "SovereignAI",
    description: "A synthetic RevOps data engine. Details coming soon.",
    tags: ["Python", "PostgreSQL", "ETL"],
    status: "soon" as const,
  },
  {
    name: "More coming",
    description: "Another RevOps system in progress.",
    tags: ["RevOps"],
    status: "soon" as const,
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-background px-6 py-24 sm:px-12">
      <div className="flex w-full max-w-[720px] flex-col items-start">
        {/* Hero */}
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Ricardo Gonzalez-Murillo
        </span>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          Agentic operationalization of the full RevOps lifecycle.
        </h1>

        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-foreground/80">
          GTM engineer and RevOps professional. I build the processes, tools,
          and systems that turn go-to-market strategy into working machinery.
        </p>

        {/* Projects */}
        <span className="mt-20 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Projects
        </span>

        <div className="mt-6 flex w-full flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        {/* About */}
        <span className="mt-20 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          About
        </span>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-foreground">
          Eight years in B2B SaaS spanning enterprise sales, customer success,
          and revenue operations. I&apos;ve carried a quota, managed $7.7M+ in
          ARR, and built GTM systems from zero at five companies. Currently at
          Eden Data (acquired by Riveron), where I&apos;m the entire RevOps
          function. Previously LinkedIn and Yext, plus four stealth startups
          as a fractional RevOps lead. I started on the sales floor, which
          means I build for the people who actually use the tools, not just
          the dashboard. Python, SQL, Salesforce, HubSpot, Gong, Clay, and a
          bias toward building over buying.
        </p>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-foreground">
          I take on fractional, consulting, and project-based work. Open to
          full-time for the right team and opportunity.
        </p>

        {/* Contact */}
        <SiteFooter />
      </div>
    </main>
  );
}
