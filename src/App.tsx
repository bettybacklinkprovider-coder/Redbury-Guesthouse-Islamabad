import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { Phone } from 'lucide-react';
import { REDBURY_INFO } from './types';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAFAF7]">
        
        {/* Sticky Global Navigation */}
        <Header />

        {/* Page Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Floating Mobile Quick Call Button */}
        <a
          href={REDBURY_INFO.tel}
          className="fixed bottom-6 right-6 z-40 bg-[#8B1E2B] hover:bg-[#6E1521] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 sm:hidden border border-amber-300/30"
          aria-label="Call Redbury Guesthouse"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </a>

      </div>
    </BrowserRouter>
  );
}
