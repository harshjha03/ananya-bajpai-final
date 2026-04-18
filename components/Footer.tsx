'use client';

import { ArrowUp, ArrowRight, Linkedin, Globe, Briefcase, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0f] font-sans relative overflow-hidden">
      {/* Ambient Blobs */}
      <div className="absolute rounded-full blur-[90px] opacity-[0.1] pointer-events-none w-[500px] h-[500px] bg-[#FDE047] -top-[200px] -right-[100px]"></div>
      <div className="absolute rounded-full blur-[90px] opacity-[0.1] pointer-events-none w-[300px] h-[300px] bg-[#1a2b6b] bottom-0 -left-[80px]"></div>

      {/* Top Divider */}
      <div className="w-full h-[1px] bg-[linear-gradient(90deg,transparent_0%,rgba(253,224,71,0.4)_30%,rgba(253,224,71,0.4)_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-10 pt-20 pb-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-[1px] bg-[#FDE047] opacity-60"></div>
          <p className="text-[11px] tracking-[3px] uppercase text-[#FDE047] font-medium">Let&apos;s connect</p>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(26px,4vw,42px)] font-bold text-[#f0ece4] leading-[1.15] mb-12 max-w-[640px]">
          Let&apos;s nurture the <span className="text-[#FDE047]">next big idea</span> together — reach out to start our playdate.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
          
          {/* Email Column */}
          <div>
            <p className="text-[10px] tracking-[2.5px] uppercase text-[#FDE047]/55 font-semibold mb-4">Say hello</p>
            <a 
              href="mailto:bajpaiananya18@gmail.com" 
              className="text-[15px] text-[#d4cfc7] no-underline inline-flex items-center gap-2.5 relative pb-0.5 transition-colors duration-250 hover:text-[#FDE047] group"
            >
              <Mail size={15} className="text-[#FDE047]/40 group-hover:text-[#FDE047] transition-colors" />
              bajpaiananya18@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FDE047] transition-[width] duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Social Links Column */}
          <div>
            <p className="text-[10px] tracking-[2.5px] uppercase text-[#FDE047]/55 font-semibold mb-4">Find me on</p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <a 
                  href="https://www.behance.net/ananyabajpai" 
                  target="_blank" 
                  rel="noopener"
                  className="text-[14px] text-[#7a7a8a] no-underline inline-flex items-center gap-2.5 relative pb-0.5 transition-colors duration-250 hover:text-[#FDE047] group"
                >
                  <Briefcase size={14} className="text-[#FDE047]/40 group-hover:text-[#FDE047] transition-colors" />
                  Works on Behance
                  <span className="text-[10px] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FDE047]/50 transition-[width] duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/ananya-bajpai-3151191b3/" 
                  target="_blank" 
                  rel="noopener"
                  className="text-[14px] text-[#7a7a8a] no-underline inline-flex items-center gap-2.5 relative pb-0.5 transition-colors duration-250 hover:text-[#FDE047] group"
                >
                  <Linkedin size={14} className="text-[#FDE047]/40 group-hover:text-[#FDE047] transition-colors" />
                  Connect on LinkedIn
                  <span className="text-[10px] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FDE047]/50 transition-[width] duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="flex flex-col justify-start">
            <p className="text-[10px] tracking-[2.5px] uppercase text-[#FDE047]/55 font-semibold mb-4">Take away</p>
            <a 
              href="https://www.behance.net/gallery/224970097/Resume-2025-User-Experience-Designer" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FDE047] rounded-[40px] text-[#0a0a0f] text-[14px] font-bold no-underline tracking-[0.3px] transition-all duration-250 hover:-translate-y-0.5 active:scale-[0.97] relative overflow-hidden group w-fit"
            >
              <span className="absolute inset-0 bg-white/12 opacity-0 transition-opacity duration-250 group-hover:opacity-100"></span>
              View Resume
              <span className="inline-flex items-center justify-center w-[18px] h-[18px] transition-transform duration-250 group-hover:translate-x-1">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] relative z-10">
        <div className="max-w-[900px] mx-auto px-10 py-6 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[12px] text-[#3a3a4a] tracking-[0.3px]">© 2026 Ananya Bajpai. All rights reserved.</span>
          <button 
            onClick={scrollToTop}
            className="text-[12px] text-[#3a3a4a] bg-transparent border-none cursor-pointer flex items-center gap-1.5 p-0 transition-colors duration-200 hover:text-[#FDE047] group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047]/30 inline-block"></span>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
