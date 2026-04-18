'use client';

import { useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import About from '@/components/About';
import SelectedWorks from '@/components/SelectedWorks';
import Playfolio from '@/components/Playfolio';
import Footer from '@/components/Footer';

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <main className="min-h-screen relative">
      <header className="fixed top-0 left-0 w-full p-5 md:py-10 md:px-[60px] z-50">
        <nav className="max-w-[1320px] mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-[20px] font-normal no-underline text-white tracking-tight transition-opacity duration-300 hover:opacity-70"
          >
            Ananya
          </Link>

          <div className="flex items-center gap-5">
            <div 
              className={`hidden md:flex items-center gap-[15px] bg-white/5 backdrop-blur-md px-[30px] py-2.5 rounded-full border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                isNavVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30px] pointer-events-none'
              }`}
            >
              <Link href="#selected-works" className="text-white no-underline text-sm font-normal opacity-80 transition-opacity duration-300 hover:opacity-100">Selected Works</Link>
              <span className="text-white/30 text-xs">•</span>
              <Link href="#play" className="text-white no-underline text-sm font-normal opacity-80 transition-opacity duration-300 hover:opacity-100">Play-folio</Link>
              <span className="text-white/30 text-xs">•</span>
              <Link href="#about" className="text-white no-underline text-sm font-normal opacity-80 transition-opacity duration-300 hover:opacity-100">About</Link>
              <span className="text-white/30 text-xs">•</span>
              <Link href="#contact" className="text-white no-underline text-sm font-normal opacity-80 transition-opacity duration-300 hover:opacity-100">Contact</Link>
            </div>
            <button 
              onClick={() => setIsNavVisible(!isNavVisible)}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-[30px] py-3 rounded-full font-sans font-normal text-sm cursor-pointer transition-all duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:scale-105 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            >
              {isNavVisible ? 'Close' : 'Explore'}
            </button>
          </div>
        </nav>
      </header>

      <div className="w-full h-screen overflow-hidden relative z-10 bg-[#050505]">
        <div style={{ width: '100%', height: '100vh' }} data-us-project="aya8KoZ8dgmKXN53cPPo"></div>
      </div>

      <About />
      <SelectedWorks />
      <Playfolio />
      <Footer />

      <Script 
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.UnicornStudio && window.UnicornStudio.init) {
            window.UnicornStudio.init();
          }
        }}
      />
    </main>
  );
}
