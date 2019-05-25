import React, { useMemo } from 'react';
import { Query } from 'react-apollo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';

import { contactsQuery } from '../../../../../mobile/src/graphql/queries';
import { navigate } from '@reach/router';
import { Person } from '../../../../../core/prisma-client';

const ContactList = ({ search }) =>
  useMemo(() => {
    const viewContact = (id: string) => {
      navigate(`/contacts/${id}`);
    };

    return (
      <Query query={contactsQuery} variables={{ search: search }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p className="text-center my-4">Loading...</p>;
          }

          if (error) {
            return <p className="text-center my-4">Error</p>;
          }

          if (data.persons.data.length === 0) {
            return <p className="text-center my-4">No Contacts</p>;
          }

          return (
            <Content>
              {data.persons.data.map((a: Person) => (
                <ListItem key={a.id} button onClick={() => viewContact(a.id)}>
                  <ListItemText primary={a.name} secondary={a.teamCode} />
                </ListItem>
              ))}
            </Content>
          );
        }}
      </Query>
    );
  }, [search]);

const Content = styled(List)`
  max-height: calc(100vh - 160px);
  overflow-y: scroll;
`;

export default ContactList;
