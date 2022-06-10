import { gql } from 'apollo-server-core'

export const CategoryTypeDefs = gql`
    type Category {
        id: ID!
        name: String!
        type: String!
        products: [Product]
    }

    type Query {
        categories: [Category]
        listCategories(type: String!): [Category]
        category(id: ID!): Category
    }

    type Mutation {
        createNewCategory(name: String, type: String): Category
    }
`
