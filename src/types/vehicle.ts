import { Image } from 'sanity'

export interface Vehicle {
  _id: string
  title: string
  slug: {
    current: string
  }
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  transmission: 'Automatic' | 'Manual'
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid'
  bodyType?: string
  color?: string
  vin?: string
  condition: 'Used' | 'Certified Pre-Owned' | 'New'
  description?: any // PortableText
  features?: string[]
  images: Image[]
  featured: boolean
  status: 'Available' | 'Sold' | 'Reserved'
  _createdAt: string
}
