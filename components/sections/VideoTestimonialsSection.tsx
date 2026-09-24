"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const videoIds = [
  "earlAVf24cM",
  "TzkyDafye9E",
  "TpcrX0F4Iac",
  "kYy3Fl2VxF8",
  "fMoxqmHfmBg",
  "USEMF1xhOTs",
  "2ex2Zz6_YCk",
];

export function VideoTestimonialsSection() {
  return (
    <section className="section-md bg-[#f5f4f0] border-b border-gray-200" aria-labelledby="video-testimonials-heading">
      <div className="container-page">
        <SectionHeading
          heading="Real GHL Setups. Real Results."
          align="center"
          className="mb-12"
        />
        
        {/* Horizontal scroll container for the Shorts */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Hide scrollbar for webkit in a custom style block just for this container */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
          <div className="flex gap-6 hide-scrollbar max-w-full">
            {videoIds.map((id) => (
              <div 
                key={id} 
                className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] snap-center rounded-2xl overflow-hidden bg-black shadow-sm border border-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
