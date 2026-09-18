import React, { createContext, useContext, useState } from 'react';

const EnquiryContext = createContext({
  isEnquiryOpen: false,
  selectedTreatment: '',
  openEnquiry: () => {},
  closeEnquiry: () => {},
});

export function EnquiryProvider({ children }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const openEnquiry = (treatmentName = '') => {
    setSelectedTreatment(treatmentName);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <EnquiryContext.Provider
      value={{
        isEnquiryOpen,
        selectedTreatment,
        openEnquiry,
        closeEnquiry,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
