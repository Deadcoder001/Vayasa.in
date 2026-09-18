import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from './RevealText';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pillars = [
  {
    id: '01',
    title: 'Botanical Alchemy',
    subtitle: 'Wild-Harvested Sourcing & Cellular Radiance',
    desc: 'Pure extracts formulated from rare Himalayan flora and wild Assam camellia botanicals, cultivated to restore biological radiance, soothe inflammation, and rebalance cellular vitality.',
    img: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop',
    tag: 'ORGANIC PURITY',
    focus: 'Cellular Vitality & Skin Radiance',
    location: 'Assam Botanical Reserve',
    highlights: [
      { label: 'SOURCING', value: 'Wild Assam Camellia & High-Altitude Flora' },
      { label: 'EXTRACTION', value: 'Small-Batch Cold-Pressed Preservation' },
      { label: 'EFFICACY', value: 'Restores Deep Biological Equilibrium' }
    ]
  },
  {
    id: '02',
    title: 'Thermal Hydrotherapy',
    subtitle: 'Geothermal Springs & Muscular Release',
    desc: 'Immersion in geothermal vitality pools, contrast cold plunges, and restorative eucalyptus herbal steam sanctuaries engineered to stimulate lymphatic flow and melt deep muscular tension.',
    img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop',
    tag: 'WATER RITUALS',
    focus: 'Thermal Detox & Muscular Release',
    location: 'Brahmaputra Thermal Pavilion',
    highlights: [
      { label: 'TEMPERATURE', value: 'Alternating 38°C Thermal to 12°C Glacial Plunge' },
      { label: 'MINERALS', value: 'Magnesium & Himalayan Salt Infusions' },
      { label: 'EFFICACY', value: 'Accelerated Musculoskeletal Recovery' }
    ]
  },
  {
    id: '03',
    title: 'Vibrational Sound Healing',
    subtitle: 'Acoustic Resonance & Theta Meditation',
    desc: 'Master-crafted Tibetan singing bowls, gongs, and bio-frequency acoustics calibrated to gently slow brainwave rhythms into effortless theta states, dissolving chronic mental exhaustion.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    tag: 'MINDFUL HARMONY',
    focus: 'Neurological Stillness & Clarity',
    location: 'Resonant Acoustic Sanctuary',
    highlights: [
      { label: 'ACOUSTICS', value: 'Hand-Hammered Seven-Metal Tibetan Bowls' },
      { label: 'FREQUENCY', value: '432Hz Harmonically Tuned Resonance' },
      { label: 'EFFICACY', value: 'Profound Nervous System Reset' }
    ]
  },
  {
    id: '04',
    title: 'Bespoke Private Journeys',
    subtitle: 'Tailored Sanctuary Protocols',
    desc: 'Personalized multi-sensory treatment protocols within secluded pavilion suites, curated by master therapists to align with your personal dosha constitution and physical requirements.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    tag: 'MASTER CURATION',
    focus: 'Individualized Diagnosis & Holistic Care',
    location: 'Secluded Pavilion Suites',
    highlights: [
      { label: 'DIAGNOSIS', value: 'Holistic Pulse & Constitutional Profiling' },
      { label: 'MODALITY', value: 'Multi-Therapist Synchronized Protocols' },
      { label: 'EFFICACY', value: 'Complete Mind, Body & Spirit Harmony' }
    ]
  }
];

