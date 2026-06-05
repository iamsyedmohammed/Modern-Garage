import React from 'react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { featuredVehiclesQuery } from '@/sanity/lib/queries'
import { Vehicle } from '@/types/vehicle'
import VehicleCard from './VehicleCard'
import { ArrowRight, Car } from 'lucide-react'

const FeaturedInventory = async () => {
  const vehicles: Vehicle[] = await client.fetch(featuredVehiclesQuery)

  if (vehicles.length === 0) return null

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full mb-4">
              <Car className="w-4 h-4 mr-2" />
              Quality Used Vehicles
            </div>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
              Featured <span className="text-primary italic">Inventory</span>
            </h3>
            <p className="text-lg text-grayCustom-text leading-relaxed">
              Explore our hand-picked selection of reliable, pre-owned vehicles. Each one is inspected by our expert technicians.
            </p>
          </div>
          <Link 
            href="/inventory" 
            className="group flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-gray-900"
          >
            Browse All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.slice(0, 3).map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedInventory
