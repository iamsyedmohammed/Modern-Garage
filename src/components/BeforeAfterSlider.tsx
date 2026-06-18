'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, ChevronsLeftRight } from 'lucide-react'

const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(position)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="py-24 bg-grayCustom-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Headlight Restoration
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
            Interactive <span className="text-primary italic">Before & After</span>
          </h3>
          <p className="text-lg text-grayCustom-text max-w-2xl mx-auto">
            Drag the slider to see our restoration service bring dull, yellowed headlights back to crystal-clear factory condition.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div 
          ref={containerRef}
          className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden select-none shadow-2xl border border-gray-200 cursor-ew-resize bg-gray-100"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/headlight-after-aligned.jpg"
              alt="Headlight After Restoration"
              fill
              className="object-cover pointer-events-none"
              priority
            />
            {/* Label After */}
            <div 
              className="absolute top-4 right-6 bg-primary/95 backdrop-blur-sm text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-20 transition-opacity duration-200"
              style={{ opacity: sliderPosition > 85 ? 0 : 1 }}
            >
              After
            </div>
          </div>

          {/* Before Image (Foreground sliding div) */}
          <div 
            className="absolute inset-0 h-full overflow-hidden transition-all duration-75 ease-out z-10 animate-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-[90vw] max-w-4xl h-full aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/images/headlight-before-aligned.jpg"
                alt="Headlight Before Restoration"
                fill
                className="object-cover pointer-events-none"
                priority
              />
              {/* Label Before */}
              <div 
                className="absolute top-4 left-6 bg-black/60 backdrop-blur-sm text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-20 transition-opacity duration-200"
                style={{ opacity: sliderPosition < 15 ? 0 : 1 }}
              >
                Before
              </div>
            </div>
          </div>

          {/* Divider Bar */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 transition-all duration-75 ease-out shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-primary/20 z-40 transition-transform active:scale-90 select-none">
              <ChevronsLeftRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterSlider
