import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/guesthouseData';
import { GalleryCategory, GalleryItem } from '../types';
import { LightboxModal } from '../components/LightboxModal';
import { Maximize2, Filter } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: GalleryCategory[] = [
    'All',
    'Rooms',
    'Bedrooms',
    'Guesthouse Interior',
    'Exterior',
    'Common Areas',
    'Islamabad / Nearby Views'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF7] pb-24">
      
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1600"
            alt="Redbury Guesthouse Gallery Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-3.5 py-1 bg-white/10 border border-white/20 text-amber-200 text-xs font-semibold rounded-full uppercase tracking-wider">
            Visual Experience
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold">
            Photo Gallery
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Explore our comfortable rooms, warm interior spaces, guesthouse exterior, and beautiful Islamabad surroundings.
          </p>
        </div>
      </section>

      {/* Main Gallery Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Category Filters */}
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-2xl border border-stone-200 shadow-2xs">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200
                    ${isActive 
                      ? 'bg-[#8B1E2B] text-white shadow-xs' 
                      : 'text-slate-700 hover:bg-stone-100 hover:text-[#8B1E2B]'}
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Count */}
        <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200/80 pb-3">
          <span>Showing {filteredItems.length} photos</span>
          <span>Click any photo to open full-screen lightbox</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-between p-5">
                
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#8B1E2B] text-white rounded-full">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view enlarged image
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
            <p className="text-slate-500 text-sm">No photos available in this category.</p>
          </div>
        )}

      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />

    </div>
  );
};
