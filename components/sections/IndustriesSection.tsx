"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Industry Items Data ──────────────────────────────────────────────────────

interface IndustryCardItem {
  slug: string;
  name: string;
  description: string;
  workflows: string[];
}

const industryCards: IndustryCardItem[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "Automated pipelines, lead generation, and booking for brokerages.",
    workflows: ["Intake", "Tours", "Contracts"],
  },
  {
    slug: "home-services",
    name: "Home Services",
    description:
      "Booking automation, review requests, and job tracking for service teams.",
    workflows: ["Estimates", "Dispatch", "Reviews"],
  },
  {
    slug: "coaching-consulting",
    name: "Consultants",
    description:
      "Course delivery, calendar booking, and nurture sequences for clients.",
    workflows: ["Discovery", "Onboarding", "Nurture"],
  },
  {
    slug: "digital-agencies",
    name: "Digital Agencies",
    description:
      "White-label GHL systems your clients use under your brand, end to end.",
    workflows: ["White-Label", "Deploy", "Reports"],
  },
  {
    slug: "healthcare",
    name: "Medical & Wellness",
    description:
      "Patient communication workflows and appointment automation with high delivery.",
    workflows: ["Intake", "Reminders", "Follow-ups"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Abandoned cart recovery, SMS follow-ups, and post-purchase retention.",
    workflows: ["Carts", "SMS Promos", "Retention"],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function IndustriesSection() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 border-b border-gray-200 overflow-hidden relative"
      style={{ backgroundColor: "#f5f4f0" }}
      aria-labelledby="industries-heading"
    >
      {/* Decorative ambient subtle accent dots from reference image */}
      <div
        className="absolute top-12 left-1/4 w-2 h-2 rounded-full bg-emerald-400/40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-12 w-2.5 h-2.5 rounded-full bg-amber-400/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-pink-400/40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        {/* ── Header ────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="eyebrow text-neutral-500 mb-3 block">
              EVERY NICHE, EVERY MARKET
            </span>
            <h2
              id="industries-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900"
            >
              A GHL expert for your industry
            </h2>
          </div>

          {/* Top-Right CTA Pill */}
          <div className="relative inline-block self-start md:self-auto">
            <Link
              href="/book-a-call"
              className="btn btn-primary group text-sm"
            >
              <span>Don&apos;t see yours? Tell us</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── 3x2 Cards Grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {industryCards.map((card, index) => (
            <motion.div
              key={card.slug}
              className="h-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`/industries/${card.slug}`}
                className="relative group h-full bg-white rounded-[22px] sm:rounded-[24px] p-7 sm:p-8 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <div className="flex-1 flex flex-col">
                  {/* Top-Right Arrow */}
                  <div className="absolute top-7 right-7 sm:top-8 sm:right-8">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-title text-neutral-900 mt-0 pr-8 mb-2.5 line-clamp-1">
                    {card.name}
                  </h3>

                  {/* Description */}
                  <p className="text-body-sm text-neutral-600 ">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Workflow Tags */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5 mt-auto">
                  {card.workflows.map((wf, wIdx) => (
                    <span
                      key={wIdx}
                      className="text-caption text-neutral-500 bg-neutral-100/80 px-2.5 py-1 rounded-md whitespace-nowrap"
                    >
                      {wf}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
