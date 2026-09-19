import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import { REDBURY_INFO } from '../types';
import { CrestLogo } from './CrestLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CrestLogo size="md" className="ring-2 ring-amber-400/40" />
              <div>
                <h2 className="font-serif-heading text-2xl font-bold text-white tracking-tight">
                  Redbury Guesthouse
                </h2>
                <p className="text-xs text-stone-400 tracking-wider uppercase">Islamabad, Pakistan</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A comfortable and peaceful guesthouse in the heart of Islamabad. Offering clean rooms, serene surroundings, and hospitable guest care for families, visitors, and business travelers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold tracking-wide border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Rooms & Facilities</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Contact & Booking</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold tracking-wide border-b border-slate-800 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#8B1E2B] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Direct Phone / Inquiry</span>
                  <a 
                    href={REDBURY_INFO.tel} 
                    className="text-white font-semibold hover:text-amber-300 transition-colors inline-block mt-0.5"
                  >
                    {REDBURY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8B1E2B] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Location</span>
                  <p className="text-slate-300 text-xs leading-snug mt-0.5">
                    {REDBURY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location Directions CTA */}
          <div className="space-y-4 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
            <h3 className="text-white text-base font-semibold flex items-center gap-2">
              <Navigation className="w-4 h-4 text-[#8B1E2B]" />
              <span>Visiting Us?</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Located on Main Double Road in Sector G-13/1, Islamabad with easy road connections across the twin cities.
            </p>
            <a
              href={REDBURY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-xs font-semibold rounded-xl transition-all shadow-sm group"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Redbury Guesthouse. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Islamabad, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
