'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Fuel, Gauge, Settings2, ArrowRight } from 'lucide-react'
import { RentalVehicle } from '@/types/rental'
import { urlForImage } from '@/sanity/lib/image'

interface RentalCardProps {
  rental: RentalVehicle
}

const RentalCard: React.FC<RentalCardProps> = ({ rental }) => {
  const {
    title,
    slug,
    pricePerDay,
    mileage,
    fuelType,
    transmission,
    images,
    status
  } = rental

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(pricePerDay)

  const formattedMileage = new Intl.NumberFormat('en-US').format(mileage)

  return (
    <div className="group relative bg-white border border-grayCustom-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {images && images.length > 0 ? (
          <Image
            src={urlForImage(images[0]).url()}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-grayCustom-light flex items-center justify-center">
            <span className="text-grayCustom-text text-sm italic">No image available</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {rental.featured && (
            <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-wider rounded-md shadow-lg flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Featured
            </span>
          )}
          {status === 'Rented' ? (
            <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
              Rented
            </span>
          ) : status === 'Maintenance' ? (
            <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
              Maintenance
            </span>
          ) : (
            <span className="px-3 py-1 bg-green-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
              Available
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-black mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-2xl font-black text-primary mb-4">
          {formattedPrice} <span className="text-xs text-gray-500 font-bold uppercase">/ Day</span>
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm text-grayCustom-text">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-primary" />
            <span>{formattedMileage} mi</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-primary" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-primary" />
            <span>{transmission}</span>
          </div>
        </div>

        {/* Action */}
        <div className="mt-auto pt-2">
          <Link 
            href={`/rentals/${slug.current}`}
            className="flex items-center justify-center gap-2 w-full bg-primary text-white font-bold py-3 rounded-xl transition-all hover:bg-red-700 active:scale-[0.98]"
          >
            <span>Rent Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RentalCard
