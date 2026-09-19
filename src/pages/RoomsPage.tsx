import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bed, 
  Sparkles, 
  Wifi, 
  Wind, 
  Car, 
  Clock, 
  Users, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { REDBURY_INFO } from '../types';
import { ROOMS_DATA, FACILITIES_DATA, WHY_CHOOSE_US } from '../data/guesthouseData';

export const RoomsPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1600"
            alt="Redbury Guesthouse Rooms Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-3.5 py-1 bg-white/10 border border-white/20 text-amber-200 text-xs font-semibold rounded-full uppercase tracking-wider">
            Comfortable Accommodations
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold">
            Rooms & Facilities
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Discover clean, quiet, and well-appointed rooms designed for a relaxing stay in Islamabad.
          </p>
        </div>
      </section>

      {/* ROOMS DETAILED SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
            Our Accommodations
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-slate-900">
            Available Guest Rooms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Each room is regularly maintained and prepared with fresh linens, temperature control, and modern amenities.
          </p>
        </div>

        <div className="space-y-12">
          {ROOMS_DATA.map((room, index) => (
            <div 
              key={room.id}
              className={`bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Image side */}
              <div className="lg:w-1/2 relative min-h-[320px] bg-slate-100">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {room.bedInfo}
                </div>
              </div>

              {/* Detail side */}
              <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-heading text-3xl font-bold text-slate-900">
                      {room.name}
                    </h3>
                    {room.capacity && (
                      <span className="text-xs px-3 py-1 bg-amber-50 text-amber-900 font-semibold rounded-full border border-amber-200">
                        {room.capacity}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {room.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider block mb-2">
                      In-Room Facilities
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {room.facilities.map((fac, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#8B1E2B] shrink-0" />
                          <span>{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-stone-500">
                    Direct inquiry & instant room booking support.
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire / Book Room</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* DETAILED FACILITIES SECTION */}
      <section className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
              Comprehensive Amenities
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-slate-900">
              Guesthouse Facilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Designed for hassle-free living whether visiting for business, holiday, or family travel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.map((fac) => (
              <div 
                key={fac.id}
                className="bg-[#FAFAF7] p-6 rounded-2xl border border-stone-200/80 hover:bg-white hover:border-[#8B1E2B]/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
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

                  <h3 className="font-serif-heading text-lg font-bold text-slate-900">
                    {fac.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY STAY WITH US SECTION */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
              Guest Value
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-slate-900">
              Why Stay With Us
            </h2>
            <p className="text-slate-600 text-sm">
              Discover what makes Redbury Guesthouse a trusted choice in Sector G-13/1, Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="py-16 bg-[#8B1E2B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold">
            Contact Us for Booking
          </h2>
          <p className="text-stone-200 text-base max-w-2xl mx-auto font-light">
            Planning a trip to Islamabad? Get in touch with our front desk to check room availability and secure your reservation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 hover:bg-stone-100 font-semibold rounded-xl transition-all shadow text-sm"
            >
              Book Your Stay
            </Link>
            <a
              href={REDBURY_INFO.tel}
              className="w-full sm:w-auto px-8 py-3.5 border border-white/40 hover:bg-white/10 text-white font-semibold rounded-xl transition-all text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +92 333 7279994</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
