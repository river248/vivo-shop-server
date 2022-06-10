import { CategoryService } from '../../services/Category'
import { ProductService } from '../../services/product'

const CategoryResolvers = {
    Query: {
        categories: async () => await CategoryService.getAllCategories(),
        category: async (parent, args) => await CategoryService.getCategoryById(args.id),
    },

    Category: {
        products: async ({ id }, args) => await ProductService.getProductsByCategory(id),
    },

    Mutation: {
        createNewCategory: async (parent, args) => CategoryService.createNew(args),
    },
}

export default CategoryResolvers
