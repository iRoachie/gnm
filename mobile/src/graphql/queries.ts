import gql from 'graphql-tag';

export const dashboardQuery = gql`
  {
    total: persons {
      count
    }

    contacts: persons(where: { status: { title: "Contact" } }) {
      count
    }

    interests: persons(where: { status: { title: "Interest" } }) {
      count
    }

    prospects: persons(where: { status: { title: "Propspect" } }) {
      count
    }

    members: persons(where: { status: { title: "Member" } }) {
      count
    }
  }
`;
