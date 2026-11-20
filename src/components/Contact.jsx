
import {
  ArrowUpRight,
  Code,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-neutral-200/60 py-28 dark:border-white/10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
          <Sparkles size={15} />
          Get In Touch
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
              Let's build
              <br />
              something
              <br />
              meaningful
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-neutral-500 dark:text-neutral-400">
              I'm interested in learning, collaborating, and exploring
              opportunities in web development. Feel free to get in touch.
            </p>

            <a
              href="mailto:sahilhatkar07@gmail.com"
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right Contact Card */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/60 p-7 shadow-2xl shadow-neutral-200/20 backdrop-blur-2xl sm:p-9 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Contact Information
              </p>

              {/* Email */}
              <a
                href="mailto:sahilhatkar07@gmail.com"
                className="group mb-5 flex items-center justify-between gap-4 rounded-2xl border border-neutral-200/70 bg-white/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5 dark:border-white/10 dark:bg-white/[0.025]"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400">Email</p>
                    <p className="mt-1 break-all text-sm font-medium">
                      sahilhatkar07@gmail.com
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sahilhatkar7"
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-5 flex items-center justify-between gap-4 rounded-2xl border border-neutral-200/70 bg-white/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5 dark:border-white/10 dark:bg-white/[0.025]"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Code size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400">GitHub</p>
                    <p className="mt-1 break-all text-sm font-medium">
                      github.com/sahilhatkar7
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-neutral-200/70 bg-white/50 p-5 dark:border-white/10 dark:bg-white/[0.025]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-xs text-neutral-400">Location</p>
                  <p className="mt-1 text-sm font-medium">
                    Kolhapur, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-neutral-200/70 pt-6 text-xs text-neutral-400 dark:border-white/10">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Open to learning and collaboration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
