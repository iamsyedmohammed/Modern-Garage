'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: any[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const validImages = images?.filter((img) => img && img.asset) || []
  const [activeImage, setActiveImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false)
      } else if (e.key === 'ArrowRight') {
        setActiveImage((prev) => (prev + 1) % validImages.length)
      } else if (e.key === 'ArrowLeft') {
        setActiveImage((prev) => (prev - 1 + validImages.length) % validImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent background scrolling when lightbox is open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isLightboxOpen, validImages.length])

  if (validImages.length === 0) {
    return (
      <div className="aspect-[16/10] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
        No images available
      </div>
    )
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveImage((prev) => (prev - 1 + validImages.length) % validImages.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveImage((prev) => (prev + 1) % validImages.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div 
        onClick={() => setIsLightboxOpen(true)}
        className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-grayCustom-border shadow-sm cursor-zoom-in group"
      >
        <Image
          src={urlForImage(validImages[activeImage]).url()}
          alt="Vehicle visual"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-black/60 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
            Click to expand
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      {validImages.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                activeImage === idx ? 'border-primary shadow-md' : 'border-transparent hover:border-grayCustom-border'
              }`}
            >
              <Image
                src={urlForImage(img).url()}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 z-50 text-white p-2.5 bg-black/60 hover:bg-black/80 rounded-full border border-white/10 transition-all shadow-lg"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {validImages.length > 1 && (
            <button 
              className="absolute left-4 sm:left-8 z-50 text-white p-3 bg-black/60 hover:bg-black/80 rounded-full border border-white/10 transition-all shadow-lg"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Lightbox Image */}
          <div className="relative w-full max-w-[90vw] h-[75vh] flex items-center justify-center z-10">
            <Image
              src={urlForImage(validImages[activeImage]).url()}
              alt={`Fullscreen Vehicle visual ${activeImage + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next Button */}
          {validImages.length > 1 && (
            <button 
              className="absolute right-4 sm:right-8 z-50 text-white p-3 bg-black/60 hover:bg-black/80 rounded-full border border-white/10 transition-all shadow-lg"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Indicator/Counter */}
          <div className="absolute bottom-6 bg-black/60 text-white/90 text-sm font-bold px-4 py-1.5 rounded-full border border-white/10">
            {activeImage + 1} / {validImages.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
