import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { REDBURY_INFO } from '../types';
import { CrestLogo } from './CrestLogo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Facilities', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact & Booking', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top Bar with quick contact info */}
      <div className="bg-[#8B1E2B] text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2 text-stone-200">
            <span>Welcome to Redbury Guesthouse Islamabad</span>
            <span className="hidden md:inline">• G-13/1 Main Double Road</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={REDBURY_INFO.tel} 
              className="flex items-center gap-1.5 font-medium hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{REDBURY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <CrestLogo size="md" className="ring-2 ring-[#8B1E2B]/20 group-hover:ring-[#8B1E2B]/50 transition-all shadow-md" />
            <div className="flex flex-col">
              <span className="font-serif-heading text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#8B1E2B] transition-colors">
                Redbury Guesthouse
              </span>
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-medium">
                Islamabad • Pakistan
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                    ${isActive 
                      ? 'text-[#8B1E2B] bg-[#FDF6F6] font-bold' 
                      : 'text-slate-700 hover:text-[#8B1E2B] hover:bg-stone-100/70'}
                  `}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Actions: Phone & Book Now button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={REDBURY_INFO.tel}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#8B1E2B] flex items-center gap-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8B1E2B]" />
              <span>Call Now</span>
            </a>
            
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="sm:hidden px-3 py-1.5 bg-[#8B1E2B] text-white text-xs font-semibold rounded-lg"
            >
              Book Now
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#8B1E2B] hover:bg-stone-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => `
                  px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between
                  ${isActive 
                    ? 'text-[#8B1E2B] bg-[#FDF6F6] font-bold' 
                    : 'text-slate-800 hover:bg-stone-100'}
                `}
              >
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={REDBURY_INFO.tel}
              className="w-full py-3 px-4 border border-stone-300 rounded-xl text-slate-800 font-semibold text-center flex items-center justify-center gap-2 hover:bg-stone-50"
            >
              <Phone className="w-4 h-4 text-[#8B1E2B]" />
              <span>Call +92 333 7279994</span>
            </a>
            
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full py-3 px-4 bg-[#8B1E2B] text-white rounded-xl font-semibold text-center shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