export default function InteractivePhilosophy() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePillar = pillars[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-20 md:py-32 flex justify-center bg-alabaster border-y border-gray-200/70">
      <div className="w-full max-w-[1600px]">

        {/* Section Header: Minimal & Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-charcoal/70" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                GUIDING ETHOS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal tracking-tight leading-[1.1]">
              <RevealText>The Sanctuary Philosophy</RevealText>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 font-light max-w-xl leading-relaxed lg:pb-1">
            Every ritual is an intentional convergence of ancient Eastern healing traditions and contemporary restorative science, tailored to your personal rhythm.
          </p>
        </div>

        {/* Minimal Modern Horizontal Tabs */}
        <div className="w-full border-b border-gray-200/80 mb-10 md:mb-14 overflow-x-auto scrollbar-none">
          <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12 min-w-max pb-px">
            {pillars.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative pb-4 pt-1 text-left transition-colors duration-300 group cursor-pointer focus:outline-none ${
                    isActive ? 'text-charcoal' : 'text-gray-400 hover:text-charcoal/80'
                  }`}
                >
                  <div className="flex items-baseline space-x-2.5">
                    <span className={`text-[11px] font-mono tracking-widest ${
                      isActive ? 'text-charcoal font-medium' : 'text-gray-400'
                    }`}>
                      {item.id}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg font-serif tracking-tight font-light whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>

                  {/* Sleek Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activePhilosophyTab"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-charcoal"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Editorial Showcase */}
        <div className="relative min-h-[520px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Left Column: Rich Editorial Story & Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Pillar Index & Metadata */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200/80 mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono tracking-widest text-charcoal/70">
                        PILLAR {activePillar.id} / 0{pillars.length}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-gray-500 font-light">
                        {activePillar.tag}
                      </span>
                    </div>

                    <span className="text-[11px] text-gray-400 tracking-wider hidden sm:inline-block font-light">
                      {activePillar.location}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal tracking-tight leading-tight mb-2">
                    {activePillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-500 font-light mb-6">
                    {activePillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-8 max-w-xl">
                    {activePillar.desc}
                  </p>

                  {/* 3 Curated Ritual Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-y border-gray-200/80 mb-8">
                    {activePillar.highlights.map((h, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-mono mb-1">
                          {h.label}
                        </span>
                        <span className="text-xs sm:text-sm text-charcoal font-light leading-snug">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Focus Tag & Prev / Next Minimal Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-charcoal/[0.04] border border-charcoal/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/70" />
                    <span className="text-[11px] uppercase tracking-wider text-charcoal/80 font-light">
                      FOCUS: {activePillar.focus}
                    </span>
                  </div>

                  {/* Minimal Circular Navigation Arrows */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous pillar"
                      className="w-10 h-10 rounded-full border border-gray-300/80 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-pearl transition-all duration-300 cursor-pointer focus:outline-none"
                    >
                      <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next pillar"
                      className="w-10 h-10 rounded-full border border-gray-300/80 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-pearl transition-all duration-300 cursor-pointer focus:outline-none"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[1.5]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Pristine Luxury Photo */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-black/[0.06] bg-charcoal/5 shadow-sm">
                  <motion.img
                    key={activePillar.img}
                    initial={{ scale: 1.04, opacity: 0.85 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    src={activePillar.img}
                    alt={activePillar.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Corner Floating Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-black/5 text-[10px] uppercase tracking-[0.2em] text-charcoal font-light shadow-sm">
                      {activePillar.tag}
                    </span>
                    <span className="text-[10px] tracking-widest text-white/95 font-mono px-2.5 py-0.5 rounded-full bg-black/30 backdrop-blur-sm">
                      0{activeIndex + 1} / 0{pillars.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4-Pillar Interactive Preview Cards Strip */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-gray-200/70">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-light">
              ALL FOUR PILLARS
            </span>
            <span className="text-xs font-mono text-gray-400">
              CLICK TO VIEW
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {pillars.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group p-3 sm:p-4 rounded-xl text-left transition-all duration-300 border relative cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-white border-charcoal/30 shadow-sm'
                      : 'bg-transparent border-gray-200/70 hover:border-gray-300 hover:bg-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono tracking-wider ${
                      isActive ? 'text-charcoal font-medium' : 'text-gray-400'
                    }`}>
                      {item.id}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-charcoal' : 'bg-transparent'
                    }`} />
                  </div>

                  <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-2.5 bg-charcoal/5">
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                      }`}
                    />
                  </div>

                  <h4 className={`text-xs sm:text-sm font-serif truncate transition-colors ${
                    isActive ? 'text-charcoal font-normal' : 'text-charcoal/70 group-hover:text-charcoal'
                  }`}>
                    {item.title}
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 truncate mt-0.5 font-light">
                    {item.tag}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

