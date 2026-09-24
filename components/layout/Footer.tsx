import Link from "next/link";
import { footerNav } from "@/lib/content/navigation";
import { site } from "@/lib/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer border-t border-gray-200 pb-8 relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }} role="contentinfo">
      
      <div className="container-page pt-16 lg:pt-24 pb-8 relative z-10">
        
        {/* Main Grid: 6 columns total (Brand spans 2, 4 link columns span 1 each) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 lg:gap-10 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col pr-0 lg:pr-6">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <span className="font-bold text-2xl text-neutral-900 tracking-tight flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <div className="w-2 h-4 bg-white rounded-sm transform skew-x-12" />
                  </div>
                  {site.name}
                </span>
              </Link>
            </div>
            
            <p className="text-body-sm mb-8 max-w-[280px]">
              GoHighLevel automation agency helping businesses scale with CRM systems, AI chatbots, and data-driven marketing.
            </p>

            <Link
              href={site.cta.bookCall}
              className="inline-flex items-center justify-center font-bold text-[13px] text-neutral-900 bg-white border-2 border-neutral-900 rounded-full px-5 py-2 transition-all shadow-[3px_3px_0_0_#0a0a0a] hover:shadow-[4px_4px_0_0_#0a0a0a] hover:-translate-y-px active:translate-y-1 active:translate-x-1 active:shadow-none w-fit mb-6"
            >
              <span>Contact us</span>
              <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>

            <div className="flex items-center gap-2 text-[13px] text-neutral-600 font-medium mb-6">
              <svg className="w-4 h-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              GoHighLevel Partner
            </div>

            {/* Social Icons Placeholder */}
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center text-blue-600 border border-gray-200 hover:border-blue-600 transition-colors">
                <span className="text-[11px] font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center text-blue-800 border border-gray-200 hover:border-blue-800 transition-colors">
                <span className="text-[11px] font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center text-red-600 border border-gray-200 hover:border-red-600 transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center text-neutral-900 border border-gray-200 hover:border-neutral-900 transition-colors">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-label text-neutral-800 mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-caption hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column (Used as Products or Similar based on image) */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-800 mb-6">
              Industries
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerNav.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-caption hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-800 mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerNav.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-caption hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-800 mb-6">
              Resources
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerNav.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-caption hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-caption text-center md:text-left">
            © {year} {site.name}. GoHighLevel and HighLevel are trademarks of HighLevel Inc.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-caption hover:text-neutral-900 transition-colors underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
