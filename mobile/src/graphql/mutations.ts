import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      jwt
      role {
        title
        permissions
      }
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

export const newTeamMutation = gql`
  mutation NewTeamMutation($data: TeamCreateInput!) {
    createTeam(data: $data) {
      id
    }
  }
`;

export const updateContactMutation = gql`
  mutation UpdateContactMutation(
    $where: PersonWhereUniqueInput!
    $data: PersonUpdateInput!
  ) {
    updatePerson(where: $where, data: $data) {
      id
    }
  }
`;

export const markAttendanceMutation = gql`
  mutation MarkAttendanceMutation($id: ID!, $date: DateTime!) {
    markAttendance(data: { person: { connect: { id: $id } }, date: $date }) {
      id
    }
  }
`;
