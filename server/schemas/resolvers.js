const resolvers = {
  Query: {
    me: async (parent, { userId }) => {
      // return await School.find({}).populate('classes').populate({
      //   path: 'classes',
      //   populate: 'professor'
      // });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {

    },
    login: async (parent, { email, password }) => {

    },
    saveBook: async (parent, {
      newAuthors,
      newDescription,
      newBookId,
      newImage,
      newLink,
      newTitle
    }, context) => {

    },
    removeBook: async (parent, { bookId }, context) => {

    }
  }
};

module.exports = resolvers;
