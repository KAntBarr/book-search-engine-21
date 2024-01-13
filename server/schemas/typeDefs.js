const typeDefs = `
  # Define which fields are accessible
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Book]!
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    getSingleUser(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(
      newAuthors: [String], 
      newDescription: String!, 
      newBookId: String!, 
      newImage: String, 
      newLink: String, 
      newTitle: String!): Book
    removeBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
