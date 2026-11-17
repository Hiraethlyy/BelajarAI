import { ContactSection } from "@/components/contact-section";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
            <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
              <div className="flex-1">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
                  {site.availability}
                </p>

                <h1 className="mt-8 text-[clamp(2.6rem,8.5vw,6.5rem)] leading-[0.92] font-medium tracking-[-0.04em]">
                  <span className="block">{site.name}</span>
                  <span className="mt-2 block md:mt-4">
                    <span className="text-accent">{site.roleLead}</span>{" "}
                    <span className="text-outline">{site.roleTail}</span>
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
                  {site.description}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#work"
                    className="bg-accent px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper"
                  >
                    See selected work
                  </a>
                  <a
                    href="#contact"
                    className="border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-accent hover:text-accent"
                  >
                    Get in touch
                  </a>
                </div>
              </div>

              {/* Ganti fotoUrl di content/site.ts setelah foto dikirim. */}
              <div className="w-full max-w-56 shrink-0 md:w-56">
                <div className="flex aspect-[3/4] items-center justify-center border border-dashed border-line bg-ink-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Photo 3:4
                  </span>
                </div>
              </div>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-3">
              {site.proof.map((item) => (
                <div key={item.label}>
                  <dd className="font-mono text-2xl text-accent md:text-3xl">
                    {item.value}
                  </dd>
                  <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-16 border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <SectionLabel index="01">Selected work</SectionLabel>

            <Reveal className="mb-12 max-w-2xl">
              <p className="text-lg leading-relaxed text-paper/80 md:text-xl">
                Three production projects, anonymised where the client work is under
                NDA. Numbers are what changed, not what shipped.
              </p>
            </Reveal>

            <div>
              {projects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 80}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>

            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Full case studies land here next
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-16 border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <SectionLabel index="02">Experience</SectionLabel>

            <div className="border-t border-line">
              {site.experience.map((entry, index) => (
                <Reveal key={`${entry.company}-${entry.period}`} delay={index * 80}>
                  <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[12rem_1fr] md:gap-12">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                        {entry.period}
                      </p>
                      <p className="mt-2 text-sm text-paper/60">{entry.company}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                        {entry.role}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-paper/70">
                        {entry.summary}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
