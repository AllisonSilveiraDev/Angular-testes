import { gql } from 'apollo-angular';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      description
    }
  }
`;

export { GET_POSTS };
