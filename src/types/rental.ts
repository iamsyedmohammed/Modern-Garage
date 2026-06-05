import { Image } from 'sanity'

export interface RentalVehicle {
  _id: string
  title: string
  slug: {
    current: string
  }
  brand: string
  model: string
  year: number
  pricePerDay: number
  mileage: number
  transmission: 'Automatic' | 'Manual'
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid'
  bodyType?: string
  color?: string
  description?: any // PortableText
  features?: string[]
  images: Image[]
  featured: boolean
  status: 'Available' | 'Rented' | 'Maintenance'
  _createdAt: string
}
