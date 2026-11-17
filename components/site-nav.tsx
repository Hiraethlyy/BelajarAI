import Link from "next/link";
import { site } from "@/content/site";

const sections = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.22em] text-paper"
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Sections" className="flex items-center gap-6">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-paper"
            >
              {section.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="hidden border border-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-ink sm:block"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
