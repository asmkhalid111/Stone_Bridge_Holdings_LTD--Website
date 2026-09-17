import React from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/data/mockContent";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-canvas border-t border-border mt-24">
      {/* Top Architectural Drafting Bar */}
      <div className="border-b border-border/80 px-4 sm:px-8 lg:px-12 py-6">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-ink-muted uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-ink-primary" />
            <span className="font-semibold text-ink-primary">STONE BRIDGE HOLDINGS</span>
            <span className="text-ink-subtle">//</span>
            <span>DRAWING ARCHIVE &amp; MONOGRAPH</span>
          </div>
          <div className="flex items-center gap-6 tracking-widest">
            <span>SCALE: 1:100</span>
            <span>SPEC: ISO 128-20</span>
            <span className="text-ink-primary font-bold">RELEASE 2025.1</span>
          </div>
        </div>
      </div>

      {/* Main Colophon Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Studio Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-ink-primary mb-6">
                Architecture conceived through structural discipline.
              </h2>
              <p className="text-sm leading-relaxed text-ink-secondary max-w-md">
                We design and execute contemporary architecture through a direct synthesis of spatial
                intent and structural engineering. Every line drawn reflects physical load, tectonic
                purpose, and long-term permanence.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border font-mono text-xs text-ink-muted">
              <p>Practice Specification: Structural Framing, Architecture, Construction General Contracting.</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-primary mb-6">
              Index
            </h3>
            <ul className="space-y-3 font-mono text-xs text-ink-secondary">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.index}>
                  <Link
                    href={item.href}
                    className="hover:text-ink-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-ink-subtle">{item.index}</span>
                    <span className="uppercase">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Inquiries / Temporary Record */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-primary mb-6">
                Practice Inquiries
              </h3>
              <p className="text-xs text-ink-muted mb-4">
                [Temporary Studio Contact Structure — Authoritative records to be supplied in later phase]
              </p>
              <div className="space-y-2 font-mono text-xs text-ink-secondary">
                <p>INQUIRY: studio@stonebridgeholdings.example</p>
                <p>TELEMETRY: +00 (0) 20 7946 0000 [DEMO]</p>
                <p>CADASTRE: Atelier &amp; Engineering Studio</p>
              </div>
            </div>

            <div className="mt-8 font-mono text-[10px] text-ink-subtle border-t border-border pt-4">
              <span>ALL RIGHTS RESERVED // STONE BRIDGE HOLDINGS LTD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Stamp */}
      <div className="border-t border-border bg-canvas-subtle/50 px-4 sm:px-8 lg:px-12 py-4">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[10px] text-ink-subtle uppercase">
          <span>STONE BRIDGE HOLDINGS WEBSITE SHELL // PHASE 3 FOUNDATION</span>
          <span>APPROVED SVG SCENE INTEGRATION: ACTIVE</span>
        </div>
      </div>
    </footer>
  );
};
