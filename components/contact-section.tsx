import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/content/site";

export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="04">Contact</SectionLabel>

        <Reveal>
          <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] font-medium tracking-[-0.03em]">
            Let&apos;s build something{" "}
            <span className="text-accent">worth shipping</span>.
          </h2>

          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-block border-b border-accent pb-1 font-mono text-lg tracking-tight text-paper transition-colors hover:text-accent md:text-2xl"
          >
            {site.email}
          </a>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {site.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {site.location} · CV available on request
          </p>
        </Reveal>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}
          </span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </section>
  );
}
