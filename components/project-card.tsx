import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-t border-line py-10 transition-colors duration-300 hover:border-accent md:py-12">
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <span className="font-mono text-[11px] tracking-[0.22em] text-muted">
          {project.index}
        </span>

        <div className="flex-1">
          <h3 className="max-w-xl text-2xl leading-[1.1] font-medium tracking-tight text-paper md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {project.client} · {project.year} · {project.role}
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/70">
            {project.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-hover:text-paper/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <dl className="flex gap-10 md:w-56 md:flex-col md:gap-5">
          {project.outcomes.map((outcome) => (
            <div key={outcome.label}>
              <dd className="font-mono text-lg text-accent">{outcome.value}</dd>
              <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {outcome.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
