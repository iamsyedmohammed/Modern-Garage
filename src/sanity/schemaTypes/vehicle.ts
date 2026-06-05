import { defineField, defineType } from 'sanity'

export const vehicleType = defineType({
  name: 'vehicle',
  title: 'Vehicle',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., 2019 Honda Civic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand / Make',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear() + 1),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'mileage',
      title: 'Mileage',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      options: {
        list: [
          { title: 'Automatic', value: 'Automatic' },
          { title: 'Manual', value: 'Manual' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fuelType',
      title: 'Fuel Type',
      type: 'string',
      options: {
        list: [
          { title: 'Gasoline', value: 'Gasoline' },
          { title: 'Diesel', value: 'Diesel' },
          { title: 'Electric', value: 'Electric' },
          { title: 'Hybrid', value: 'Hybrid' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bodyType',
      title: 'Body Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sedan', value: 'Sedan' },
          { title: 'SUV', value: 'SUV' },
          { title: 'Truck', value: 'Truck' },
          { title: 'Coupe', value: 'Coupe' },
          { title: 'Convertible', value: 'Convertible' },
          { title: 'Hatchback', value: 'Hatchback' },
          { title: 'Van / Minivan', value: 'Van' },
          { title: 'Wagon', value: 'Wagon' },
        ],
      },
    }),
    defineField({
      name: 'color',
      title: 'Exterior Color',
      type: 'string',
    }),
    defineField({
      name: 'vin',
      title: 'VIN',
      type: 'string',
    }),
    defineField({
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: [
          { title: 'Used', value: 'Used' },
          { title: 'Certified Pre-Owned', value: 'Certified Pre-Owned' },
          { title: 'New', value: 'New' },
        ],
      },
      initialValue: 'Used',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Vehicle',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'Available' },
          { title: 'Sold', value: 'Sold' },
          { title: 'Reserved', value: 'Reserved' },
        ],
      },
      initialValue: 'Available',
    }),
  ],
})
