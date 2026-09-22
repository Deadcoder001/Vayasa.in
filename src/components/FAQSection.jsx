import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from './RevealText';
import { Plus } from 'lucide-react';

const faqItems = [
  {
    id: '01',
    question: 'Why is Vayasa recognized as the best luxury spa in Guwahati?',
    answer:
      'Vayasa is celebrated as the premier luxury spa in Guwahati, Assam, offering an authentic convergence of sacred Eastern healing wisdom and modern restorative science. Our sanctuary features private pavilion suites, geothermal hydrotherapy vitality pools, Tibetan vibrational sound healing, and wild-harvested Himalayan botanicals. Every ritual is conducted by certified master therapists dedicated to deeply personalized care.',
  },
  {
    id: '02',
    question: 'What therapeutic treatments and body massages are offered?',
    answer:
      'Our curated menu includes Deep Tissue Musculoskeletal Restoration, wild-harvested Assam camellia facials, contrast geothermal plunge hydrotherapy, ancient Tibetan acoustic sound baths, and traditional Ayurvedic dosha-balancing massage. Each treatment is tailored to alleviate chronic tension, promote lymphatic flow, and awaken biological vitality.',
  },
  {
    id: '03',
    question: 'Are private couple spa packages available at Vayasa Guwahati?',
    answer:
      'Yes. Vayasa offers exclusive couples spa journeys in private pavilion suites. Our signature Shared Serenity experience features side-by-side aromatherapy massages, private herbal steam showers, personalized essential oil blending, and organic Himalayan tea service in complete seclusion.',
  },
  {
    id: '04',
    question: 'How does the thermal hydrotherapy and contrast plunge work?',
    answer:
      'As the premier hydrothermal wellness destination in Northeast India, Vayasa features 38°C geothermal mineral vitality pools paired with 12°C glacial contrast plunge baths and eucalyptus herbal steam sanctuaries. This contrast circuit accelerates muscle recovery, stimulates circulation, and induces deep autonomic relaxation.',
  },
  {
    id: '05',
    question: 'How do I book an appointment or private suite?',
    answer:
      'Appointments can be booked seamlessly through our online concierge or by contacting our guest relations team directly at 08062757161 or info@vayasaspa.com. We are open all days from 10:00 AM to 09:00 PM.',

  },
  {
    id: '06',
    question: 'What makes Vayasa’s organic botanical skincare unique in Assam?',
    answer:
      'All botanical oils, serums, and scrubs used in our treatments are 100% organic, non-toxic, and small-batch cold-pressed from wild-harvested Himalayan flora and organic Assam tea estates. We strictly avoid artificial fragrances, parabens, and synthetic additives to preserve bioactive cellular nutrients.',
  },
  {
    id: '07',
    question: 'Where is Vayasa located and is private parking available?',
    answer:
      'Vayasa is situated at 3rd Floor, Pee Tee Tower, Opposite to Indian Oil Petrol Pump, G.S. Road, South Sarania, Ulubari, Guwahati – 781007, Assam. Dedicated private valet parking and elevator access ensure complete privacy and effortless arrival.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Structured JSON-LD Schema for Google & AI Search Engines (GEO & Local SEO)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'DaySpa',
    name: 'Vayasa Luxury Spa & Salon Guwahati',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200',
    '@id': 'https://vayasaspa.com',
    url: 'https://vayasaspa.com',
    telephone: '08062757161',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3rd Floor, Pee Tee Tower, Opposite to Indian Oil Petrol Pump, G.S. Road, South Sarania, Ulubari',
      addressLocality: 'Guwahati',
      addressRegion: 'Assam',
      postalCode: '781007',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.1732,
      longitude: 91.7588,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '21:00',
      },
    ],
  };

  return (
    <section
      id="faq-section"
      className="w-full px-4 sm:px-6 md:px-12 py-20 md:py-32 flex justify-center bg-alabaster border-t border-gray-200/70"
    >
      {/* Invisible SEO & GEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="w-full max-w-[1920px] flex flex-col items-start">

        {/* Section Header: Minimal, Clean, Left-aligned */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-charcoal/70" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal tracking-tight leading-[1.1]">
              <RevealText>Clarity & Guidance</RevealText>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 font-light max-w-xl leading-relaxed lg:pb-1 text-left">
            Answers to common questions regarding treatments, private pavilion suites, and reservations at Vayasa Spa Guwahati.
          </p>
        </div>

        {/* Minimal Editorial Accordion List */}
        <div className="w-full divide-y divide-gray-200/80 border-y border-gray-200/80">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`transition-colors duration-300 ${
                  isOpen ? 'bg-white/40' : 'hover:bg-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline space-x-4 sm:space-x-8 pr-4">
                    <span className="text-xs sm:text-sm font-mono tracking-widest text-gray-400 shrink-0">
                      {item.id}
                    </span>
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-serif tracking-tight transition-colors duration-300 ${
                        isOpen
                          ? 'text-charcoal font-normal'
                          : 'text-charcoal/80 group-hover:text-charcoal font-light'
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Smooth Rotating Minimal Indicator */}
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300/70 flex items-center justify-center text-charcoal transition-colors duration-300 group-hover:border-charcoal">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[1.5]" />
                    </motion.div>
                  </div>
                </button>

                {/* Animated Expandable Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 sm:pb-9 pl-8 sm:pl-16 pr-4 sm:pr-12 max-w-4xl">
                        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
