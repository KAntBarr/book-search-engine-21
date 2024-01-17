const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // console.log('test1111111');
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id }).populate('savedBooks');
        // const user = await User.findById({ _id: context.user._id });
        // console.log('$$$$;)$$$$', user, '&&&&;)&&&&');
        return user;
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // console.log(user, '****;)****');
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, {
      newAuthors,
      newDescription,
      newBookId,
      newImage,
      newLink,
      newTitle
    }, context) => {
      console.log('test1');
      if (context.user) {
        const book = {
          authors: newAuthors,
          description: newDescription,
          bookId: newBookId,
          image: newImage,
          link: newLink,
          title: newTitle
        }
        console.log('test2');
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: book } },
          { new: true, runValidators: true }
        );
        console.log('test3');
        return user;
      }
      throw AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );

        return user;
      }
      throw AuthenticationError;
    },
  }
};

module.exports = resolvers;
