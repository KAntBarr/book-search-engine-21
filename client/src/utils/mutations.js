import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password,) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($newAuthors: [String], $input: SaveBookInput!) {
    saveBook(input: $input, newAuthors: $newAuthors) {
      _id
      username
      email
    }
  }
`;

// export const SAVE_BOOK = gql`
// mutation SaveBook($newDescription: String!, $newBookId: String!, $newTitle: String!, $newAuthors: [String], $newImage: String, $newLink: String) {
//   saveBook(newDescription: $newDescription, newBookId: $newBookId, newTitle: $newTitle, newAuthors: $newAuthors, newImage: $newImage, newLink: $newLink) {
//     _id
//     username
//     email
//   }
// }
// `;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
    }
  }
`;