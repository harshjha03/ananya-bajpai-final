'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const texts = gsap.utils.toArray<HTMLElement>('.text-content');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top top',
        end: '+=200%', // Pin for 2 extra viewport heights
        pin: true,
        scrub: 1, // Smooth scrubbing
      }
    });

    // Background animation tied to the same scroll timeline
    tl.to(bgRef.current, {
      scale: 1.1,
      opacity: 0.5,
      duration: 2.5,
      ease: 'none'
    }, 0);

    // Text 1 fades out, Text 2 fades in
    tl.to(texts[0], { opacity: 0, y: -20, duration: 1 }, 0)
      .to(texts[1], { opacity: 1, y: 0, duration: 1 }, 0)
      
      // Text 2 fades out, Text 3 fades in
      .to(texts[1], { opacity: 0, y: -20, duration: 1 }, 1.5)
      .to(texts[2], { opacity: 1, y: 0, duration: 1 }, 1.5);

  }, { scope: containerRef });

  return (
    <div id="about" ref={containerRef} className="relative bg-black">
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        
        {/* Background */}
        <div 
          ref={bgRef}
          className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-[#050505]"
        >
          <Image 
            src="https://lh3.googleusercontent.com/pw/AP1GczO1TaqPYrhio9vulhOkoTZKFOxyvC5PGh2a5ahDHJeKkfVS3ir6gTKvRtzNL9asdsFnCAlJsfcYsaAVrdESqL82TRsUSqkaFNmFBu7kEz9Tb-T680dvoOWXCXiio_l6klhIYpZJaOFHr5BkLLeEvhSLaA=w1351-h869-s-no-gm?authuser=0"
            alt="Background"
            fill
            className="object-cover opacity-40"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-[5%] md:px-[10%]">
          
          {/* Left Column: Empty to maintain copy positioning */}
          <div className="hidden md:block"></div>

          {/* Right Column: Crossfading Text */}
          <div className="relative flex items-center justify-center h-full w-full">
            
            {/* Step 1 */}
            <div className="text-content absolute w-full max-w-[500px] opacity-100 translate-y-0">
              <span className="block uppercase tracking-[3px] text-xs mb-4 opacity-50">01. The Seed</span>
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-normal mb-6 tracking-[-0.5px]">
                It all began when five-year-old Ananya started drawing on walls and cutting up fabrics to create makeshift couture for her dolls.
              </h2>
              <p className="text-base leading-[1.6] opacity-70">
                What started as a child’s rebellion against blank surfaces evolved into a disciplined pursuit of aesthetics during my Bachelors in Design. Those early years were spent nurturing a foundational obsession with how things look, feel, and function.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-content absolute w-full max-w-[500px] opacity-0 translate-y-[20px]">
              <span className="block uppercase tracking-[3px] text-xs mb-4 opacity-50">02. The Sapling</span>
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-normal mb-6 tracking-[-0.5px]">
                My knowledge of design grew into a sturdy sapling during my Masters at NIFT Bengaluru.
              </h2>
              <p className="text-base leading-[1.6] opacity-70">
                I branched out into the rigors of Design Research, exploring the functional efficiency of marketing operations. It was a period of learning that true design is a strategic bridge between human emotion and digital precision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-content absolute w-full max-w-[500px] opacity-0 translate-y-[20px]">
              <span className="block uppercase tracking-[3px] text-xs mb-4 opacity-50">03. The Bloom</span>
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] font-normal mb-6 tracking-[-0.5px]">
                Varied experiences across multiple design disciplines shaped me into a blossom with every petal a different shade.
              </h2>
              <p className="text-base leading-[1.6] opacity-70">
                Today, I work at the intersection of cinematic storytelling, user-centric research, and bold editorial design—creating digital environments where my inner child invites yours to play.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
