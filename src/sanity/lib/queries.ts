import { groq } from 'next-sanity'

export const vehiclesQuery = groq`*[_type == "vehicle" && status != "Hidden"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  brand,
  model,
  year,
  price,
  mileage,
  transmission,
  fuelType,
  condition,
  images,
  featured,
  status
}`

export const featuredVehiclesQuery = groq`*[_type == "vehicle" && featured == true && status != "Hidden"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  brand,
  model,
  year,
  price,
  mileage,
  transmission,
  fuelType,
  condition,
  images,
  featured,
  status
}`

export const vehicleBySlugQuery = groq`*[_type == "vehicle" && slug.current == $slug][0] {
  ...,
  "images": images[] {
    ...,
    "url": asset->url
  }
}`

export const rentalsQuery = groq`*[_type == "rental" && status != "Hidden"] | order(_createdAt desc) {
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

export const featuredRentalsQuery = groq`*[_type == "rental" && featured == true && status != "Hidden"] | order(_createdAt desc) {
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

export const rentalBySlugQuery = groq`*[_type == "rental" && slug.current == $slug][0] {
  ...,
  "images": images[] {
    ...,
    "url": asset->url
  }
}`
