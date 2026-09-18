import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import FloatingWidgets from './components/FloatingWidgets';
import AudioEntryGate from './components/AudioEntryGate';
import MobileDock from './components/MobileDock';
import EnquiryDrawer from './components/EnquiryDrawer';
import { AudioProvider } from './context/AudioContext';
import { EnquiryProvider } from './context/EnquiryContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    // Remove dark mode class and storage
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  return (
    <AudioProvider>
      <EnquiryProvider>
        <Router>
          <ScrollToTop />
          <CustomCursor />
          <AudioEntryGate />
          <SmoothScroll>
            <div className="min-h-screen bg-alabaster font-sans text-charcoal flex flex-col">
              <Navbar />
              
              <main className="flex-grow relative z-10 bg-alabaster">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>

              <Footer />
            </div>
            <FloatingWidgets />
            <MobileDock />
            <EnquiryDrawer />
          </SmoothScroll>
        </Router>
      </EnquiryProvider>
    </AudioProvider>
  );
}

export default App;

