
import {
  Code2,
  Server,
  Database,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    number: "01",
    description: "Building modern and responsive user interfaces.",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    number: "02",
    description: "Developing application logic and APIs.",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    number: "03",
    description: "Working with data storage and management.",
    icon: Database,
    skills: ["PostgreSQL", "JSON Server"],
  },
  {
    title: "Tools & Technologies",
    number: "04",
    description: "Tools used for development and version control.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vite"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-neutral-200/60 py-28 dark:border-white/10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-500/5 blur-[130px] dark:bg-indigo-500/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Technical Expertise
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Skills<span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500 dark:text-neutral-400">
            Technologies and tools I have worked with during my learning
            journey and project development.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/50 p-7 shadow-xl shadow-black/[0.025] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/20 dark:hover:border-blue-400/30 sm:p-9"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/0 blur-[80px] transition-all duration-500 group-hover:bg-blue-500/10" />

                <div className="relative z-10">

                  {/* Card header */}
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Icon size={23} />
                    </div>

                    <span className="font-mono text-sm text-neutral-400">
                      / {group.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    {group.description}
                  </p>

                  {/* Technology badges */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-black/5 bg-black/[0.025] px-3.5 py-2 text-xs font-medium text-neutral-600 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 dark:hover:text-blue-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom decoration */}
                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5 dark:border-white/10">
                    <span className="text-xs font-medium text-neutral-400">
                      {group.skills.length} Technologies
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
