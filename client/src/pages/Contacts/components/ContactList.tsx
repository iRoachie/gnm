import React, { useMemo } from 'react';
import { Query } from 'react-apollo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';

import { contactsQuery } from '../../../../../mobile/src/graphql/queries';

const ContactList = ({ search }) =>
  useMemo(() => {
    return (
      <Query query={contactsQuery} variables={{ search: search }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>loading...</p>;
          }

          if (error) {
            return <p>Error</p>;
          }

          return (
            <Content>
              {data.persons.data.map(a => (
                <ListItem key={a.id} button>
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
