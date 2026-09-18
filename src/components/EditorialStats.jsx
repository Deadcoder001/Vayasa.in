import React from 'react';
import RevealText from './RevealText';

const stats = [
  {
    value: '100%',
    label: 'Wild-Harvested',
    desc: 'Botanical extracts sourced directly from pristine Himalayan foothills & organic Assam estates.'
  },
  {
    value: '24+',
    label: 'Bespoke Rituals',
    desc: 'Curated therapeutic modalities combining ancient Ayurvedic secrets and modern hydrotherapy.'
  },
  {
    value: '4.95',
    label: 'Guest Rating',
    desc: 'Exemplary ratings across global wellness guides and luxury hospitality awards.'
  },
  {
    value: 'No. 1',
    label: 'Premier Spa in Assam',
    desc: 'Celebrated as Guwahati’s foremost luxury spa destination for holistic rejuvenation and peaceful seclusion.'
  }
];

export default function EditorialStats() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-20 md:py-28 flex justify-center bg-alabaster border-y border-gray-300/40">
      <div className="w-full max-w-[1920px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-0 sm:divide-x divide-gray-300/40">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-start ${i === 0 ? 'sm:pr-8 lg:pr-10' : 'sm:px-8 lg:px-10'}`}>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2 font-light">
                0{i + 1} / METRICS
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-charcoal my-2 tracking-tight">
                <RevealText delay={i * 0.1}>{stat.value}</RevealText>
              </div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-charcoal mb-3">
                {stat.label}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
