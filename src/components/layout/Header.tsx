"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/data/mockContent";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-canvas/90 backdrop-blur-sm border-b border-border transition-colors">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Architecture Mark */}
        <Link href="/" className="group flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-ink-primary group-hover:bg-accent-tech transition-colors" />
            <span className="font-mono text-sm sm:text-base font-bold tracking-widest text-ink-primary uppercase">
              Stone Bridge Holdings
            </span>
          </div>
          <span className="font-mono text-[9px] text-ink-muted tracking-wider uppercase ml-4.5 pl-0.5">
            Architecture &amp; Construction Practice
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs text-ink-secondary">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.index}
              href={item.href}
              className="group flex items-center gap-1.5 py-1 text-ink-secondary hover:text-ink-primary transition-colors"
            >
              <span className="text-[10px] text-ink-subtle group-hover:text-accent-tech transition-colors">
                {item.index}
              </span>
              <span className="tracking-wider uppercase">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Studio Status / Coordinates Indicator */}
        <div className="hidden sm:flex items-center gap-3 font-mono text-[10px] text-ink-muted border-l border-border pl-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="tracking-widest uppercase">PRACTICE ACTIVE</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ink-primary hover:text-accent-tech transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        >
          {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-canvas px-6 py-8 font-mono">
          <nav className="flex flex-col gap-5">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-border/40 pb-3 text-sm text-ink-primary hover:text-accent-tech transition-colors"
              >
                <span className="tracking-wider uppercase">{item.label}</span>
                <span className="text-xs text-ink-subtle">{item.index}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-[11px] text-ink-muted">
            <span>CADASTRE REF: SBH-2025</span>
            <span className="text-accent-tech uppercase">STUDIO SHELL</span>
          </div>
        </div>
      )}
    </header>
  );
};
