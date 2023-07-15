const _ = require('lodash')
const posts = require('../data/posts.json');
const commentsList = require('../data/comments.json')

const resolvers = {
    Query: {
        post: (parent, args) => {
            const {id} = args
            return posts.filter(post => post.id == id)[0]
        },
        posts: () => posts
    },
    Post: {
        comments: (parent) => {
            return _.filter(commentsList, { postId: Number(parent.id) })
        }
    },
    Mutation: {
        createPost: (parent, args) => {
            const { input } = args
            posts.push(input)
            return input
        }
    }
};

module.exports = {
    resolvers
}