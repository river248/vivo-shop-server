import { gql } from 'apollo-server-core'
module.exports = gql`
    type Size {
        name: String
        soldOut: Boolean
    }

    type Product {
        name: String
        category: String
        thumbnail: String
        description: String
        price: Int
        sizes: [Size]
        soldOut: Boolean
    }
`
