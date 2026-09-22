import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

const rituals = [
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
  'Hair Straightening',
  'Keratin Treatment',
  'Manicures',
  'Pedicures',
  'Bridal Makeup',
  'Facial Treatment',
  'Waxing',
  'D-TAN Pack',
];

const timeSlots = ['Morning', 'Afternoon', 'Evening'];

export default function EnquiryDrawer() {
  const { isEnquiryOpen, selectedTreatment, closeEnquiry } = useEnquiry();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning',
    treatment: rituals[0],
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: selectedTreatment }));
    }
  }, [selectedTreatment, isEnquiryOpen]);

  // Handle ESC key press & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isEnquiryOpen) closeEnquiry();
    };

    if (isEnquiryOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEnquiryOpen, closeEnquiry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: '',
      timeSlot: 'Morning',
      treatment: rituals[0],
      notes: '',
    });
    closeEnquiry();
  };

  return (
    <AnimatePresence>
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-[9990] flex items-end justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeEnquiry}
            className="absolute inset-0 bg-black/30 backdrop-blur-xs cursor-pointer"
          />

          {/* Minimal Bottom Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
            className="relative z-10 w-full max-w-lg bg-alabaster text-charcoal rounded-t-3xl shadow-xl border-t border-charcoal/10 flex flex-col overflow-hidden max-h-[90vh]"
          >
            {/* Minimal Top Bar */}
            <div className="pt-4 pb-2 px-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono">
                  Book Treatment
                </span>
                <h3 className="text-xl font-serif font-light text-charcoal">
                  Book an Experience
                </h3>

              </div>
              <button
                onClick={closeEnquiry}
                className="w-8 h-8 rounded-full flex items-center justify-center text-charcoal/60 hover:text-charcoal hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 pt-2 overflow-y-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {/* Horizontal Ritual Selector */}
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono block mb-2">
                      Select Ritual
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {rituals.map((r) => {
                        const isSelected = formData.treatment === r;
                        return (
                          <button
                            type="button"
                            key={r}
                            onClick={() => setFormData({ ...formData, treatment: r })}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-light whitespace-nowrap transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-charcoal text-alabaster shadow-xs'
                                : 'bg-black/[0.03] text-charcoal/70 hover:text-charcoal hover:bg-black/[0.06]'
                            }`}
                          >
                            {r}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Clean Underline Input Fields */}
                  <div className="space-y-4 pt-1">
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
                        placeholder="Phone / WhatsApp Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-charcoal/15 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-charcoal transition-colors font-light"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono block mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-transparent border-b border-charcoal/15 py-2 text-xs text-charcoal focus:outline-none focus:border-charcoal transition-colors font-light"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono block mb-1">
                          Time Slot
                        </label>
                        <div className="flex gap-1 pt-1">
                          {timeSlots.map((slot) => (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setFormData({ ...formData, timeSlot: slot })}
                              className={`flex-1 py-1 text-[11px] rounded-md transition-colors cursor-pointer ${
                                formData.timeSlot === slot
                                  ? 'bg-charcoal text-alabaster font-normal'
                                  : 'bg-black/[0.03] text-charcoal/70 hover:text-charcoal'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Notes or preferences (optional)"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-transparent border-b border-charcoal/15 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-charcoal transition-colors font-light"
                      />
                    </div>
                  </div>

                  {/* Submit Action */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-light">
                      Guwahati, Assam
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center space-x-2 bg-charcoal hover:bg-black text-alabaster px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Confirm'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              ) : (
                /* Minimal Success */
                <div className="py-8 flex flex-col items-center text-center space-y-3">
                  <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal mb-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-xl font-serif font-light text-charcoal">
                    Enquiry Received
                  </h4>
                  <p className="text-xs text-gray-500 font-light max-w-xs leading-relaxed">
                    Thank you, <span className="text-charcoal font-medium">{formData.name}</span>. Our concierge will contact you on <span className="text-charcoal font-medium">{formData.phone}</span> shortly to confirm your booking for <span className="text-charcoal font-medium">{formData.treatment}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2 rounded-full border border-charcoal/20 text-xs uppercase tracking-wider font-light text-charcoal hover:bg-black/5 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
