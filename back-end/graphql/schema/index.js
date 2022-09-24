const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type RootQuery {
    movies: [Movie!]!
}

type Movie {
  id: ID!
  name: String!
  description: String!
  price: Float!
  image: String!
  timings: [String!]!
  category: String!
}

input MovieInput {
  name: String!
  description: String!
  price: Float!
  image: String!
  timings: [String!]!
  category: String!
}

input MovieFind {
  id: String!
}

type RootMutation {

    createMovie(movieInput: MovieInput): Movie
    findMovie(movieFind: MovieFind): Movie
}

schema {
    query: RootQuery
    mutation: RootMutation
}`);
