import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectStatus = "live" | "soon";

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  tagline: string;
  status: ProjectStatus;
  stack: string[];
  repo: string;
  order: number;
  demo?: string;
};

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): ProjectFrontmatter[] {
  const filenames = fs
    .readdirSync(projectsDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data as ProjectFrontmatter;
  });

  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): ProjectFrontmatter | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
