'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SelectedWorks() {
  return (
    <section id="selected-works" className="relative w-full py-16 bg-black px-5 md:px-10 overflow-hidden font-sans">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://lh3.googleusercontent.com/pw/AP1GczOHN7HqRsj3V5HdbyDJKgA-VAGvNaT4_VH6Ou2NJLvTDJjjcbESOFHIdzQklpjwgQoZugmXgSswugWnU98KIj73Ziqp8HeOntOXmYGRd3QIXhQPziiecjWHgTmjRmy8ogx3Qrz0_peom2fH0h1dfSLdkQ=w1544-h869-s-no-gm?authuser=0"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[11px] tracking-[3px] uppercase text-[#FDE047] mb-3 font-medium">Selected Works</p>
          <h2 className="text-[38px] font-bold text-[#f0ece4] mb-2 leading-[1.1]">Where the bloom lives</h2>
          <p className="text-[15px] text-[#7a7a8a] max-w-[440px]">Three domains, one practice — a breakdown of where my energy, research, and craft converge.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-4">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            
            {/* Card 1: UI/UX — 50% */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white/[0.04] border border-white/[0.09] rounded-[20px] p-6 backdrop-blur-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.012] hover:border-[#FDE047]/30 hover:shadow-[0_0_40px_rgba(253,224,71,0.12)]"
            >
              <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_30%_30%,rgba(253,224,71,0.07)_0%,transparent_65%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>
              
              <div className="relative z-10">
                <div className="text-[56px] font-extrabold leading-none bg-gradient-to-br from-[#FDE047] to-[#FEF9C3] bg-clip-text text-transparent mb-1.5 tracking-[-2px]">50%</div>
                <p className="text-[11px] tracking-[2px] uppercase text-[#FDE047]/70 mb-4 font-medium">of the bloom</p>
                <h3 className="text-[19px] font-bold text-[#f0ece4] mb-1.5 leading-[1.2]">Designing Experiences</h3>
                <p className="text-[12px] text-[#6a6a7a] mb-5 leading-relaxed">Strategic focus on digital interfaces, inclusive design, and phygital ecosystems</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {['UI/UX', 'Information Architecture', 'Inclusive Design', 'Phygital Systems'].map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-[#FDE047]/25 text-[#FDE047]/85 bg-[#FDE047]/[0.06] font-medium">{tag}</span>
                  ))}
                </div>

                <div className="mb-6 space-y-2">
                  {[
                    'Vision in Product (ViP) deconstruction',
                    'Systemic and Root Cause Analysis',
                    'Age-friendly UI Standards & Accessibility',
                    'Contextual Storytelling & Interactive Mapping'
                  ].map(item => (
                    <div key={item} className="text-[12px] color-[#8a8a9a] py-1 border-b border-white/[0.05] flex items-center gap-2 text-[#8a8a9a]">
                      <div className="w-1 h-1 rounded-full bg-[#FDE047]/50 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link href="/projects#experiences" className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDE047]/10 border border-[#FDE047]/35 rounded-full text-[#FDE047] text-[13px] font-semibold no-underline transition-colors duration-250 hover:bg-[#FDE047]/18 group/btn">
                  Deep Dive <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Research — 30% */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-white/[0.04] border border-white/[0.09] rounded-[20px] p-6 backdrop-blur-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.012] hover:border-[#FDE047]/30 hover:shadow-[0_0_40px_rgba(253,224,71,0.12)]"
            >
              <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_30%_30%,rgba(253,224,71,0.07)_0%,transparent_65%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>
              
              <div className="relative z-10">
                <div className="text-[56px] font-extrabold leading-none bg-gradient-to-br from-[#FDE047] to-[#FEF9C3] bg-clip-text text-transparent mb-1.5 tracking-[-2px]">30%</div>
                <p className="text-[11px] tracking-[2px] uppercase text-[#FDE047]/70 mb-4 font-medium">of the bloom</p>
                <h3 className="text-[19px] font-bold text-[#f0ece4] mb-1.5 leading-[1.2]">Decoding Systems</h3>
                <p className="text-[12px] text-[#6a6a7a] mb-5 leading-relaxed">In-depth research into human behaviour, industrial systems, and cultural trends</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Systems Thinking', 'Trend Forecasting', 'Social Design', 'Ethnography'].map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-[#FDE047]/25 text-[#FDE047]/85 bg-[#FDE047]/[0.06] font-medium">{tag}</span>
                  ))}
                </div>

                <div className="mb-6 space-y-2">
                  {[
                    'Lifecycle Tracking & Multi-Level Stakeholder Mapping',
                    'Causal Loop Analysis & Policy Auditing',
                    'Gamification & Aspiration Mapping',
                    'Haystacking & STEEP Trend Analysis'
                  ].map(item => (
                    <div key={item} className="text-[12px] color-[#8a8a9a] py-1 border-b border-white/[0.05] flex items-center gap-2 text-[#8a8a9a]">
                      <div className="w-1 h-1 rounded-full bg-[#FDE047]/50 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link href="/projects#systems" className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDE047]/10 border border-[#FDE047]/35 rounded-full text-[#FDE047] text-[13px] font-semibold no-underline transition-colors duration-250 hover:bg-[#FDE047]/18 group/btn">
                  Deep Dive <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          {/* Card 2: Branding — 20% (spans full height on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white/[0.04] border border-white/[0.09] rounded-[20px] p-6 backdrop-blur-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.012] hover:border-[#FDE047]/30 hover:shadow-[0_0_40px_rgba(253,224,71,0.12)] flex flex-col"
          >
            <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_30%_30%,rgba(253,224,71,0.07)_0%,transparent_65%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>
            
            <div className="relative z-10 flex flex-col">
              <div className="text-[56px] font-extrabold leading-none bg-gradient-to-br from-[#FDE047] to-[#FEF9C3] bg-clip-text text-transparent mb-1.5 tracking-[-2px]">20%</div>
              <p className="text-[11px] tracking-[2px] uppercase text-[#FDE047]/70 mb-4 font-medium">of the bloom</p>
              <h3 className="text-[19px] font-bold text-[#f0ece4] mb-1.5 leading-[1.2]">Visualising Narratives</h3>
              <p className="text-[12px] text-[#6a6a7a] mb-5 leading-relaxed">Identity systems, visual storytelling, and commercial art direction</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {['Brand Identity', 'Packaging', 'Art Direction', 'AI Prompting'].map(tag => (
                  <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-[#FDE047]/25 text-[#FDE047]/85 bg-[#FDE047]/[0.06] font-medium">{tag}</span>
                ))}
              </div>

              <div className="mb-6 space-y-2">
                {[
                  'Rapid Visual Storytelling & Client Pitches',
                  'Ethnographic Research-based Persona Dev.',
                  'Heritage Illustration & Packaging Dielines',
                  'Strategic Brand & Typography Systems'
                ].map(item => (
                  <div key={item} className="text-[12px] color-[#8a8a9a] py-1 border-b border-white/[0.05] flex items-center gap-2 text-[#8a8a9a]">
                    <div className="w-1 h-1 rounded-full bg-[#FDE047]/50 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/projects#narratives" className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDE047]/10 border border-[#FDE047]/35 rounded-full text-[#FDE047] text-[13px] font-semibold no-underline transition-colors duration-250 hover:bg-[#FDE047]/18 group/btn w-fit">
                Deep Dive <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
