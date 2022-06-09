import { gql } from 'apollo-server-core'

export const productTypeDefs = gql`
    type Product {
        id: ID!
        name: String!
        categoryID: String!
        thumbnail: String!
        description: String!
        price: Int!
        sizes: [Size!]!
        soldOut: Boolean
    }

    type Size {
        id: ID!
        name: String!
        soldOut: Boolean
    }

    input SizeInput {
        name: String
        soldOut: Boolean
    }

    type Query {
        products: [Product]
        product(id: ID!): Product
    }

    type Mutation {
        createNew(
            name: String
            categoryID: String
            thumbnail: String
            description: String
            price: Int
            sizes: [SizeInput]
        ): Product
    }
`
