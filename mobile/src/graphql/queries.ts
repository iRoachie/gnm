import gql from 'graphql-tag';

export const dashboardQuery = gql`
  query DashboardQuery {
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

export const contactsQuery = gql`
  query ContactsQuery($search: String) {
    persons(where: { name_search_contains: $search }) {
      data {
        id
        name
        address
      }
    }
  }
`;
