import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './src/graphql/schema.js'
import resolvers from './src/resolvers/resolvers.js'
const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers
})

await server.start()
server.applyMiddleware({app})
app.use(express.json())

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})