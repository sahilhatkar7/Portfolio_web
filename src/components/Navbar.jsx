
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Code } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/60 shadow-sm shadow-black/20 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-white transition hover:opacity-70"
        >
          SH<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 hover:bg-white/10 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* GitHub */}
          <a
            href="https://github.com/sahilhatkar7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400 sm:inline-flex"
          >
            <Code size={19} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white transition-all hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 px-6 py-5 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-300 transition hover:bg-blue-500/10 hover:text-blue-400"
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
