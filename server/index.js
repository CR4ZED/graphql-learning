
const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")
const { typeDefs } = require("./schema/type-defs")
const { resolvers } = require("./schema/resolvers")

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

async function startServer () {
    const { url } = await startStandaloneServer(server)
    
    console.log(`🚀 Server ready at ${url}`)
}

startServer()