'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUp } from 'lucide-react';

const domains = [
  {
    id: 'experiences',
    number: '01',
    eyebrow: 'Domain One',
    title: 'Designing Experiences',
    description: 'Strategic focus on digital interfaces, inclusive design, and phygital ecosystems.',
    accent: '#c9a87c',
    projects: [
      {
        id: 'soulstice',
        index: '01 / 03',
        title: 'Soulstice',
        subtitle: 'A Phygital Safety Net for Solo Travelers',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMJRComnOpL8JOZeuHeE9Ge8zS7jkWl1-bS-5P64tT93T2oKy7ibDaK7xyygU7-8LqgPul4yG-Bx3U-UaniS9zNkI3w_9o4tFuXzblWGmonHzdFRw36cjPOz6eDAzqDsEQiEB3OqFm0RFJs_6yR1FuN0w=w750-h647-s-no-gm?authuser=0',
        tags: ['UI/UX', 'Phygital Experience', 'Positive Design'],
        insight: '"A user\'s confidence fractures without a trusted, on-ground connection — leading them to hack their own safety nets via personal local contacts."',
        research: 'Through a Vision in Product (ViP) deconstruction, I identified a "lonely freedom" paradox where solo travelers in India juggle a fragmented DIY ecosystem. Lived phenomenology and competitor audits revealed that current solutions treat safety as a restrictive welfare constraint.',
        strategy: [
          { label: 'Shift the lens', text: 'Move from "welfare" (survival) to "flourishing" — prioritizing eudaimonic growth and autonomy.' },
          { label: 'Productize trust', text: 'Transform manual local-reassurance behavior into a seamless, verified "Guardian Angel" service.' },
          { label: 'Prioritize autonomy', text: 'Keep safety features like geo-fencing and SOS triggers invisible until needed.' },
          { label: 'Leverage information flow', text: 'Provide real-time, qualitative local intelligence instead of static anonymous data.' },
        ],
        solution: 'A phygital ecosystem featuring the Guardian Angel system — connecting travelers with verified local women for on-ground support. Integrates AI-enabled safe navigation, vetted accommodations, and a digital journal for documented personal growth.',
      },
      {
        id: 'silverstyle',
        index: '02 / 03',
        title: 'SilverStyle',
        subtitle: 'Inclusive Fashion for the Evergreen Demographic',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMvAMe1u2joyilsz1j20eLggrZwnFZwyIqIChSdrurSIYry0MwuZVzI9Z9BfPUIP25qv4cjsQhAeCBNbwOYdsqN0XV-nS2vz2r1U5Ulv2uSjuR4TY9F_aUvT1XgH9oN6ZRoKa-FQn6VACc-KzIXFt9dCA=w934-h807-s-no-gm?authuser=0',
        tags: ['Inclusive Design', 'E-commerce', 'Senior UX'],
        insight: '"Less than 1% of fashion content on major Indian platforms features women over 60 — a demographic that is both financially independent and digitally active."',
        research: 'A comprehensive UI audit and content analysis of major Indian platforms revealed a "digital erasure" of women over 60. Direct interviews uncovered a cycle of systemic and internalized ageism — users feel "digitally invisible," policed by age-appropriate norms despite being active digital consumers.',
        strategy: [
          { label: 'Establish representation', text: 'Replace youth-dominated imagery with relatable models aged 60+ across all touchpoints.' },
          { label: 'Optimize accessibility', text: 'Larger fonts, high-contrast modes, and voice-assisted navigation to reduce cognitive friction.' },
          { label: 'Refine filtering', text: 'Functionality-specific filters for "sensory comfort" — soft waistbands, ease of movement — not ageist labels.' },
          { label: 'Build community', text: '"Style Circles" for social validation, shifting the experience from a chore to an aspirational journey.' },
        ],
        solution: 'A demographic-specific Myntra Store integrating seamlessly into the existing ecosystem — curated catalog with "Elevated Looks and Personalized Picks," supported by an AI styling assistant specialized for older body types.',
      },
      {
        id: 'akaar',
        index: '03 / 03',
        title: 'Akaar',
        subtitle: 'A Digital Ecosystem for the Indian Crafts Industry',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNP_wym_pViC5XmVkMlP5kdFMXamjMZnOfcPaow2HaxG7iAblI2WKDrgnywb1-YFOGBRe-ykIJMxIqSdn_8NAPAiayS2bAmKzMgnK_cw_35GACE-p3T9AdClvhFXxeCwcx5SFERMxtJ4yGy9t3hUcuQYw=w1152-h605-s-no-gm?authuser=0',
        tags: ['UI/UX', 'Information Architecture', 'Cultural Preservation'],
        insight: '"Existing platforms commodify crafts without providing context or honoring the artisan\'s narrative — a digital divide disconnecting traditional craftsmen from modern global markets."',
        research: 'Primary research into the Indian artisanal sector revealed a significant digital divide. Stakeholder mapping and competitive auditing identified that existing platforms extract value without honoring the artisan\'s narrative. Conceptualized as a "Digital Crafts Hub" balancing commercial viability with intangible cultural heritage.',
        strategy: [
          { label: 'Contextual storytelling', text: 'A content-first approach that prioritizes the "story behind the craft" — historical and regional significance of every artifact.' },
          { label: 'Intuitive taxonomy', text: 'Robust information architecture filtering through geography, material, and technique.' },
          { label: 'Artisan-centricity', text: 'Dedicated profiles giving direct visibility to makers — shifting power from middlemen to creators.' },
          { label: 'Scalable framework', text: 'Responsive, modular design system accommodating a growing database while maintaining a premium visual language.' },
        ],
        solution: 'A comprehensive web platform serving as a virtual hub for Indian crafts — featuring an interactive Craft Map of India, an educational archive, and a streamlined marketplace interface. Empowers artisans with global reach while offering users an immersive journey into Indian heritage.',
      },
    ],
  },
  {
    id: 'narratives',
    number: '02',
    eyebrow: 'Domain Two',
    title: 'Visualising Narratives',
    description: 'Focus on identity systems, visual storytelling, and commercial art direction.',
    accent: '#8ea99c',
    projects: [
      {
        id: 'socialpanga',
        index: '01 / 03',
        title: 'Social Panga',
        subtitle: 'Graphic Design Residency',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMaVZypsWrchUmLZADSDb_zovYXckGjjSCIspwRWWSWrEUrLVsdqax887OyMgAkhmEL8QABdMKM1e1jQrvVhVLuiyjFmUx5d0mVIoaVdjUcfjslANSflArXxH0jTbPbGckpz86Vm5Xinmghf-S7_13i9Q=w869-h869-s-no-gm?authuser=0',
        role: 'Graphic Designer',
        tags: ['Typography', 'AI Image Prompting', 'Illustrations', 'Logo Design'],
        brief: 'Operating at the intersection of commercial art direction and rapid visual storytelling — translating complex brand briefs into high-impact digital assets. Ranging from minimalist typography for healthcare to vibrant AI-assisted illustrations for consumer goods.',
        metrics: [
          { value: '5K+', label: 'Peak likes on organic Instagram statics' },
          { value: '3+', label: 'Winning client pitches securing long-term mandates' },
          { value: '40%', label: 'Reduction in asset conceptualization time via AI' },
        ],
      },
      {
        id: 'uphaar',
        index: '02 / 03',
        title: 'Uphaar — Gaatha',
        subtitle: 'Story-Driven Gift Set Curation',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNFPSrqhp1J1GvU36Q3Jy06RJxG14F_mGghsxBZlt7853joZc_Sq8f_48YhCGqs7qe3LDuQgs-AOO5XVA_JcmrFEdehGLYd-PbPO3uriiPGksgS6qFAOclclkYG8_czsdKBUuIzYCagl9XQn2-Grd_Kmw=w800-h800-s-no-gm?authuser=0',
        role: 'Brand & Packaging Designer',
        tags: ['Visual Identity', 'Packaging Design', 'Ethnographic Research', 'Human-Centred Design'],
        insight: '"Uphaar transforms gifting from a transaction into a narrative experience — rooted in ethnographic research and cultural emotional motivations."',
        visualSystem: [
          { label: 'Market-driven logic', text: 'Personalization and sustainability as core drivers — dictating eco-conscious material choices.' },
          { label: 'Emotional hierarchy', text: "Aaron Walter's Pyramid applied to create branded collateral that moves beyond utility to emotional delight." },
          { label: 'Heritage illustration', text: 'Custom graphics serving as a visual bridge between traditional craft and modern gifting aesthetics.' },
          { label: 'Persona-led behavior', text: 'TPD model informing the functional layout and storytelling sequence of the packaging.' },
        ],
        application: 'A comprehensive physical and digital brand experience — including precise packaging dielines, branded storytelling inserts, and a cohesive identity system across Gaatha\'s curated gift sets.',
      },
      {
        id: '89north',
        index: '03 / 03',
        title: '89North',
        subtitle: 'Strategic Rebranding for Scalable Growth',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPuxb1X4Iau2wMRvxOncmPSvvOzjYRD64WWcfBE846Z7q9BSi5sJIbSJheAucYbtYYvNaq7s2-pfrQrL7kXXh8NBMIXxFbKzWHhjEX7ADe-zm6IMQP067hlAtBv4SFYmyJ4_deQ5podXVHYKagN3-GOVw=w1316-h679-s-no-gm?authuser=0',
        role: 'Strategic Brand Designer',
        tags: ['Corporate Identity', 'Rebranding', 'Brand Strategy', 'Organisational Design'],
        insight: '"Transitioned from a literal maritime metaphor to a sophisticated data-driven \'Guiding Light\' strategy — positioning 89North as the strategic clarity that transforms internal friction into operational alignment."',
        visualSystem: [
          { label: 'Typography for authority', text: 'Neue Haas Grotesk establishing confidence, structure, and B2B authority for executive decision-makers.' },
          { label: 'High-contrast palette', text: 'Midnight Blue and Solar Orange — a sharp beam of clarity cutting through organizational complexity.' },
          { label: 'Precision imagery', text: 'Architectural precision, abstract light refractions, and data visualizations reflecting grounded frameworks.' },
          { label: 'The Beacon framework', text: 'Five beacons — Clarity, Systems, Leadership, Learning, and HR — providing a "Navigation Map" for scaling startups.' },
        ],
        application: 'A complete brand refresh across high-stakes touchpoints — redesigned strategic website, executive presentation decks, and a data-centric digital presence designed for time-poor CEOs and founders.',
      },
    ],
  },
  {
    id: 'systems',
    number: '03',
    eyebrow: 'Domain Three',
    title: 'Decoding Systems',
    description: 'In-depth research into human behavior, industrial systems, and cultural trends.',
    accent: '#9b8fbd',
    projects: [
      {
        id: 'pharma',
        index: '01 / 03',
        title: 'Systems Mapping',
        subtitle: 'Pharmaceutical Waste in India',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPoG1t7gkBKT0wBSDXviWpj7kEHxtoWTlqHQ8lcgv-P9ihfFVoweUqI-E-qrJuxpL8Ne2E4IyU7P5OkHvgSO-96xWHBpb6YpVhXSQZ7c4ZeKpaUJJqmoutgdbY8wvwaqaCxViS4j1mGX-i0sf2pngEgOw=w671-h869-s-no-gm?authuser=0',
        tags: ['Systems Thinking', 'Wicked Problems', 'Sustainability', 'Root Cause Analysis'],
        insight: '"The wicked problem is driven by a lack of integrated feedback loops between distribution inefficiencies (expired stock) and domestic consumption behaviors like self-diagnosis."',
        methodology: [
          { label: 'Lifecycle tracking', text: 'Systematically analyzed product movement through bulk manufacturing, supply chain distribution, e-pharmacy rise, and final disposal.' },
          { label: 'Multi-level stakeholder mapping', text: 'Institutional (big pharma, hospitals) and Domestic (households, informal waste workers) stakeholders mapped for pollution impact.' },
          { label: 'Causal loop & policy audit', text: 'Causal loop analysis plus regulatory framework audit against international best practices to identify enforcement gaps.' },
        ],
        keyInsight: 'Proposed digital solutions for real-time waste monitoring and biodegradable formulations to reduce the industry\'s environmental footprint — closing the feedback loop between distribution and domestic consumption.',
      },
      {
        id: 'bluetent',
        index: '02 / 03',
        title: 'Blue Tent Settlements',
        subtitle: 'Social Design — Bangalore\'s Migrant Communities',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPU9iSSwWNgjYPE50a7NdAEOJRvG5GbtTLxfEOh1C1VHherAPZ5srmoBGfBUdatH5CMAtLaOnS_PEMHiq_fviKwUkwULydJTPlcrjYLGArrWx7lE8A7jRwA4GULSUOTfAjnGDcSR4t9PByDB5ympFFSzA=w1280-h813-s-no-gm?authuser=0',
        tags: ['Social Design', 'Systems Thinking', 'Ethnography', 'Gamification'],
        insight: '"The primary barrier is a lack of perceivable progress, leading to a sense of defeat — the gap between aspiration and agency in Bangalore\'s migrant blue tent settlements."',
        methodology: [
          { label: 'Ethnographic immersion', text: 'On-ground fieldwork with NGO Sampark using contextual inquiry to map daily lived experiences and socio-cultural barriers.' },
          { label: 'The Iceberg Model', text: 'Systems thinking applied to uncover underlying mental models and structural drivers behind visible events like school dropouts.' },
          { label: 'Aspiration mapping', text: 'Child-led workshops visualizing the "Ideal Self" versus "Constraint-driven Self," identifying points where confidence fractures.' },
        ],
        keyInsight: 'A gamified educational ecosystem — low-tech, community-driven challenges providing immediate social validation and "micro-wins," building the agency necessary to sustain education and bridge the aspiration gap.',
      },
      {
        id: 'trendbook',
        index: '03 / 03',
        title: 'Trend Book 2026–2030',
        subtitle: 'GenZ Macro Trends & Strategic Foresight',
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMf2yObQU_35Z5hZ5ZJUjiN5WmmlIPP5r-gh8TvIalr-NmDkchiOKeRe4JuoO_wOjmjwjwfHS-JTf2fycKmh13zWA0fAmoBbHCn6beKBJRHToRMX8frmZ243_vBoWyJqkoz1lsi3fCmw-Oe4u3v9OwSEQ=w821-h791-s-no-gm?authuser=0',
        tags: ['Trend Forecasting', 'Strategic Foresight', 'Consumer Behaviour', 'Lifestyle Insights'],
        insight: '"A core tension between \'Virtual Escapism\' and \'Radical Authenticity\' — leading to Mindful Maximalism as a dominant aesthetic driver for the coming decade."',
        methodology: [
          { label: 'Haystacking & signal aggregation', text: 'Gathering fragmented data from niche digital movements and artisanal revivals to identify cohesive patterns.' },
          { label: 'STEEP framework', text: 'High-level trend spotting across social, technological, and environmental sectors in youth culture.' },
          { label: 'Maslow\'s motivation model', text: 'Mapping how GenZ\'s shift toward "Self-Actualization" and "Belonging" drives preference for radical authenticity.' },
        ],
        keyInsight: 'A strategic roadmap for brands to leverage "Phygital" touchpoints aligned with GenZ\'s future value systems — bridging digital hyper-connectivity with a desire for physical grounding.',
      },
    ],
  },
];

