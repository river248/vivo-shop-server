import { gql } from 'apollo-server-core'

export const ProductTypeDefs = gql`
    type Product {
        id: ID!
        name: String!
        category: Category
        status: String
        thumbnail: String!
        description: String!
        price: Int!
        sizes: [Size!]!
        soldOut: Boolean
    }

    type Size {
        name: String!
        soldOut: Boolean
    }

    input SizeInput {
        name: String
        soldOut: Boolean
    }

    type Query {
        listProducts(status: String!): [Product]
        products: [Product]
        product(id: ID!): Product
    }

    type Mutation {
        createNewProduct(
            name: String
            categoryID: ID
            thumbnail: String
            description: String
            price: Int
            sizes: [SizeInput]
        ): Product
    }
`
