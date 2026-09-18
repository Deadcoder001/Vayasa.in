import React from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useEnquiry } from '../context/EnquiryContext';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import FAQSection from '../components/FAQSection';

export default function About() {
  const { openEnquiry } = useEnquiry();

  const spaces = [
    {
      num: '01',
      title: 'Geothermal Vitality Pools',
      desc: 'Engineered with therapeutic mineral salts and calibrated to 38°C, our vitality plunge relaxes deep musculoskeletal fascia and calms the central nervous system.',
      img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop',
    },
    {
      num: '02',
      title: 'Private Pavilion Suites',
      desc: 'Designed for total acoustic quiet, featuring cedarwood herbal steam sanctuaries, restorative showers, and personalized organic oil blending.',
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    },
    {
      num: '03',
      title: 'Vibrational Sound Chambers',
      desc: 'Acoustically tuned spaces utilizing hand-hammered seven-metal Himalayan singing bowls to entrain neurological brainwaves into restorative theta states.',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  const pillars = [
    {
      num: '01',
      title: 'Sacred Sourcing',
      desc: 'Every extract is 100% wild-harvested from high-altitude Himalayan flora and certified organic Assam single-estate tea plantations.',
    },
    {
      num: '02',
      title: 'Lineage Mastery',
      desc: 'Our certified master practitioners combine multi-generational Ayurvedic touch with contemporary sports and neuromuscular science.',
    },
    {
      num: '03',
      title: 'Bioactive Purity',
      desc: 'Zero synthetic preservatives, artificial perfumes, or parabens. Pure cold-pressed botanicals formulated for biological vitality.',
    },
    {
      num: '04',
      title: 'Unhurried Rhythm',
      desc: 'Generous private transition intervals between rituals ensure you leave the sanctuary at your own unhurried equilibrium.',
    },
  ];

  const stats = [
    { value: '100%', label: 'Wild-Harvested Himalayan Extracts' },
    { value: '38°C', label: 'Calibrated Geothermal Thermal Pools' },
    { value: '07', label: 'Harmonic Metal Sound Resonance Bowls' },
    { value: '4.98', label: 'Guest Restoration Satisfaction' },
  ];

  return (
    <div className="w-full bg-alabaster text-charcoal flex flex-col items-center pt-24 sm:pt-32">
      
      {/* 1. Hero Section: Grand Editorial Header */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-16 md:py-24 flex justify-center border-b border-charcoal/10">
        <div className="w-full max-w-[1920px] flex flex-col items-start text-left">
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light text-charcoal tracking-tight leading-[1.05] max-w-5xl mb-8">
            <RevealText>The Architecture of Absolute Stillness</RevealText>
          </h1>

          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-t border-charcoal/10">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
              Born from the serene river valleys of Assam, Vayasa is an intentional retreat designed to systematically decelerate the nervous system through ancient botanical science and thermal hydrotherapy.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Hero Widescreen Panoramic Image */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-12 md:py-16 flex justify-center border-b border-charcoal/10">
        <div className="w-full max-w-[1920px]">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden bg-charcoal/5 border border-charcoal/10 shadow-xs">
            <motion.img
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1800&auto=format&fit=crop"
              alt="Vayasa Sanctuary Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Genesis & Philosophy Monograph */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-20 md:py-32 flex justify-center border-b border-charcoal/10">
        <div className="w-full max-w-[1920px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Pull Statement */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal tracking-tight leading-tight mb-6">
              A Quiet Antidote to Modern Acceleration
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed mb-8">
              In modern life, rest is often treated as an afterthought. At Vayasa, we treat stillness as a primary human necessity—essential for biological radiance, emotional clarity, and physical restoration.
            </p>
            <button
              onClick={() => openEnquiry()}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-light text-charcoal hover:text-gray-500 transition-colors border-b border-charcoal/30 pb-1 cursor-pointer"
            >
              <span>Schedule Sanctuary Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: In-Depth Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            <p>
              Situated along the verdant gateway of Northeast India, Guwahati has long been an epicenter of sacred medicinal heritage. Vayasa unites these ancestral practices with state-of-the-art hydrothermal architecture and certified master therapy.
            </p>
            <p>
              We do not believe in generic spa packages. Every ritual is individually tailored following a private sensory consultation—calibrating aromatic profiles, thermal temperatures, and tactile pressure to guide your body out of sympathetic stress into deep autonomic calm.
            </p>
            <p>
              From rare Assam camellia seed oils to wild Himalayan cedarwood, every ingredient is cold-pressed in small batches, guaranteeing maximum bio-potency for your skin and cellular vitality.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Sanctuary Metrics Grid */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-16 md:py-20 flex justify-center border-b border-charcoal/10 bg-black/[0.015]">
        <div className="w-full max-w-[1920px] grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal tracking-tight mb-1.5">
                {stat.value}
              </span>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-light leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Curated Architectural Sanctums */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-20 md:py-32 flex justify-center border-b border-charcoal/10">
        <div className="w-full max-w-[1920px] flex flex-col items-start text-left">
          
          <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-charcoal tracking-tight">
              Architectural Spaces of Quietude
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xs">
              Three dedicated spatial sanctuaries engineered for deep physical deceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
            {spaces.map((space) => (
              <div
                key={space.num}
                onClick={() => openEnquiry(space.title)}
                className="group flex flex-col items-start text-left cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal/5 border border-charcoal/10 mb-6">
                  <img
                    src={space.img}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-charcoal" />
                  </div>
                </div>

                <div className="w-full mb-2 text-xs font-mono text-gray-400">
                  <span>{space.num}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-light text-charcoal mb-2.5 group-hover:text-gray-600 transition-colors">
                  {space.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  {space.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. The Four Philosophical Pillars */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-20 md:py-32 flex justify-center border-b border-charcoal/10">
        <div className="w-full max-w-[1920px] flex flex-col items-start text-left">
          
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-charcoal tracking-tight mb-14 md:mb-16">
            The Four Sanctuary Pillars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="flex flex-col items-start pt-6 border-t border-charcoal/15"
              >
                <span className="text-xs font-mono text-gray-400 mb-4">
                  {pillar.num}
                </span>
                <h4 className="text-lg sm:text-xl font-serif font-light text-charcoal mb-2.5">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SEO & GEO Integrated FAQ Section */}
      <FAQSection />

      {/* 8. Minimalist Sanctuary Invitation Monograph */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-20 md:py-32 flex justify-center">
        <div className="w-full max-w-[1920px] flex flex-col items-center text-center">

          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal leading-snug sm:leading-tight max-w-4xl mb-8">
            “True restoration is not something you chase—it is what returns when you give yourself permission to be still.”
          </blockquote>

          <p className="text-xs sm:text-sm text-gray-500 font-light max-w-md leading-relaxed mb-10">
            Private pavilion suites and geothermal hydrotherapy slots in Guwahati are reserved exclusively by appointment.
          </p>

          <button
            onClick={() => openEnquiry()}
            className="group inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-charcoal hover:bg-black text-alabaster text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 cursor-pointer shadow-sm"
          >
            <span>Reserve Sanctuary Visit</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

        </div>
      </section>

    </div>
  );
}
