import { CategoryService } from '../../services/category'
import { ProductService } from '../../services/product'

const ProductResolvers = {
    Query: {
        listProducts: async (parent, args) => await ProductService.getAllProducts({ status: args.status }),
        products: async () => await ProductService.getAllProducts(),
        product: async (parent, args) => await ProductService.getProductById(args.id),
    },

    Product: {
        category: async ({ categoryID }, args) => await CategoryService.getCategoryById(categoryID),
    },

    Mutation: {
        createNewProduct: async (parent, args) => ProductService.createNew(args),
    },
}

export default ProductResolvers
