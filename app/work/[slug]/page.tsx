import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { projects, type ProjectCaseStudy } from "@/content/projects";
import { site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const caseStudySections: { label: string; key: keyof ProjectCaseStudy }[] = [
  { label: "Context", key: "context" },
  { label: "Problem", key: "problem" },
  { label: "Constraints", key: "constraints" },
  { label: "Approach", key: "approach" },
  { label: "Outcome", key: "outcome" },
  { label: "What I'd do differently", key: "nextTime" },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: `Case study not found — ${site.name}` };
  }

  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/#work"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
          >
            ← All work
          </Link>
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper transition-colors hover:text-accent"
          >
            {site.shortName}
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-line">
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-14 md:pt-20 md:pb-16">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="text-accent">{project.index}</span>
              <span aria-hidden className="h-px w-8 bg-line" />
              <span>Case study</span>
            </p>

            <h1 className="mt-8 max-w-4xl text-[clamp(2rem,5.5vw,4rem)] leading-[1.02] font-medium tracking-[-0.03em]">
              {project.title}
            </h1>

            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {project.client} · {project.year} · {project.role}
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/75 md:text-lg">
              {project.summary}
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-8">
              {project.outcomes.map((outcome) => (
                <div key={outcome.label}>
                  <dd className="font-mono text-2xl text-accent md:text-3xl">
                    {outcome.value}
                  </dd>
                  <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {outcome.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[14rem_1fr] md:gap-16 md:py-20">
            <aside className="md:sticky md:top-8 md:self-start">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="max-w-2xl">
              {caseStudySections.map((section, index) => (
                <Reveal key={section.key} delay={index * 60}>
                  <div className="border-t border-line py-8 first:border-t-0 first:pt-0">
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      {section.label}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-paper/80 md:text-base">
                      {project.caseStudy[section.key]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group mx-auto flex max-w-6xl flex-col gap-3 px-6 py-14 transition-colors md:py-16"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Next case study
            </span>
            <span className="text-2xl leading-tight font-medium tracking-tight text-paper transition-colors group-hover:text-accent md:text-3xl">
              {nextProject.title} <span aria-hidden>→</span>
            </span>
          </Link>
        </section>

        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {site.location}
            </span>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
