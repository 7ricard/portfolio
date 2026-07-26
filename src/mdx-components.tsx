import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 text-2xl font-semibold text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-semibold text-foreground" {...props} />
  ),
  p: (props) => (
    <p
      className="mt-4 max-w-[60ch] text-base leading-relaxed text-foreground"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-accent underline underline-offset-4 hover:opacity-80"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-4 list-disc space-y-2 pl-5 text-foreground"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-5 text-foreground"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-foreground"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
