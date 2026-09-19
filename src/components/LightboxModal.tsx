import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 text-stone-300 hover:text-white bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors z-50"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {items.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors z-50 hidden sm:flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {items.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors z-50 hidden sm:flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image container */}
      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black border border-slate-800">
          <img
            src={item.imageUrl}
            alt={item.altText}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain mx-auto transition-all duration-300"
            loading="lazy"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white space-y-1 px-4">
          <span className="inline-block px-3 py-1 bg-[#8B1E2B] text-white text-xs font-medium rounded-full mb-1">
            {item.category}
          </span>
          <h3 className="text-lg font-semibold tracking-wide">{item.title}</h3>
          <p className="text-xs text-slate-400">
            Image {currentIndex + 1} of {items.length}
          </p>
        </div>
      </div>
    </div>
  );
};
