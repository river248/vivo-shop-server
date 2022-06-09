import { ProductService } from '../../services/product'

const productResolvers = {
    Query: {
        products: async () => await ProductService.getAllProducts(),
        product: async (parent, args) => await ProductService.getProductById(args.id),
    },

    Mutation: {
        createNew: async (parent, args) => ProductService.createNew(args),
    },
}

export default productResolvers
