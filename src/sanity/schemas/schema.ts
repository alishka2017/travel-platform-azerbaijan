import { type SchemaTypeDefinition } from 'sanity'

import tour from './tour'
import city from './city'
import restaurant from './restaurant'
import post from './post'
import settings from './settings'
import category from './category'
import rentCar from './rent-car'
import transfer from './transfer'
import hotel from './hotel'
import experience from './experience'
import vipService from './vip-service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    tour, 
    city, 
    restaurant, 
    post, 
    settings, 
    category,
    rentCar,
    transfer,
    hotel,
    experience,
    vipService
  ],
}
