
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-neutral-200/60 py-28 dark:border-white/10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        {/* About Content */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <Sparkles size={15} />
            A Little About Me
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Building my journey,
            <br />
            one project at a time
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
            <p>
              I'm Sahil Hatkar, a BCA second-year student at New College,
              Kolhapur, Maharashtra, with an interest in full stack web
              development.
            </p>

            <p>
              I have completed six months of Full Stack Development technical
              training at Oktacon, where I worked with technologies including
              HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js,
              and PostgreSQL.
            </p>

            <p>
              I enjoy learning new technologies, solving development
              challenges, and building practical applications that combine
              useful functionality with clean user interfaces.
            </p>
          </div>

          <a
            href="https://github.com/sahilhatkar7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-4 dark:text-blue-400"
          >
            Explore my GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Education and Training Cards */}
        <div className="flex flex-col gap-5">
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/60 p-8 shadow-xl shadow-neutral-200/20 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

            <div className="relative">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <GraduationCap size={25} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Education
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Bachelor of Computer Applications
              </h3>

              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                New College, Kolhapur
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                <CalendarDays size={16} className="text-blue-500" />
                2025 – 2028 · Expected Graduation
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/60 p-8 shadow-xl shadow-neutral-200/20 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />

            <div className="relative">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Code2 size={25} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Technical Training
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Full Stack Development
              </h3>

              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                Oktacon · 6 Months
              </p>

              <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                Practical technical training covering frontend development,
                backend development, and database technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
