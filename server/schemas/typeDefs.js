const typeDefs = `
  # Define which fields are accessible
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  input SaveBookInput {
    newAuthors: [String], 
    newDescription: String!, 
    newBookId: String!, 
    newImage: String, 
    newLink: String, 
    newTitle: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newAuthors: [String], 
      newDescription: String!, 
      newBookId: String!, 
      newImage: String, 
      newLink: String, 
      newTitle: String!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
