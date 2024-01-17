import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser(email: String!, password: String!) {
    login(email: $email, password: $password,) {
      
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $newAuthors: [String], 
    $newDescription: String!, 
    $newBookId: String!, 
    $newImage: String, 
    $newLink: String, 
    $newTitle: String!) {
    
      saveBook(
        newAuthors: $newAuthors, 
        newDescription: $newDescription, 
        newBookId: $newBookId, 
        newImage: $newImage, 
        newLink: $newLink, 
        newTitle: $newTitle) {
      
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      
    }
  }
`;