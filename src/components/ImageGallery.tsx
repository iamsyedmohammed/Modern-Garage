'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

interface ImageGalleryProps {
  images: any[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[16/10] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
        No images available
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-grayCustom-border shadow-sm">
        <Image
          src={urlForImage(images[activeImage]).url()}
          alt="Vehicle visual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
          {images.map((img, idx) => (
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
    </div>
  )
}

export default ImageGallery
