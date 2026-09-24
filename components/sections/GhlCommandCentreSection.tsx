"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data and Layout Constants ──────────────────────────────────────────────────

// The SVG coordinate space
const VIEW_W = 1000;
const VIEW_H = 600;

const CENTER = { x: VIEW_W / 2, y: VIEW_H / 2 }; // 500, 300

// We want 6 nodes distributed around the center.
// For a nice editorial layout, let's put 3 on the left, 3 on the right.
const SATELLITES = [
  { id: "funnels", label: "Funnels and Sites", iconText: "F", cx: 200, cy: 150, color: "#f97316", lineCol: "#3b82f6" },
  { id: "ai", label: "AI Chatbots", iconText: "AI", cx: 160, cy: 300, color: "#3b82f6", lineCol: "#3b82f6" },
  { id: "crm", label: "CRM and Pipelines", iconText: "CRM", cx: 200, cy: 450, color: "#3b82f6", lineCol: "#3b82f6" },
  
  { id: "booking", label: "Booking and Calendars", iconText: "B", cx: 800, cy: 150, color: "#ec4899", lineCol: "#ec4899" },
  { id: "sms", label: "SMS Automation", iconText: "SMS", cx: 840, cy: 300, color: "#ec4899", lineCol: "#ec4899" },
  { id: "email", label: "Email Marketing", iconText: "E", cx: 800, cy: 450, color: "#f59e0b", lineCol: "#3b82f6" },
];

// ─── Analytics Visualization Data ───────────────────────────────────────────────
const pipelineData = [20, 24, 21, 32, 28, 42, 38, 55, 52, 68, 64, 82, 78, 100];
const leadsData = [30, 45, 20, 60, 80, 50, 40, 90, 70, 55, 85, 100, 65, 75, 45, 80];
const callsPattern = [
  0, 1, 0, 0, 1, 1, 0,
  1, 0, 1, 1, 0, 2, 0,
  0, 1, 2, 1, 0, 1, 1,
  1, 2, 0, 1, 1, 0, 0
];

// ─── Component ────────────────────────────────────────────────────────────────

