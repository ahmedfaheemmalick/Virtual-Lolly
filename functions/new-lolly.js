const { ApolloServer, gql } = require('apollo-server-lambda')
const { Client, query } = require("faunadb")
const shortId = require("shortid")

const typeDefs = gql`
  type Query {
    lollies: [Lolly!]
    lollyByPath(lollyPath: String!): Lolly
  }

  type Mutation {
    createLolly(recipient: String!, message: String!, sender: String!, colorTop: String!, colorMiddle: String!, colorBottom: String!): Lolly
  }
  
  type Lolly {
    recipient: String!
    message: String!
    sender: String!
    colorTop: String!
    colorMiddle: String!
    colorBottom: String!
    lollyPath: String
  }
`

const client = new Client({
  secret: process.env.FAUNADB_ADMIN_SECRET,
  domain: "db.eu.fauna.com"
});

const resolvers = {
  Query: {
    lollies: async () => {
      try {
        const result = await client.query(
          query.Map(
            query.Paginate(query.Documents(query.Collection("lollies"))),
            query.Lambda((x) => query.Get(x))
          )
        )

        return result.data.map(({ data }) => data);
      } catch (error) {
        return error
      }
    },
    lollyByPath: async (_, { lollyPath }) => {
      try {
        const result = await client.query(
          query.Get(
            query.Match(query.Index('lolly_by_path'), lollyPath)
          )
        );

        return result
      } catch (error) {
        return error
      }
    },
  },

  Mutation: {
    createLolly: async (_, args) => {
      console.log('args', args)
      try {
        args.lollyPath = shortId.generate()


        const result = await client.query(
          query.Create(query.Collection("lollies"), {
            data: args
          })
        );

        console.log(result.data)
        return result.data
      } catch (error) {
        return error;
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

exports.handler = server.createHandler()