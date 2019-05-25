import gql from 'graphql-tag';

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
