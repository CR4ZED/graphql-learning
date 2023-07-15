const { v4 } = require('uuid')

const typeDefs = `#graphql
  type Comment {
    postId: ID!,
    id: ID!
    name: String!
    email: String!
    body: String!
  }

  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String
    comments: [Comment]
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

#// TODO: Change ID to UUID
  input createPostInput {
    userId: ID!
    id: ID = 104
    title: String!
    body: String!
  }

  type Mutation {
    createPost(input: createPostInput!): Post
  }


`

module.exports = {
    typeDefs
}