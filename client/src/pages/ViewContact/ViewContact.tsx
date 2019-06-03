import React from 'react';
import { Query } from 'react-apollo';
import { RouteComponentProps } from '@reach/router';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Page from '../../components/Page';
import { viewContactQuery } from '../../graphql/queries';
import { MergedPerson } from '../../../../mobile/src/types';

const ViewContact: React.FunctionComponent<
  RouteComponentProps<{
    id: string;
  }>
> = ({ id }) => {
  return (
    <Page>
      <Query query={viewContactQuery} variables={{ id: id }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }

          if (error) {
            return <p>Error</p>;
          }

          const person: MergedPerson = data.person;

          return (
            <>
              <div className="bg-primary py-2 text-white px-4 mb-4">
                <h1 className="text-4xl font-bold">{person.name}</h1>

                <div className="flex">
                  {!!person.teamCode && (
                    <p className="mr-4">{person.teamCode}</p>
                  )}
                  <p>{person.status.title}</p>
                </div>
              </div>

              <ListItem>
                <ListItemText primary="Male" secondary="Sex" />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={`${person.contactSite.name} - ${
                    person.contactSite.country
                  }`}
                  secondary="Contact Site"
                />
              </ListItem>

              {!!person.team && (
                <ListItem>
                  <ListItemText primary={person.team.name} secondary="Team" />
                </ListItem>
              )}

              {!!person.address && (
                <ListItem>
                  <ListItemText primary={person.address} secondary="Address" />
                </ListItem>
              )}

              {!!person.telephone && (
                <ListItem>
                  <ListItemText
                    primary={person.telephone}
                    secondary="Telephone"
                  />
                </ListItem>
              )}

              {!!person.cellphone && (
                <ListItem>
                  <ListItemText
                    primary={person.cellphone}
                    secondary="Cell Phone"
                  />
                </ListItem>
              )}

              {!!person.email && (
                <ListItem>
                  <ListItemText primary={person.email} secondary="Email" />
                </ListItem>
              )}

              <hr className="border" />
            </>
          );
        }}
      </Query>
    </Page>
  );
};

export default ViewContact;