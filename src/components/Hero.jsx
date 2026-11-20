
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section 
    className="relative isolate mx-auto flex min-h-[85vh] max-w-7xl items-center overflow-hidden px-6 py-24 lg:px-10">
      {/* Background lighting */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/20" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px] dark:bg-indigo-500/15" />

      {/* Glass panel */}
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white/65 p-8 shadow-2xl shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/75 dark:shadow-black/20 sm:p-12 lg:p-16">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/15" />

        <div className="relative z-10 max-w-4xl">
          {/* Availability */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-green-700 dark:text-green-400 sm:text-sm">
              OPEN TO LEARNING & OPPORTUNITIES
            </span>
          </div>

          {/* Introduction */}
          <p className="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Sahil Hatkar<span className="text-blue-600 dark:text-blue-400">.</span>
          </h1>

          <h2 className="mt-7 text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl md:text-3xl">
            Aspiring Full Stack Developer
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            I build modern web applications with a focus on clean interfaces,
            practical functionality, and reliable user experiences. I enjoy
            turning ideas into useful digital products.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="mailto:sahilhatkar07@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </div>

          {/* Social and location */}
          <div className="mt-14 flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/sahilhatkar7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <Code size={18} />
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-400" />

            <p className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <MapPin size={16} />
              Kolhapur, Maharashtra
            </p>
          </div>
        </div>

        {/* Bottom label */}
        <div className="relative z-10 mt-14 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-white/10">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <Sparkles size={14} />
            Building digital experiences
          </div>

          <a
            href="#work"
            aria-label="Scroll to projects"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            Explore
            <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