export function GhlCommandCentreSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  return (
    <>
      <section
        ref={containerRef}
        className="py-4 md:py-4 border-b border-gray-200 overflow-hidden relative"
        style={{ backgroundColor: "#f5f4f0" }}
        aria-labelledby="command-centre-heading"
      >
        {/* Subtle Light Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" 
          style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, white 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 40%, transparent 100%)'
          }} 
        />
      <div className="container-page relative z-10">
        
        {/* Header Badges */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
          <h2
            id="command-centre-heading"
            className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500"
          >
            Your GoHighLevel Command Centre
          </h2>
          <div className="flex items-center gap-2.5 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Automations live
            </span>
          </div>
        </div>

        {/* SVG Diagram Area */}
        <div className="relative w-full max-w-[1000px] mx-auto aspect-[5/3] sm:aspect-[5/3] lg:aspect-[10/6]">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            {/* ── 1. Spoke Lines (Bezier) ── */}
            {SATELLITES.map((sat, i) => {
              // Path goes from center node edge outwards horizontally, then curves to satellite edge
              const isLeft = sat.cx < CENTER.x;
              const startX = isLeft ? CENTER.x - 90 : CENTER.x + 90;
              const endX = isLeft ? sat.cx + 120 : sat.cx - 90;
              
              // Control points for nice smooth S-curve horizontally
              const cp1x = startX + (isLeft ? -100 : 100);
              const cp1y = CENTER.y;
              const cp2x = endX + (isLeft ? 100 : -100);
              const cp2y = sat.cy;
              
              const pathD = `M ${startX} ${CENTER.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${sat.cy}`;
              
              return (
                <g key={`path-${sat.id}`}>
                  {/* Faint background path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={sat.lineCol}
                    strokeWidth="2"
                    strokeOpacity="0.15"
                  />
                  {/* Animated foreground path */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke={sat.lineCol}
                    strokeWidth="2.5"
                    strokeOpacity="0.8"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 + i * 0.1 }}
                  />
                  
                  {/* Connector dots near center (animated pulse) */}
                  <motion.circle
                    cx={startX + (isLeft ? -20 : 20)}
                    cy={CENTER.y}
                    r="4"
                    fill={sat.lineCol}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: [0, 1.5, 1], opacity: [0, 1, 0.8] } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  />
                </g>
              );
            })}

            {/* ── 2. Satellite Nodes ── */}
            {SATELLITES.map((sat, i) => {
              return (
                <motion.g
                  key={sat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="cursor-pointer"
                >
                  {/* Pill Background with modern soft shadow */}
                  <rect
                    x={sat.cx - 90}
                    y={sat.cy - 24}
                    width="210"
                    height="48"
                    rx="24"
                    fill="#ffffff"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"
                  />
                  {/* Colored Icon Circle */}
                  <circle
                    cx={sat.cx - 62}
                    cy={sat.cy}
                    r="16"
                    fill={sat.color}
                  />
                  <text
                    x={sat.cx - 62}
                    y={sat.cy + 4}
                    fill="#ffffff"
                    fontSize="12"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {sat.iconText}
                  </text>
                  {/* Label */}
                  <text
                    x={sat.cx - 36}
                    y={sat.cy + 4.5}
                    fill="#374151"
                    fontSize="13"
                    fontWeight="600"
                  >
                    {sat.label}
                  </text>
                </motion.g>
              );
            })}

            {/* ── 3. Center Node (GoHighLevel) ── */}
            <motion.g
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            >
              {/* Animated Outer glow/border */}
              <motion.rect
                x={CENTER.x - 100}
                y={CENTER.y - 44}
                width="200"
                height="88"
                rx="28"
                fill="none"
                stroke="#f472b6"
                strokeWidth="2"
                strokeOpacity="0.4"
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Main Pill */}
              <rect
                x={CENTER.x - 90}
                y={CENTER.y - 36}
                width="180"
                height="72"
                rx="24"
                fill="#0a0a0a"
                stroke="#f472b6"
                strokeWidth="2"
                filter="drop-shadow(0 12px 24px rgba(244,114,182,0.25))"
              />
              <text
                x={CENTER.x}
                y={CENTER.y - 2}
                fill="#ffffff"
                fontSize="22"
                fontWeight="800"
                fontStyle="italic"
                textAnchor="middle"
                letterSpacing="-0.02em"
              >
                GoHighLevel
              </text>
              <text
                x={CENTER.x}
                y={CENTER.y + 18}
                fill="#fbcfe8"
                fontSize="12"
                fontWeight="600"
                textAnchor="middle"
                letterSpacing="0.05em"
                opacity="0.9"
              >
                CORE ENGINE
              </text>
            </motion.g>

          </svg>
        </div>
        
      </div>

      {/* ── Editorial Metrics Composition ──────────────────────────────────── */}
      </section>

      <section className="bg-white py-8 md:py-10 border-b border-gray-200">
        <div className="container-page max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-0 relative"
          >
            {/* Metric 1 — Pipeline (Primary) */}
            <div className="flex-1 lg:flex-[1.4] pb-10 lg:pb-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col relative group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">Pipeline · MTD</h3>
                <div className="flex items-baseline gap-2">
                  <motion.span 
                    className="text-4xl font-extrabold tracking-tight text-[#0a0a0a] font-number"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    $148.2k
                  </motion.span>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-[4px] border border-green-100/50">On Track</span>
            </div>
            
            {/* Custom Interactive Line Chart */}
            <div className="h-20 sm:h-24 relative mt-8">
              {/* Subtle background grid */}
              <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                {[0,1,2,3].map(i => (
                  <div key={i} className="border-t border-gray-50 w-full" />
                ))}
              </div>
              
              {/* SVG Line */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                 {/* Area fill */}
                 <motion.path
                   d={`M0,100 L0,${100 - pipelineData[0]} ` + pipelineData.slice(1).map((val, i) => `L ${((i + 1) / (pipelineData.length - 1)) * 100},${100 - val}`).join(" ") + ` L100,100 Z`}
                   fill="url(#pipelineGradient)"
                   initial={{ opacity: 0 }}
                   animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                   transition={{ duration: 1.2, delay: 1.5 }}
                 />
                 <defs>
                   <linearGradient id="pipelineGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#22c55e" stopOpacity="0.1" />
                     <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 
                 {/* Stroke */}
                 <motion.path
                   d={`M 0,${100 - pipelineData[0]} ` + pipelineData.slice(1).map((val, i) => `L ${((i + 1) / (pipelineData.length - 1)) * 100},${100 - val}`).join(" ")}
                   fill="none"
                   stroke="#22c55e"
                   strokeWidth="1.5"
                   vectorEffect="non-scaling-stroke"
                   initial={{ pathLength: 0 }}
                   animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 1.3 }}
                 />
              </svg>
              
              {/* Interactive columns */}
              <div className="absolute inset-0 flex w-full h-full z-10">
                {pipelineData.map((d, i) => (
                  <div key={i} className="flex-1 h-full group/point relative cursor-crosshair">
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-green-500/0 group-hover/point:bg-green-500/30 transition-colors duration-150" />
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white border-[1.5px] border-green-500 opacity-0 group-hover/point:opacity-100 transition-opacity duration-150" 
                      style={{ bottom: `${d}%`, transform: 'translate(-50%, 50%)' }} 
                    />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0a0a0a] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/point:opacity-100 pointer-events-none whitespace-nowrap transition-all duration-200 translate-y-1 group-hover/point:translate-y-0 z-20 font-medium">
                      Sep {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metric 2 — New Leads */}
          <div className="flex-1 py-10 lg:py-0 lg:px-12 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col relative group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">New Leads</h3>
                <div className="flex items-baseline gap-2">
                  <motion.span 
                    className="text-4xl font-extrabold tracking-tight text-[#0a0a0a] font-number"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1.3 }}
                  >
                    312
                  </motion.span>
                </div>
              </div>
              <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1">
                <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                24%
              </span>
            </div>
            
            {/* Animated lead-flow visualization */}
            <div className="h-20 sm:h-24 flex items-end gap-[2px] mt-8 relative z-10">
              {leadsData.map((val, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-blue-100 hover:bg-blue-500 transition-colors duration-200 cursor-crosshair relative group/bar rounded-t-sm"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${val}%` } : { height: 0 }}
                  transition={{ duration: 0.7, delay: 1.4 + i * 0.03, ease: "easeOut" }}
                >
                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 bg-[#0a0a0a] text-white text-[10px] py-1 px-1.5 rounded opacity-0 group-hover/bar:opacity-100 pointer-events-none z-20 font-medium transition-all duration-200 translate-y-1 group-hover/bar:translate-y-0">
                      {Math.floor((val / 100) * 24)}
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metric 3 — Calls Booked */}
          <div className="flex-1 pt-10 lg:pt-0 lg:pl-12 flex flex-col relative group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">Calls Booked</h3>
                <div className="flex items-baseline gap-2">
                  <motion.span 
                    className="text-4xl font-extrabold tracking-tight text-[#0a0a0a] font-number"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                  >
                    128
                  </motion.span>
                </div>
              </div>
              <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1">
                <svg className="w-3 h-3 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                12%
              </span>
            </div>
            
            {/* Calendar / booking activity visualization */}
            <div className="mt-8 flex flex-col justify-end relative z-10">
              <div className="grid grid-cols-7 gap-1">
                {callsPattern.map((status, i) => (
                  <motion.div
                    key={i}
                    className={`h-6 sm:h-8 rounded-[2px] cursor-crosshair relative group/cell transition-colors duration-200 ${
                      status === 0 ? "bg-gray-100 hover:bg-gray-200" :
                      status === 1 ? "bg-pink-200 hover:bg-pink-300" :
                      "bg-pink-500 hover:bg-pink-600"
                    }`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 1.5 + (i % 7) * 0.04 + Math.floor(i / 7) * 0.04 }}
                  >
                     {status > 0 && (
                       <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 bg-[#0a0a0a] text-white text-[10px] py-1 px-1.5 rounded opacity-0 group-hover/cell:opacity-100 pointer-events-none z-20 whitespace-nowrap font-medium transition-all duration-200 translate-y-1 group-hover/cell:translate-y-0">
                          {status === 1 ? '2 calls' : '6 calls'}
                       </div>
                     )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          </motion.div>
        </div>
      </section>
    </>
  );
}
