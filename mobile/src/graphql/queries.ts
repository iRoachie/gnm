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

    prospects: persons(where: { status: { title: "Prospect" } }) {
      count
    }

    members: persons(where: { status: { title: "Member" } }) {
      count
    }
  }
`;

export const contactsQuery = gql`
  query ContactsQuery($search: String) {
    persons(
      where: {
        OR: [
          { name_search_contains: $search }
          { teamCode_search_contains: $search }
        ]
      }
    ) {
      data {
        id
        name
        address
      }
    }
  }
`;

export const viewContactQuery = gql`
  query ViewContactQuery($id: ID!) {
    person(where: { id: $id }) {
      id
      name
      status {
        title
      }
      contactSite {
        id
        name
        country
      }
      age
      sex
      address
      telephone
      cellphone
      email
      lesson1
      lesson2
      lesson3
      lesson4
      lesson5
      lesson6
      lesson7
      handbill
      letter
      invitation
      guestTag
      transport
      teamCode
      notes {
        message
        date
        user {
          name
        }
      }
    }
  }
`;
