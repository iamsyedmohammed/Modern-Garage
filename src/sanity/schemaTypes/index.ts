import { type SchemaTypeDefinition } from 'sanity'
import { vehicleType } from './vehicle'
import { rentalType } from './rental'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vehicleType, rentalType],
}
