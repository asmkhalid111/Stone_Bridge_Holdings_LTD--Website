"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-canvas border-t border-border">
      <Container gridGuides>
        <SectionHeading
          phaseNumber="06"
          discipline="ENGAGEMENT &amp; INQUIRY CADASTRE"
          title="Commission a structure or initiate technical dialogue."
          subtitle="We collaborate with discerning private clients, cultural institutions, and developers seeking structural honesty and enduring architectural form."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          {/* Left Column: Studio Information & Notice */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-border bg-canvas-elevated p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-tech border-b border-border pb-3">
                <span className="w-1.5 h-1.5 bg-accent-tech" />
                <span>PRACTICE DIRECTORY [PLACEHOLDER]</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-ink-secondary">
                <div>
                  <span className="text-[10px] text-ink-muted uppercase block">STUDIO INQUIRIES</span>
                  <span className="text-ink-primary font-medium">inquiries@stonebridgeholdings.example</span>
                </div>
                <div>
                  <span className="text-[10px] text-ink-muted uppercase block">TELEPHONE DATUM</span>
                  <span className="text-ink-primary font-medium">+00 (0) 20 7946 0000 [DEMO]</span>
                </div>
                <div>
                  <span className="text-[10px] text-ink-muted uppercase block">CADASTRE SPECIFICATION</span>
                  <span className="text-ink-primary font-medium">Stone Bridge Holdings Ltd. Atelier</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border font-mono text-[10px] text-ink-subtle">
                [NOTICE: Contact and location details are temporary placeholders. Official addresses will be inserted upon authorization.]
              </div>
            </div>

            <div className="p-6 border border-dashed border-border text-xs text-ink-muted leading-relaxed font-mono">
              <p className="mb-2 text-ink-primary font-semibold">PROJECT CRITERIA:</p>
              <p>
                We accept a limited number of architectural and design-build commissions each calendar year to
                ensure absolute executive partner supervision over jobsite execution.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Consultation Form */}
          <div className="lg:col-span-7">
            <div className="border border-border bg-canvas-elevated p-6 sm:p-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border font-mono text-xs text-ink-muted">
                <span className="text-ink-primary uppercase tracking-widest font-semibold">
                  COMMISSION BRIEF SUBMISSION
                </span>
                <span>DOC REF // SBH-BRIEF-2025</span>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4 font-mono">
                  <span className="inline-block w-3 h-3 bg-accent-tech" />
                  <h3 className="text-lg text-ink-primary font-bold tracking-wider uppercase">
                    INQUIRY TRANSMITTED [DEMO RECORD]
                  </h3>
                  <p className="text-xs text-ink-muted max-w-sm mx-auto leading-relaxed">
                    Thank you. This brief has been recorded in the demonstration shell. An architectural partner will
                    review the site coordinates.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 border border-border px-4 py-2 text-xs text-ink-primary hover:border-ink-primary transition-colors"
                  >
                    RESET FORM
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-ink-primary uppercase tracking-wider">
                        Client / Principal Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        className="w-full border border-border bg-canvas px-4 py-3 text-sm text-ink-primary focus:outline-none focus:border-ink-primary font-mono transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-ink-primary uppercase tracking-wider">
                        Electronic Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@organization.com"
                        className="w-full border border-border bg-canvas px-4 py-3 text-sm text-ink-primary focus:outline-none focus:border-ink-primary font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-ink-primary uppercase tracking-wider">
                        Project Typology *
                      </label>
                      <select
                        required
                        className="w-full border border-border bg-canvas px-4 py-3 text-sm text-ink-primary focus:outline-none focus:border-ink-primary font-mono transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Typology
                        </option>
                        <option value="residential">Private Residential Architecture</option>
                        <option value="cultural">Cultural / Institutional Pavilion</option>
                        <option value="commercial">Commercial / Workspace Architecture</option>
                        <option value="contracting">General Construction / Design-Build</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-ink-primary uppercase tracking-wider">
                        Anticipated Area (m²)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500 - 1,500 m²"
                        className="w-full border border-border bg-canvas px-4 py-3 text-sm text-ink-primary focus:outline-none focus:border-ink-primary font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-mono text-xs text-ink-primary uppercase tracking-wider">
                      Site Coordinates &amp; Project Parameters *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline site boundaries, topography, structural requirements, or desired architectural timeline..."
                      className="w-full border border-border bg-canvas px-4 py-3 text-sm text-ink-primary focus:outline-none focus:border-ink-primary font-mono transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-ink-subtle">
                      CONFIDENTIAL ARCHITECTURAL TRANSMISSION
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-ink-primary text-canvas px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-accent-tech transition-colors"
                    >
                      <span>TRANSMIT BRIEF</span>
                      <span>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
