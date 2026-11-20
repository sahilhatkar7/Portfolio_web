
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Code, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const useDark = savedTheme
      ? savedTheme === "dark"
      : prefersDark;

    setDarkMode(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;

    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextMode);
  };

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/60 shadow-sm shadow-black/5 backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-950/60 dark:shadow-black/20">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter transition hover:opacity-70"
        >
          SH<span className="text-blue-600 dark:text-blue-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 rounded-full border border-black/5 bg-black/[0.03] p-1.5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm font-medium text-neutral-600 transition-all duration-300 hover:bg-white hover:text-blue-600 hover:shadow-sm dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <a
            href="https://github.com/sahilhatkar7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden rounded-full border border-black/5 bg-black/[0.03] p-2.5 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04] dark:hover:text-blue-400 sm:inline-flex"
          >
            <Code size={19} />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-black/5 bg-black/[0.03] p-2.5 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 dark:border-white/10 dark:bg-white/[0.04]"
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="rounded-full border border-black/5 bg-black/[0.03] p-2.5 transition-all dark:border-white/10 dark:bg-white/[0.04] md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-black/5 bg-white/80 px-6 py-5 backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-950/90 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-blue-500/10 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
