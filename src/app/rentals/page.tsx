import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { RentalVehicle } from '@/types/rental'
import RentalCard from '@/components/RentalCard'
import RentalFilterBar from '@/components/RentalFilterBar'
import { groq } from 'next-sanity'

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Car Rentals | Modern Auto Garage NH',
  description: 'Rent clean, reliable, and well-maintained vehicles in Manchester, NH. Perfect for travel, temporary replacements, or special trips.',
}

interface PageProps {
  searchParams: Promise<{
    brand?: string
    maxPrice?: string
    year?: string
    maxMileage?: string
    transmission?: string
    bodyType?: string
    sort?: string
    q?: string
  }>
}

export default async function RentalsPage({ searchParams }: PageProps) {
  const { brand, maxPrice, year, maxMileage, transmission, bodyType, sort, q } = await searchParams

  // Dynamic GROQ query based on filters
  let filter = `_type == "rental"`
  if (brand) filter += ` && brand == "${brand}"`
  if (maxPrice) filter += ` && pricePerDay <= ${maxPrice}`
  if (year) filter += ` && year >= ${year}`
  if (maxMileage) filter += ` && mileage <= ${maxMileage}`
  if (transmission) filter += ` && transmission == "${transmission}"`
  if (bodyType) filter += ` && bodyType == "${bodyType}"`
  if (q) filter += ` && (title match "*${q}*" || brand match "*${q}*" || model match "*${q}*")`

  // Sort logic
  let order = `_createdAt desc`
  if (sort === 'price-asc') order = `pricePerDay asc`
  if (sort === 'price-desc') order = `pricePerDay desc`
  if (sort === 'year-desc') order = `year desc`
  if (sort === 'mileage-asc') order = `mileage asc`

  const rentalsQueryStr = groq`*[${filter}] | order(${order}) {
    _id,
    title,
    slug,
    brand,
    model,
    year,
    pricePerDay,
    mileage,
    transmission,
    fuelType,
    images,
    featured,
    status
  }`

  // Fetch unique brands and body types for the filter bar
  const brandsQuery = groq`*[_type == "rental"].brand`
  const bodyTypesQuery = groq`*[_type == "rental"].bodyType`
  
  const [rentals, allBrands, allBodyTypes]: [RentalVehicle[], string[], string[]] = await Promise.all([
    client.fetch(rentalsQueryStr),
    client.fetch(brandsQuery),
    client.fetch(bodyTypesQuery)
  ])

  const uniqueBrands = Array.from(new Set(allBrands.filter(Boolean))).sort()
  const uniqueBodyTypes = Array.from(new Set(allBodyTypes.filter(Boolean))).sort()

  return (
    <main className="min-h-screen pt-0 pb-20">
      {/* Header Section */}
      <section className="bg-black py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Car <span className="text-primary">Rentals</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Clean, reliable, and premium rental vehicles for your needs in Manchester, NH.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        {/* Filters */}
        <Suspense fallback={<div className="h-24 bg-gray-100 rounded-2xl animate-pulse mb-12" />}>
           <RentalFilterBar brands={uniqueBrands} bodyTypes={uniqueBodyTypes} />
        </Suspense>

        {/* Rentals Grid */}
        {rentals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rentals.map((rental) => (
              <RentalCard key={rental._id} rental={rental} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-grayCustom-light rounded-[2rem] border border-grayCustom-border px-6">
            <h2 className="text-3xl font-black text-black mb-4">No Rentals Available</h2>
            <p className="text-grayCustom-text max-w-md mx-auto mb-10">
              We couldn't find any rental vehicles matching your current filters. Try adjusting them or contact us directly to reserve a vehicle.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+16036224428" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-900 transition-all w-full md:w-auto"
              >
                <span>Call Us: (603) 622-4428</span>
              </a>
              <a 
                href="https://wa.me/16036224428?text=Hello%20Modern%20Auto%20Garage,%20I'm%20looking%20to%20rent%20a%20car." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#128C7E] transition-all w-full md:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.403 0 6.556-5.332 11.891-11.891 11.891-2.003 0-3.976-.505-5.719-1.465l-6.077 1.683zm6.514-3.535c1.462.868 3.033 1.325 4.653 1.325 5.12 0 9.287-4.166 9.287-9.287 0-2.482-.968-4.816-2.726-6.571-1.758-1.757-4.093-2.724-6.561-2.724-5.12 0-9.287 4.167-9.287 9.287 0 1.697.453 3.352 1.309 4.79l-1.011 3.693 3.791-.989zm11.366-6.327c-.312-.156-1.847-.91-2.132-1.014-.286-.104-.494-.156-.701.156s-.805 1.014-1.04 1.273c-.234.259-.468.286-.78.13s-1.313-.483-2.502-1.542c-.925-.825-1.549-1.845-1.73-2.131-.182-.287-.019-.442.137-.581.14-.126.312-.365.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.701-1.689-.961-2.313-.253-.607-.511-.525-.701-.535-.181-.01-.39-.011-.598-.011s-.546.078-.832.39c-.286.312-1.092 1.066-1.092 2.6 0 1.534 1.118 3.015 1.274 3.223s2.201 3.36 5.331 4.716c.745.322 1.325.515 1.777.659.748.237 1.429.204 1.968.124.6-.09 1.847-.754 2.106-1.481.259-.727.259-1.352.182-1.482-.077-.13-.285-.208-.597-.364z"/>
                </svg>
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
