'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const workData = [
  {
    id: '01',
    title: 'The Core',
    number: '50',
    tag: 'Design Strategy & UX',
    focus: 'Architecting digital ecosystems that bridge human intent with functional efficiency. Focusing on high-impact solutions for complex user problems.',
    skills: ['UX Research', 'Information Architecture', 'Prototyping'],
    link: '/projects#experiences',
  },
  {
    id: '02',
    title: 'The Lens',
    number: '30',
    tag: 'Trend Analysis & Forecasting',
    focus: 'Identifying socio-cultural shifts and "hay-stacking" macro-trends. Transforming cultural signals into actionable design insights.',
    skills: ['Longitudinal Research', 'Cluster Mapping', 'Consumer Behavior'],
    link: '/projects#systems',
  },
  {
    id: '03',
    title: 'The Play',
    number: '20',
    tag: 'Visual Communication',
    focus: 'Exploring the playdate between inner children. Crafting whimsical, high-fashion editorial aesthetics and motion-driven narratives.',
    skills: ['Motion Design', 'Editorial Photo', 'AI Generative'],
    link: '/projects#narratives',
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="relative w-full py-24 bg-[#050505] px-8 md:px-16 font-sans">
      <div className="max-w-[1320px] mx-auto">
        
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">The Bloom</h2>
          <p className="text-white/50 text-lg max-w-2xl">A distribution of my professional growth and creative focus.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workData.map((work, index) => (
            <div
              key={work.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 hover:border-white/20"
            >
              <span className="absolute -right-4 -top-8 text-[12rem] font-bold text-white/[0.03] transition-all duration-500 group-hover:text-white/[0.07] pointer-events-none select-none">
                {work.number}
              </span>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium mb-6 uppercase tracking-widest">
                    {work.tag}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-4">{work.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    {work.focus}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-12">
                    {work.skills.map((skill) => (
                      <span key={skill} className="text-[10px] text-white/40 border border-white/10 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={work.link} 
                  className="inline-flex items-center justify-center w-full py-3 rounded-full border border-white/20 text-white text-sm font-semibold transition-all group-hover:bg-white group-hover:text-black"
                >
                  Deep Dive
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
