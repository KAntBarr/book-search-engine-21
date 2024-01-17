import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getMe($userId: ID!) {
    me(userId: $userId) {
      
    }
  }
`;