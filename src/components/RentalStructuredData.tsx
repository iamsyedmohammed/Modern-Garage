import React from 'react'
import { RentalVehicle } from '@/types/rental'
import { urlForImage } from '@/sanity/lib/image'

interface StructuredDataProps {
  rental: RentalVehicle
}

const RentalStructuredData: React.FC<StructuredDataProps> = ({ rental }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: rental.title,
    description: rental.title + ' for rent at Modern Auto Garage NH',
    image: rental.images?.map((img) => urlForImage(img).url()),
    brand: {
      '@type': 'Brand',
      name: rental.brand,
    },
    model: rental.model,
    modelDate: rental.year,
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: rental.mileage,
      unitCode: 'SMI',
    },
    vehicleTransmission: rental.transmission,
    fuelType: rental.fuelType,
    offers: {
      '@type': 'Offer',
      price: rental.pricePerDay,
      priceCurrency: 'USD',
      description: 'Daily car rental rate',
      availability: `https://schema.org/${rental.status === 'Available' ? 'InStock' : 'OutOfStock'}`,
      seller: {
        '@type': 'AutoRental',
        name: 'Modern Auto Garage NH',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Manchester',
          addressRegion: 'NH',
          addressCountry: 'US',
        },
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default RentalStructuredData