export default function ProjectsPage() {
  const [activeDomain, setActiveDomain] = useState('experiences');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // IntersectionObserver is far cheaper than a raw scroll listener:
    // it fires only when section visibility changes, not on every scroll tick,
    // and never forces a layout recalc via getBoundingClientRect().
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveDomain((entry.target as HTMLElement).dataset.domain || 'experiences');
          }
        });
      },
      // Trigger when the section crosses the middle of the viewport
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('.domain-section');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#0c0b09] text-[#f0ebe3] font-sans selection:bg-[#c9a87c]/30 min-h-screen relative">
      {/* Static Background Image
          will-change: transform promotes this element to its own GPU compositing layer
          upfront, so the browser doesn't have to re-upload it to the GPU on every
          scroll frame — critical when many elements overlap a fixed background. */}
      <div className="fixed inset-0 z-0 overflow-hidden" style={{ willChange: 'transform' }}>
        <div className="relative w-full h-full opacity-40">
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczOOPG7JTzHrW5LQXNKqSCcaspiq9aUdsn580QgP7TxWVmjUiy_3me3wjkQG24WFEJyRl9WzQ7oj4XUODSMEJ_huHS6UR5FV_WLD7m-xFEO2MMwZ65mfrh68vHW-7vk_yuO7hfSexOv9G5sJuku1sxHuFA=w1545-h869-s-no-gm?authuser=0"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      </div>

      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 h-16 z-[100] flex items-center justify-between px-6 md:px-8 bg-white/[0.03] backdrop-blur-md border-b border-white/10">
        {/* Desktop Navigation */}
        <div className="hidden md:flex h-full">
          {domains.map((domain) => (
            <Link
              key={domain.id}
              href={`#${domain.id}`}
              className={`text-[10px] tracking-[0.22em] uppercase px-6 h-full flex items-center transition-all relative group ${
                activeDomain === domain.id ? 'text-white' : 'text-[#7a7570]'
              }`}
            >
              {domain.id}
              <span 
                className={`absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-300 ${
                  activeDomain === domain.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
                style={{ backgroundColor: domain.accent }}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white/80 hover:text-white transition-colors p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        <Link 
          href="/" 
          className="text-[11px] tracking-[0.3em] uppercase font-medium text-white/80 hover:text-white transition-colors"
        >
          Ananya
        </Link>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[90] md:hidden bg-[#0c0b09]/95 backdrop-blur-xl pt-24 px-8"
          >
            <div className="flex flex-col gap-8">
              {domains.map((domain) => (
                <Link
                  key={domain.id}
                  href={`#${domain.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="group"
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">
                    {domain.number}
                  </div>
                  <div className={`text-2xl font-bold tracking-tight transition-colors ${
                    activeDomain === domain.id ? 'text-white' : 'text-white/60'
                  }`}>
                    {domain.title}
                  </div>
                  <div 
                    className="h-px mt-4 transition-all duration-500"
                    style={{ 
                      width: activeDomain === domain.id ? '100%' : '0%',
                      backgroundColor: domain.accent 
                    }}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-16 relative z-10">
        {domains.map((domain) => (
          <section 
            key={domain.id} 
            id={domain.id} 
            data-domain={domain.id}
            className="domain-section relative"
          >
            {/* Domain Overlay
                Removed the external noise.svg fetch — it added a network round-trip
                and an extra compositor layer for a barely-visible 2% opacity effect. */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  background: `linear-gradient(160deg, transparent 0%, ${domain.accent}10 60%, transparent 100%)`
                }}
              />
            </div>

            <div className="max-w-[1300px] mx-auto px-8 py-24 relative z-10">
              {/* Domain Header - 2 Column Layout with Glass Box
                  Replaced backdrop-blur-xl with a solid semi-transparent bg.
                  backdrop-blur on a large header repeated 3× was very expensive. */}
              <header className="relative mb-20 group">
                <div className="absolute -inset-6 bg-white/[0.05] border border-white/10 rounded-3xl -z-10 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20" />
                
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 p-8">
                  <div className="flex flex-col justify-end">
                    <div className="text-6xl font-bold opacity-10 tracking-tighter leading-none mb-4">
                      {domain.number}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-3 font-semibold text-[#c9a87c]">
                      {domain.eyebrow}
                    </p>
                    <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-4">
                      {domain.title}
                    </h2>
                    <p className="text-sm text-[#7a7570] leading-relaxed max-w-xl">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </header>

              {/* Projects List */}
              <div className="space-y-32">
                {domain.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} domainAccent={domain.accent} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Back to Top Button */}
      <div className="py-20 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex flex-col items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-[#c9a87c] transition-colors"
        >
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c9a87c]/30 group-hover:bg-white/[0.03] transition-all">
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </div>
          <span>Back to Top</span>
        </button>
      </div>
    </main>
  );
}

function ProjectCard({ project, domainAccent }: { project: any, domainAccent: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
      className="project-card grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start"
    >
      {/* Left: Visuals */}
      <div className="lg:sticky lg:top-32">
        {/* backdrop-blur-sm removed — 9 blurred image containers during scroll was expensive.
            Replaced with a solid dark bg; visually equivalent at this opacity level. */}
        <div className="aspect-[3/2] w-full max-w-[480px] rounded-2xl bg-[#1c1a16] border border-white/10 overflow-hidden relative group">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="grid grid-cols-4 gap-1 w-16 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <span key={i} className={`aspect-square bg-white rounded-sm ${i % 2 === 0 ? 'opacity-40' : ''}`} />
                ))}
              </div>
              <p className="text-[9px] tracking-[0.2em] text-white/20 uppercase font-medium">
                {project.id} · Visual
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right: Copy */}
      <div className="space-y-10">
        <div>
          <div className="text-[10px] tracking-[0.25em] text-[#c9a87c]/60 uppercase mb-4 flex items-center gap-4">
            {project.index}
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <h3 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight leading-tight mb-4">
            {project.title}
          </h3>
          <p className="text-sm italic text-[#7a7570] leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {project.role && (
          <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] uppercase text-white/40 font-medium">
            <span className="w-8 h-px bg-white/10" />
            {project.role}
          </div>
        )}

        {/* Tag badges: removed backdrop-blur-md — with 9 projects × ~4 tags each,
            that was ~36 blurred elements that had to re-composite on every scroll frame.
            Solid bg is imperceptibly different at this small size. */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[9px] tracking-[0.15em] uppercase px-4 py-2 rounded-full bg-white/[0.08] border text-white/70"
              style={{ borderColor: `${domainAccent}33` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.insight && (
          <div
            className="border-l-2 pl-6 py-5 rounded-r-xl bg-white/[0.04]"
            style={{ borderColor: domainAccent }}
          >
            <p className="text-lg font-medium italic text-white/80 leading-relaxed">
              {project.insight}
            </p>
          </div>
        )}

        {/* Content Blocks */}
        <div className="grid grid-cols-1 gap-12">
          {project.research && (
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold border-b border-white/10 pb-3">
                Research & Ideation
              </p>
              <p className="text-[15px] leading-relaxed text-white/60">
                {project.research}
              </p>
            </div>
          )}

          {project.brief && (
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold border-b border-white/10 pb-3">
                Project Brief
              </p>
              <p className="text-[15px] leading-relaxed text-white/60">
                {project.brief}
              </p>
            </div>
          )}

          {project.strategy && (
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold border-b border-white/10 pb-3">
                Design Strategy
              </p>
              <ul className="space-y-4">
                {project.strategy.map((item: any, i: number) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-4 text-[14px] leading-relaxed text-white/50">
                    <span className="text-sm mt-0.5" style={{ color: domainAccent }}>→</span>
                    <span>
                      <strong className="text-white/90 font-semibold">{item.label}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.visualSystem && (
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold border-b border-white/10 pb-3">
                The Visual System
              </p>
              <ul className="space-y-4">
                {project.visualSystem.map((item: any, i: number) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-4 text-[14px] leading-relaxed text-white/50">
                    <span className="text-sm mt-0.5" style={{ color: domainAccent }}>→</span>
                    <span>
                      <strong className="text-white/90 font-semibold">{item.label}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.methodology && (
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold border-b border-white/10 pb-3">
                Methodology & Framework
              </p>
              <ul className="space-y-4">
                {project.methodology.map((item: any, i: number) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-4 text-[14px] leading-relaxed text-white/50">
                    <span className="text-sm mt-0.5" style={{ color: domainAccent }}>→</span>
                    <span>
                      <strong className="text-white/90 font-semibold">{item.label}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.solution && (
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold border-b border-white/10 pb-3">
                The Solution
              </p>
              <p className="text-[15px] leading-relaxed text-white/60">
                {project.solution}
              </p>
            </div>
          )}

          {project.application && (
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold border-b border-white/10 pb-3">
                The Application
              </p>
              <p className="text-[15px] leading-relaxed text-white/60">
                {project.application}
              </p>
            </div>
          )}

          {project.keyInsight && (
            <div className="space-y-4">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-bold border-b border-white/10 pb-3">
                Key Insight & Intervention
              </p>
              <p className="text-[15px] leading-relaxed text-white/60">
                {project.keyInsight}
              </p>
            </div>
          )}

          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
              {project.metrics.map((metric: any, i: number) => (
                <div key={i} className="bg-white/[0.02] p-6">
                  <div className="text-3xl font-bold leading-none mb-2" style={{ color: domainAccent }}>
                    {metric.value}
                  </div>
                  <div className="text-[9px] tracking-[0.15em] uppercase text-white/40 leading-tight font-semibold">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Link
          href="https://www.behance.net/ananyabajpai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-full bg-white/[0.07] border border-white/10 text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a87c] hover:bg-white/[0.10] hover:border-[#c9a87c]/30 transition-all group"
        >
          <span>view full project</span>
          <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
        </Link>
      </div>
    </motion.article>
  );
}
