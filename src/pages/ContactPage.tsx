import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Clock, 
  Navigation,
  MessageSquare,
  User,
  Mail,
  Users,
  Hotel
} from 'lucide-react';
import { REDBURY_INFO, BookingInquiry } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingInquiry>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1 Guest',
    roomPreference: 'Deluxe Room',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please fill in your name and phone number so we can confirm your inquiry.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: '1 Guest',
      roomPreference: 'Deluxe Room',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-3.5 py-1 bg-white/10 border border-white/20 text-amber-200 text-xs font-semibold rounded-full uppercase tracking-wider">
            Direct Reservations & Support
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold">
            Contact & Booking
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Plan your stay at Redbury Guesthouse Islamabad or ask any question about room availability and accommodations.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <span className="px-3 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
                Guesthouse Details
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-slate-900 mt-2">
                Redbury Guesthouse
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                We look forward to welcoming you to Sector G-13/1, Islamabad. Reach out by phone for instant assistance or submit an online booking inquiry below.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDF6F6] text-[#8B1E2B] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={REDBURY_INFO.tel}
                    className="text-lg font-bold text-slate-900 hover:text-[#8B1E2B] transition-colors mt-0.5 inline-block"
                  >
                    {REDBURY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Available 24/7 for booking confirmations.
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDF6F6] text-[#8B1E2B] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block">
                    Address
                  </span>
                  <p className="text-sm font-semibold text-slate-900 mt-1 leading-snug">
                    {REDBURY_INFO.address}
                  </p>
                  <a
                    href={REDBURY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#8B1E2B] font-semibold hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Check-In Info */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDF6F6] text-[#8B1E2B] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block">
                    Guest Support Hours
                  </span>
                  <p className="text-sm font-semibold text-slate-900 mt-1">
                    24/7 Front Desk Assistance
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Flexible check-in options on prior confirmation.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2 border-b border-stone-100 pb-4">
                    <h3 className="font-serif-heading text-2xl font-bold text-slate-900">
                      Booking Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out your stay preferences below. Our management will review availability and contact you directly.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#8B1E2B]" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ali"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#8B1E2B]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#8B1E2B]" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#8B1E2B]"
                      />
                    </div>
                  </div>

                  {/* Email & Room Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#8B1E2B]" />
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. user@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#8B1E2B]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Hotel className="w-3.5 h-3.5 text-[#8B1E2B]" />
                        <span>Room Preference</span>
                      </label>
                      <select
                        value={formData.roomPreference}
                        onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#8B1E2B]"
                      >
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Double Room">Double Room</option>
                        <option value="Family Room">Family Room</option>
                        <option value="Comfortable Guest Room">Comfortable Guest Room</option>
                        <option value="Not Sure / Help Me Choose">Not Sure / Help Me Choose</option>
                      </select>
                    </div>
                  </div>

                  {/* Dates & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#8B1E2B]" />
                        <span>Check-in Date</span>
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full px-3 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#8B1E2B]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#8B1E2B]" />
                        <span>Check-out Date</span>
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full px-3 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#8B1E2B]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#8B1E2B]" />
                        <span>Number of Guests</span>
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#8B1E2B]"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4+ Guests / Family">4+ Guests / Family</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#8B1E2B]" />
                      <span>Message / Special Requests</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Mention any special requirements, estimated arrival time, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#8B1E2B]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#8B1E2B] hover:bg-[#6E1521] text-white font-semibold text-base rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <p className="text-[11px] text-stone-400 text-center">
                    Note: Your inquiry will be sent directly to Redbury Guesthouse management. No immediate payment is required online.
                  </p>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif-heading text-3xl font-bold text-slate-900">
                      Inquiry Received!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your stay inquiry for <strong className="text-slate-900">{formData.roomPreference}</strong> has been logged.
                    </p>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                    <div className="flex justify-between border-b border-stone-200 pb-1.5">
                      <span className="text-slate-500">Phone Contact:</span>
                      <span className="font-semibold">{formData.phone}</span>
                    </div>
                    {formData.checkIn && (
                      <div className="flex justify-between border-b border-stone-200 pb-1.5">
                        <span className="text-slate-500">Check-In:</span>
                        <span className="font-semibold">{formData.checkIn}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500">Guests:</span>
                      <span className="font-semibold">{formData.guests}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500">
                    Our team will reach out shortly at <strong>{formData.phone}</strong> or call you back from <strong>+92 333 7279994</strong>.
                  </p>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* MAP SECTION */}
        <section className="mt-20 pt-16 border-t border-stone-200">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="px-3.5 py-1 bg-[#FDF6F6] text-[#8B1E2B] font-semibold text-xs rounded-full uppercase tracking-wider">
              Location Map
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-slate-900">
              Redbury Guesthouse Map
            </h2>
            <p className="text-slate-600 text-sm">
              Located on Main Double Road, G-13/1, G-13, Islamabad, 44220, Pakistan.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-md h-96 relative bg-slate-200">
            <iframe
              title="Redbury Guesthouse Interactive Map"
              src={REDBURY_INFO.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="mt-16 bg-slate-900 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6">
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold">
            Have Questions About Your Stay?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Need urgent confirmation or have customized guest inquiries? Call our direct line for instant support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={REDBURY_INFO.tel}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#8B1E2B] hover:bg-[#6E1521] text-white text-sm font-semibold rounded-xl transition-all shadow flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +92 333 7279994</span>
            </a>

            <a
              href={REDBURY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-stone-200 text-sm font-semibold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-amber-300" />
              <span>Get Directions</span>
            </a>
          </div>
        </section>

      </main>

    </div>
  );
};
