"use client";

import { useState } from "react";

const EMAIL = "contact@7ricardo.com";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator.clipboard) return;

    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard write failed; leave the address readable with no confirmation.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="cursor-pointer font-mono text-muted transition-colors hover:text-accent"
    >
      {copied ? "Copied" : EMAIL}
    </button>
  );
}

export function SiteFooter() {
  return (
    <div className="mt-20 w-full border-t border-border pt-12">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Contact
      </span>

      <div className="mt-6 flex flex-wrap items-center gap-6">
        <a
          href="https://linkedin.com/in/7ricardo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/7ricard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-accent"
        >
          GitHub
        </a>
        <CopyEmail />
      </div>

      <p className="mt-6 text-sm text-muted">Ricardo Gonzalez M.</p>
    </div>
  );
}
