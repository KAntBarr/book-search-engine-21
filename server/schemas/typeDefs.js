const typeDefs = `
  # Define which fields are accessible
  type XXX {
    _id: ID
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    xxx: [XXX]
  }
`;

module.exports = typeDefs;
