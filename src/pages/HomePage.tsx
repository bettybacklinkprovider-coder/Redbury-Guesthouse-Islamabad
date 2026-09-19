import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Bed, 
  Sparkles, 
  Wifi, 
  Wind, 
  Car, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Navigation,
  Image as ImageIcon
} from 'lucide-react';
import { REDBURY_INFO } from '../types';
import { ROOMS_DATA, FACILITIES_DATA, GALLERY_DATA } from '../data/guesthouseData';
import { CrestLogo } from '../components/CrestLogo';

export const HomePage: React.FC = () => {
  // Facility icon selector helper
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed': return <Bed className="w-6 h-6 text-[#8B1E2B]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#8B1E2B]" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-[#8B1E2B]" />;
      case 'Wind': return <Wind className="w-6 h-6 text-[#8B1E2B]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#8B1E2B]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#8B1E2B]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#8B1E2B]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#8B1E2B]" />;
      default: return <Sparkles className="w-6 h-6 text-[#8B1E2B]" />;
    }
  };

  const previewGallery = GALLERY_DATA.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/1200x/c0/35/ba/c035ba4d9cff7f244c8fcdf2d92f8866.jpg"
            alt="Redbury Guesthouse Islamabad Exterior & Ambience"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center space-y-6 sm:space-y-8">
          
          {/* Royal Crest Emblem Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-400/40 shadow-2xl ring-4 ring-white/10">
              <CrestLogo size="xl" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium tracking-wide">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Sector G-13/1, Islamabad, Pakistan</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Welcome to <span className="text-amber-100">Redbury Guesthouse</span> Islamabad
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed"
          >
            A comfortable and peaceful stay in the heart of Islamabad.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-base font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={REDBURY_INFO.tel}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-semibold rounded-2xl transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 text-amber-300" />
              <span>Call Now: {REDBURY_INFO.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-70">
          <span className="text-[10px] text-slate-300 uppercase tracking-widest font-medium">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1">
            <div className="w-1.5 h-1.5 bg-amber-200 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT REDBURY GUESTHOUSE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
                  alt="Redbury Guesthouse Welcoming Environment"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#8B1E2B] text-white p-6 rounded-2xl shadow-xl max-w-xs border border-amber-900/40 hidden sm:block">
                <p className="font-serif-heading text-xl font-bold">Your Home in Islamabad</p>
                <p className="text-xs text-stone-200 mt-1">Peaceful residential setting in Sector G-13/1 with round-the-clock guest support.</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3.5 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
                About Redbury Guesthouse
              </div>
              
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Warm Hospitality & Serene Living in Islamabad
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Redbury Guesthouse provides refined and accessible accommodation tailored for guests seeking peace, privacy, and convenience in Islamabad. Situated in Sector G-13/1 on Main Double Road, our guesthouse offers standard-setting cleanliness and attentive care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Comfortable & spacious rooms',
                  'Clean and peaceful environment',
                  'Convenient G-13/1 location',
                  'Friendly & attentive guest care',
                  'Ideal for families & visitors',
                  'Suitable for business travelers'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B1E2B] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-sm font-semibold rounded-xl shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Plan Your Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={REDBURY_INFO.tel}
                  className="px-6 py-3 border border-stone-300 hover:border-slate-800 text-slate-800 text-sm font-semibold rounded-xl transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
              Accommodation Options
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-slate-900">
              Rooms & Accommodation
            </h2>
            <p className="text-slate-600 text-base">
              Thoughtfully arranged rooms equipped with cozy beds, air conditioning, en-suite facilities, and daily maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ROOMS_DATA.map((room) => (
              <div 
                key={room.id} 
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                    {room.bedInfo}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif-heading text-2xl font-bold text-slate-900 group-hover:text-[#8B1E2B] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {room.description}
                    </p>

                    {/* Facilities badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {room.facilities.slice(0, 4).map((f, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-stone-100 text-slate-700 rounded-md font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">
                      {room.capacity || 'Comfortable stay'}
                    </span>
                    <Link
                      to="/rooms"
                      className="px-5 py-2.5 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>View Rooms</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-2xl shadow transition-all"
            >
              <span>Explore All Rooms & Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4 — FACILITIES & SERVICES */}
      <section className="py-20 bg-white border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
              Guest Amenities
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-slate-900">
              Facilities & Services
            </h2>
            <p className="text-slate-600 text-base">
              Every detail is prioritized to ensure peace of mind, physical comfort, and effortless stay management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.map((fac) => (
              <div 
                key={fac.id}
                className="bg-[#FAFAF7] p-6 rounded-2xl border border-stone-200/70 hover:border-[#8B1E2B]/40 hover:bg-white hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {fac.imageUrl ? (
                    <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-100 border border-stone-200">
                      <img
                        src={fac.imageUrl}
                        alt={fac.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                        {getFacilityIcon(fac.iconName)}
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-[#FDF6F6] flex items-center justify-center">
                      {getFacilityIcon(fac.iconName)}
                    </div>
                  )}

                  <h3 className="font-serif-heading text-xl font-bold text-slate-900">
                    {fac.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — GALLERY PREVIEW */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
            <div className="space-y-3">
              <span className="px-3.5 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
                Photo Gallery
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-slate-900">
                Gallery Preview
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Take a glance at our guest rooms, interior spaces, common lounge, and nearby Islamabad scenery.
              </p>
            </div>

            <Link
              to="/gallery"
              className="px-6 py-3 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-sm font-semibold rounded-xl shadow-sm transition-all inline-flex items-center gap-2 shrink-0 self-start md:self-auto"
            >
              <ImageIcon className="w-4 h-4" />
              <span>View Full Gallery</span>
            </Link>
          </div>

          {/* Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item) => (
              <div 
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-200 shadow-sm aspect-4/3 border border-stone-200"
              >
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#8B1E2B] rounded-full inline-block">
                    {item.category}
                  </span>
                  <p className="text-sm font-medium leading-snug">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — LOCATION & BOOKING CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left CTA Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 border border-white/20 text-amber-200 text-xs font-semibold rounded-full uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
                <span>G-13/1, Islamabad</span>
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white leading-tight">
                Plan Your Stay in Islamabad
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                We welcome you to experience comfort, privacy, and peaceful hospitality at Redbury Guesthouse. Contact our team directly to verify room availability or make an inquiry.
              </p>

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Guesthouse Address
                </span>
                <p className="text-sm font-medium text-slate-200">
                  {REDBURY_INFO.address}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={REDBURY_INFO.tel}
                  className="px-6 py-3.5 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-sm font-semibold rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 bg-white text-slate-900 hover:bg-stone-100 text-sm font-semibold rounded-xl transition-all inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#8B1E2B]" />
                  <span>Book Your Stay</span>
                </Link>

                <a
                  href={REDBURY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-stone-200 text-sm font-semibold rounded-xl border border-slate-700 transition-all inline-flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Map Placeholder Embed */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800 p-2 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900">
                  <iframe
                    title="Redbury Guesthouse Islamabad Location Map"
                    src={REDBURY_INFO.mapEmbedUrl}
                    className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    allowFullScreen
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/90 text-white px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-medium flex items-center gap-2 shadow-md">
                    <MapPin className="w-4 h-4 text-[#8B1E2B]" />
                    <span>Redbury Guesthouse • G-13/1</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
