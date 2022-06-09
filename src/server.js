import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import connectDB from './config/mongoose'
import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/schema'

connectDB()
    .then(() => console.log('Connected successfully to database server!'))
    .then(async () => await startApolloServer())
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

const startApolloServer = async () => {
    const app = express()
    const httpServer = http.createServer(app)

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })

    await server.start()
    server.applyMiddleware({
        app,
        path: '/',
    })

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}
