
import Link from "next/link";
import { ArrowUp, Code, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-200/60 dark:border-white/10">
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:items-center">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold tracking-tighter"
            >
              SH<span className="text-blue-600 dark:text-blue-400">.</span>
            </Link>

            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
              Aspiring Full Stack Developer
              <span className="mx-2 text-blue-500">·</span>
              Kolhapur, India
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-500 sm:justify-center">
            <Link href="#home" className="transition hover:text-blue-500">
              Home
            </Link>
            <Link href="#about" className="transition hover:text-blue-500">
              About
            </Link>
            <Link href="#work" className="transition hover:text-blue-500">
              Projects
            </Link>
            <Link href="#skills" className="transition hover:text-blue-500">
              Skills
            </Link>
            <Link href="#contact" className="transition hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 lg:justify-end">
            <a
              href="https://github.com/sahilhatkar7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200/70 bg-white/50 text-neutral-500 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500/30 hover:text-blue-500 dark:border-white/10 dark:bg-white/[0.035]"
            >
              <Code size={19} />
            </a>

            <a
              href="mailto:sahilhatkar07@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200/70 bg-white/50 text-neutral-500 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500/30 hover:text-blue-500 dark:border-white/10 dark:bg-white/[0.035]"
            >
              <Mail size={19} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200/70 bg-white/50 text-neutral-500 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500/30 hover:text-blue-500 dark:border-white/10 dark:bg-white/[0.035]"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-neutral-200/70 pt-6 text-xs text-neutral-400 dark:border-white/10 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Sahil Hatkar. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            <Sparkles size={13} className="text-blue-500" />
            Designed & developed with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
