import React from 'react'
import { Vehicle } from '@/types/vehicle'
import { urlForImage } from '@/sanity/lib/image'

interface StructuredDataProps {
  vehicle: Vehicle
}

const VehicleStructuredData: React.FC<StructuredDataProps> = ({ vehicle }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: vehicle.title,
    description: vehicle.title + ' for sale at Modern Auto Garage NH',
    image: vehicle.images?.map((img) => urlForImage(img).url()),
    brand: {
      '@type': 'Brand',
      name: vehicle.brand,
    },
    model: vehicle.model,
    modelDate: vehicle.year,
    vehicleIdentificationNumber: vehicle.vin,
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: vehicle.mileage,
      unitCode: 'SMI',
    },
    vehicleTransmission: vehicle.transmission,
    fuelType: vehicle.fuelType,
    itemCondition: `https://schema.org/${vehicle.condition.replace(/ /g, '')}Condition`,
    offers: {
      '@type': 'Offer',
      price: vehicle.price,
      priceCurrency: 'USD',
      availability: `https://schema.org/${vehicle.status === 'Available' ? 'InStock' : 'OutOfStock'}`,
      seller: {
        '@type': 'AutoDealer',
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

export default VehicleStructuredData
