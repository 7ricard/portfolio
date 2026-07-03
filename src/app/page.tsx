const stack = ["Python", "Supabase", "Streamlit"];

export default function Home() {
  return (
    <main className="flex flex-1 justify-start bg-background px-6 py-24 sm:px-12">
      <div className="flex w-full max-w-[720px] flex-col items-start gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          01 / Foundation
        </span>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Style Preview
        </h1>

        <h2 className="text-xl font-normal text-foreground/80">
          A quick look at the palette and type before any real pages get built.
        </h2>

        <p className="max-w-[60ch] text-base leading-relaxed text-foreground">
          This paragraph is set in Geist Sans at body size, sitting on the
          background token. It exists only to check how the type and color
          combination reads before real content is written.
        </p>

        <p className="text-sm text-muted">
          Muted text, for captions and secondary detail beneath the main copy.
        </p>

        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          A sample text link
        </a>

        <div className="w-full rounded-lg border border-border bg-surface p-6">
          <h3 className="text-lg font-medium text-foreground">Card heading</h3>
          <p className="mt-2 text-sm text-muted">
            One line of body text living inside a surface card block.
          </p>
        </div>
      </div>
    </main>
  );
}
