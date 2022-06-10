import { merge } from 'lodash'
import CategoryResolvers from './category'
import ProductResolvers from './product'

export const resolvers = merge(ProductResolvers, CategoryResolvers)
