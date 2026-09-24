import Link from "next/link";
import { site } from "@/lib/content/site";

interface CtaSectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaSection({
  heading = "Not sure where to start?",
  subheading = "Book a free 30-minute call. We'll audit your setup, find the gaps, and map exactly what to build. No pitch, no pressure.",
  primaryLabel = "Book a Call",
  primaryHref,
}: CtaSectionProps) {
  const finalPrimaryHref = primaryHref ?? site.cta.bookCall;

  const renderHeading = () => {
    if (heading === "Not sure where to start?") {
      return (
        <>
          Not sure where to{" "}
          <span className="relative inline-block px-1">
            <span
              className="absolute inset-0 bg-[#a7f3d0] rounded-sm transform -rotate-1"
              style={{ zIndex: 0 }}
            />
            <span className="relative z-10">start?</span>
          </span>
        </>
      );
    }
    return heading;
  };

  return (
    <section
      className="py-16 md:py-24 bg-white border-t border-gray-200 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="container-page relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Left Content Area */}
          <div className="flex-1 text-center lg:text-left">
            <h2
              id="cta-heading"
              className="text-headline mb-6"
            >
              {renderHeading()}
            </h2>
            
            <p className="text-body-lg max-w-xl mx-auto lg:mx-0">
              {subheading}
            </p>
          </div>
          
          {/* Right CTA Area */}
          <div className="shrink-0 flex flex-col items-center lg:items-start gap-4 mt-6 lg:mt-0">
            <Link
              href={finalPrimaryHref}
              className="btn btn-primary btn-lg group"
            >
              <span>{primaryLabel}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-caption text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Average delivery — 5 business days
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
