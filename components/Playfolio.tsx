'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const playfolioItems = [
  {
    id: '01',
    title: 'Fashion Design',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMpR5Tkln-K_KqZLJqGAmUjeqEZTIgIiohCSZFlmfJbSKU-Y3j1aZsGZb45I6x4I2Q8LwswOo7dqPtIUQyLBkMOeo_s31Mh3yCegAahKXRutwkGCo8KcpSBQldouvEJRPGJnccAYXElSbFP5QEJSzFMoQ=w777-h844-s-no-gm?authuser=0',
    description: 'Editorial garment photography',
    className: 'col-span-12 md:col-span-4',
  },
  {
    id: '02',
    title: 'Lifestyle Accessories',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMAVCsRo_adMDKJcsMhIfZC5nsUmcQWMj9YFq13M6RPJt03Jh44JebzK_Pn1AbLyyc5Zxhg4GH6Qx33kKntpUqPfDpcU97Z7RIzUMkgnDLWTI8yj4ZXTXu6l7qokPZVvwkuHWoUh3q8isuF7HsDBpsMlA=w957-h713-s-no-gm?authuser=0',
    description: 'Product still life',
    className: 'col-span-12 md:col-span-4',
  },
  {
    id: '03',
    title: 'Illustrations',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPEL4UHndVzSspfu2KZ85PF9z3Z8E8pCBGifqcQzMzforyH-dokoEqHv6opxGO7H2iDikHQQIIFvFux-gO3Qvs-eKMYdTOEcsOcmy__Nk1q4CQlq1kwUQrrj8eySWJNmLOd95SKfbb-3fKvDD9c9K2sKw=w614-h869-s-no-gm?authuser=0',
    description: 'Hand-rendered editorial artwork',
    className: 'col-span-12 md:col-span-4',
  },
  {
    id: '04',
    title: 'Art Direction',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOGYeU5r1YSwk40tNobaI9krZ3swwqHtWx_b4Tts-9ZCRqxsW6i4VdMoYTp6mfeJ0s03-VGfK5jaJ9ZmRW8z8ZgK9HzZSIqolvxCM0ZE0h-f0QUdjR294C31UPkOlXi175NxvsvGD7pLsqR6cxDHNY6ug=w579-h869-s-no-gm?authuser=0',
    description: 'Concept and visual storytelling',
    className: 'col-span-12 md:col-span-4',
  },
  {
    id: '05',
    title: 'Textile Design',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNSOON9h9CIou4DFc56tZ8tMfxhO_V2ucXLNqOu1ciLX6E0TpDSTfDI8tGcBcgN5obHOa08hzvbap5Rw_8sEVTBitONNF1oPs6J_i74YbCv65Y2z14tfVs6M6YaCfRhxV27h8vdwX2XxrIKSKbToXsaDQ=w466-h499-s-no-gm?authuser=0',
    description: 'Textural accent photograph',
    className: 'col-span-12 md:col-span-4',
    isAccent: true,
  },
  {
    id: '06',
    title: 'Photography',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPZqqd2dS_l7AXmYWTxxceSO76p3-L-OZLMNbXOA28Xh9djgljuzcsU5NHp02P9mK4OT5ECxZ20N6vDr0OyDU4t6isjJfmaDrOwuf1ap3sDRc2fKdonKGBKRt5a5pH0EzHTs8ml6mhJCiIZ7T9XKYT40Q=w978-h869-s-no-gm?authuser=0',
    description: 'Custom lettering and brand marks',
    className: 'col-span-12 md:col-span-4',
  },
];

export default function Playfolio() {
  return (
    <section className="bg-[#050505] py-12 md:py-16 px-5 md:px-[60px] relative overflow-hidden" id="play">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://lh3.googleusercontent.com/pw/AP1GczOHN7HqRsj3V5HdbyDJKgA-VAGvNaT4_VH6Ou2NJLvTDJjjcbESOFHIdzQklpjwgQoZugmXgSswugWnU98KIj73Ziqp8HeOntOXmYGRd3QIXhQPziiecjWHgTmjRmy8ogx3Qrz0_peom2fH0h1dfSLdkQ=w1544-h869-s-no-gm?authuser=0"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[500px]">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FDE047] text-[10px] tracking-[3px] uppercase font-semibold mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#FDE047]/40"></span>
              Play-folio
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(28px,4vw,40px)] font-bold text-[#f0ece4] leading-[1.1] mb-4 tracking-[-0.02em]"
            >
              The passion grid
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#7a7a8a] text-sm md:text-base leading-relaxed font-light"
            >
              Explorations beyond the brief — fashion, objects, marks, and direction.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="https://www.behance.net/YOUR_HANDLE" 
              target="_blank" 
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-white/60 text-xs font-medium transition-all duration-300 hover:bg-white/5 hover:border-[#FDE047]/30 hover:text-[#FDE047] group"
            >
              Explore more on Behance
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {playfolioItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.19, 1, 0.22, 1]
              }}
              className={`relative group overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/[0.03] aspect-square md:aspect-auto ${item.className} min-h-[180px] md:min-h-[220px] transition-all duration-500 hover:border-[#FDE047]/20 hover:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.5)]`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.description}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110 group-hover:rotate-1"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Noise Overlay */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Label Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                <span className="text-[#FDE047] text-[9px] tracking-[2px] uppercase font-bold mb-2 block opacity-80">
                  {item.id}
                </span>
                <h3 className="text-white text-lg md:text-xl font-bold tracking-tight mb-1">
                  {item.title || 'Visual Exploration'}
                </h3>
              </div>

              {/* Index (Always visible but subtle) */}
              <span className="absolute top-5 right-6 text-white/10 text-[9px] font-mono tracking-[3px] group-hover:text-[#FDE047]/40 transition-colors duration-500">
                {item.id}
              </span>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 border border-[#FDE047]/0 group-hover:border-[#FDE047]/10 transition-colors duration-700 rounded-2xl pointer-events-none"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
