import { merge } from 'lodash'
import productResolvers from './product'

export const resolvers = merge(productResolvers)
