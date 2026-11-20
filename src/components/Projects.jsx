
import {
  ArrowUpRight,
  Code,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-neutral-200/60 py-28 dark:border-white/10"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              <Layers3 size={16} />
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects<span className="text-blue-600 dark:text-blue-400">.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-neutral-500 dark:text-neutral-400">
            A selection of projects where I apply my skills to build
            practical and functional web applications.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white/50 p-7 shadow-xl shadow-black/[0.03] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/20 dark:hover:border-blue-400/40 sm:p-9"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/0 blur-[90px] transition-all duration-500 group-hover:bg-blue-500/10" />

              <div className="relative z-10 flex flex-1 flex-col">

                {/* Card top */}
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-sm text-neutral-400">
                    / {project.number}
                  </span>

                  <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-medium text-blue-600 backdrop-blur-xl dark:text-blue-400">
                    {project.category}
                  </span>
                </div>

                {/* Project title */}
                <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-5 flex-1 text-sm leading-8 text-neutral-600 dark:text-neutral-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technology badges */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-black/5 bg-black/[0.025] px-3 py-2 text-xs font-medium text-neutral-600 transition-colors group-hover:border-blue-500/20 dark:border-white/10 dark:bg-white/[0.035] dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <div className="mt-9 flex items-center justify-between border-t border-black/10 pt-6 dark:border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Code size={17} />
                    View on GitHub
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <ExternalLink
                    size={17}
                    className="text-neutral-400 transition-colors group-hover:text-blue-500"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
