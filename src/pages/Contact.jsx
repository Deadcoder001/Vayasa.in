import React, { useState } from 'react';
import RevealText from '../components/RevealText';
import { useEnquiry } from '../context/EnquiryContext';
import { ArrowUpRight, ArrowRight, Check, Navigation, Clock, Phone, MapPin, Mail } from 'lucide-react';

const serviceTopics = [
  'Aroma Massage',
  'Swedish Massage',
  'Deep Tissue Massage',
  'Thai Massage',
  'Heavenly Pleasure (4-Hand)',
  'Signature Massage',
  'Couples Massage',
  'Head - Palm Massage',
  'Foot Massage',
  'Facial Massage',
  'Hair & Keratin Services',
  'Manicures & Pedicures',
  'Bridal Makeup',
  'Facial & D-TAN Pack',
  'General Concierge',
];

export default function Contact() {
  const { openEnquiry } = useEnquiry();

  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: serviceTopics[0],
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="w-full bg-alabaster text-charcoal flex flex-col items-center pt-24 sm:pt-32">
      
      {/* 1. Header Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-16 md:py-24 flex justify-center border-b border-charcoal/10">
        <div className="w-full max-w-[1920px] flex flex-col items-start text-left">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light text-charcoal tracking-tight leading-[1.05] max-w-5xl mb-6">
            <RevealText>Connect with the Sanctuary</RevealText>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
            Our guest relations team in Guwahati is at your disposal to arrange private pavilion suites, bespoke treatments, and arrival details.
          </p>
        </div>
      </section>

      {/* 2. Main Interactive Grid: Interactive Map Location & Custom Form */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-16 md:py-24 flex justify-center border-b border-charcoal/10">
        <div className="w-full max-w-[1920px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Left Column: Full-Width Interactive Map & Coordinates */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-8 w-full">
            
            {/* Interactive Map with Cursor Preservation */}
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden bg-white/70 border border-charcoal/10 shadow-xs group cursor-pointer">
              <iframe
                title="Pee Tee Tower Ulubari Guwahati Location"
                src="https://maps.google.com/maps?q=Pee%20Tee%20Tower,%20Opposite%20to%20Indian%20Oil%20Petrol%20Pump,%20G.S.%20Road,%20South%20Sarania,%20Ulubari,%20Guwahati,%20Assam%20781007&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale-[0.75] contrast-[1.05] opacity-95 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                loading="lazy"
              />

              {/* Clickable Overlay to Preserve Custom Cursor & Open Google Maps */}
              <a
                href="https://maps.google.com/?q=Pee+Tee+Tower+GS+Road+Ulubari+Guwahati+Assam+781007"
                target="_blank"
                rel="noreferrer"
                aria-label="Open location in Google Maps"
                className="absolute inset-0 z-10 cursor-pointer"
              />

              {/* Open Directions Quick Action */}
              <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 pointer-events-none">
                <div className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-charcoal text-alabaster text-[10px] uppercase tracking-[0.2em] font-light shadow-sm">
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </div>
              </div>
            </div>

            {/* Exact Sanctuary Coordinates Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono mb-1.5 block">
                  Sanctuary Address
                </span>
                <h3 className="text-base sm:text-lg font-serif font-light text-charcoal mb-1 leading-snug">
                  3rd Floor, Pee Tee Tower
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Opposite to Indian Oil Petrol Pump, G.S. Road, South Sarania, Ulubari, Guwahati – 781007, Assam
                </p>
                <a
                  href="https://maps.google.com/?q=Pee+Tee+Tower+GS+Road+Ulubari+Guwahati+Assam+781007"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-light text-charcoal hover:text-gray-500 transition-colors border-b border-charcoal/30 pb-0.5 mt-2.5"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono mb-1.5 block">
                  Direct Line & Bookings
                </span>
                <a
                  href="tel:08062757161"
                  className="block text-xl font-serif font-light text-charcoal hover:text-gray-600 transition-colors mb-1 tracking-wide"
                >
                  08062757161
                </a>
                <p className="text-xs text-gray-500 font-light">
                  10:00 AM — 09:00 PM · All Days Open
                </p>
                <p className="text-xs text-gray-400 font-light mt-1">
                  Valet and private elevator access on premise
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono mb-1.5 block">
                  Correspondence
                </span>
                <a
                  href="mailto:info@vayasaspa.com"
                  className="block text-sm text-charcoal hover:text-gray-600 transition-colors"
                >
                  info@vayasaspa.com
                </a>
                <a
                  href="mailto:reservations@vayasaspa.com"
                  className="block text-xs text-gray-500 hover:text-charcoal transition-colors mt-0.5 font-light"
                >
                  reservations@vayasaspa.com
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono mb-1.5 block">
                  Reservations
                </span>
                <button
                  onClick={() => openEnquiry()}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-light text-charcoal hover:text-gray-500 transition-colors border-b border-charcoal/40 pb-1 cursor-pointer mt-0.5"
                >
                  <span>Open Reservation Drawer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Modern & Minimal Form */}
          <div className="lg:col-span-6 flex flex-col items-start text-left w-full">
            
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-charcoal mb-6">
              Direct Concierge Inquiry
            </h2>

            {!messageSent ? (
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                
                {/* Service / Topic Pill Selector */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono block mb-2.5">
                    Select Service / Treatment
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {serviceTopics.map((topic) => {
                      const isSelected = formData.topic === topic;
                      return (
                        <button
                          type="button"
                          key={topic}
                          onClick={() => setFormData({ ...formData, topic })}
                          className={`px-3 py-1.5 rounded-full text-xs font-light transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-charcoal text-alabaster shadow-xs'
                              : 'bg-black/[0.03] text-charcoal/70 hover:text-charcoal hover:bg-black/[0.06]'
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Underline Input Fields */}
                <div className="space-y-6 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-charcoal/15 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-charcoal transition-colors font-light"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-charcoal/15 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-charcoal transition-colors font-light"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-charcoal/15 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-charcoal transition-colors font-light"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      required
                      placeholder="How may our concierge assist your visit? *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-charcoal/15 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-charcoal transition-colors font-light resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] text-gray-400 font-light">
                    Guaranteed response within 2 hours · 10:00 AM — 09:00 PM
                  </span>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center space-x-2.5 bg-charcoal hover:bg-black text-alabaster px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <span>Transmit Message</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

              </form>
            ) : (
              /* Serene Confirmation State */
              <div className="py-12 flex flex-col items-start space-y-3">
                <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal mb-2">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-2xl font-serif text-charcoal font-light">
                  Message Transmitted
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light max-w-md leading-relaxed mb-6">
                  Thank you, <span className="text-charcoal font-medium">{formData.name}</span>. Your inquiry regarding <span className="text-charcoal font-medium">{formData.topic}</span> has been received by our guest relations team. We will reach back out to you at <span className="text-charcoal font-medium">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setMessageSent(false)}
                  className="px-6 py-2 rounded-full border border-charcoal/25 text-xs uppercase tracking-wider font-light text-charcoal hover:bg-black/5 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 3. Sanctuary Atmosphere Panoramic Photograph */}
      <section className="w-full px-4 sm:px-6 md:px-12 py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1920px]">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] border border-charcoal/10 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
              alt="Vayasa Spa Sanctuary Atmosphere"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
