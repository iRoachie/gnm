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
      orderBy: createdAt_DESC
    ) {
      data {
        id
        name
        teamCode
      }
    }
  }
`;

export const teamsQuery = gql`
  query TeamsQuery {
    teams(orderBy: createdAt_DESC) {
      id
      name
      contactSite {
        name
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
      team {
        id
        name
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
      notes(orderBy: date_DESC) {
        id
        message
        date
        user {
          name
        }
      }
    }
  }
`;

export const personNotesQuery = gql`
  query ViewContactNotesQuery($id: ID!) {
    person(where: { id: $id }) {
      id
      notes(orderBy: date_DESC) {
        id
        message
        date
        user {
          name
        }
      }
    }
  }
`;

export const personAttendanceQuery = gql`
  query PersonAttendanceQuery($id: ID!) {
    attendance(where: { person: { id: $id } }) {
      count
      data {
        id
        date
      }
    }
  }
`;
