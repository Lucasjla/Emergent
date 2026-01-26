import React, { useState } from 'react';
import { portfolioImages } from '../mock/data';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#800020] via-[#6B0F1A] to-[#2D0A0F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nosso Portfólio
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Uma seleção dos nossos melhores trabalhos em fotografia imobiliária
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#800020]/0 group-hover:bg-[#800020]/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver em tamanho completo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;