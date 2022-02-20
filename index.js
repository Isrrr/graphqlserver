import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { BlogAppSchema } from './src/schema'

let port = 8080
const app = express()

app.use(
  '/',
  graphqlHTTP({
    schema: BlogAppSchema,
    graphiql: true
  })
)

app.listen(port)
console.log('GraphQL API server running at localhost:' + port)
