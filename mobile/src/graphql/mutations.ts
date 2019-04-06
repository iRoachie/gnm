import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      jwt
      contactSites {
        id
        country
      }
    }
  }
`;

export const newContactMutation = gql`
  mutation NewContactMutation($data: PersonCreateInput!) {
    registerPerson(data: $data) {
      id
    }
  }
`;
