import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

import Page from '../../components/Page';
import { viewContactQuery } from '../../graphql/queries';
import { MergedPerson } from '../../../../mobile/src/types';
import { Attendance } from '../../../../core/prisma-client';
import { dateToUTC } from '../../util';

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
          const attendance: Attendance[] = data.attendance;

          console.log(attendance);

          return (
            <>
              <div className="py-2 mb-4">
                <h1 className="text-3xl font-bold text-primary">
                  {person.name}
                </h1>

                <div className="flex">
                  {!!person.teamCode && (
                    <p className="mr-4 px-2 bg-primary text-white">
                      {person.teamCode}
                    </p>
                  )}
                  <p>{person.status.title}</p>
                </div>
              </div>

              <ListItem disableGutters>
                <ListItemText primary="Male" secondary="Sex" />
              </ListItem>

              <ListItem disableGutters>
                <ListItemText
                  primary={`${person.contactSite.name} - ${
                    person.contactSite.country
                  }`}
                  secondary="Contact Site"
                />
              </ListItem>

              {!!person.team && (
                <ListItem disableGutters>
                  <ListItemText primary={person.team.name} secondary="Team" />
                </ListItem>
              )}

              {!!person.address && (
                <ListItem disableGutters>
                  <ListItemText primary={person.address} secondary="Address" />
                </ListItem>
              )}

              {!!person.telephone && (
                <ListItem disableGutters>
                  <ListItemText
                    primary={person.telephone}
                    secondary="Telephone"
                  />
                </ListItem>
              )}

              {!!person.cellphone && (
                <ListItem disableGutters>
                  <ListItemText
                    primary={person.cellphone}
                    secondary="Cell Phone"
                  />
                </ListItem>
              )}

              {!!person.email && (
                <ListItem disableGutters>
                  <ListItemText primary={person.email} secondary="Email" />
                </ListItem>
              )}

              <hr className="border my-4" />

              <section className="mt-4">
                <h2 className="text-xl mb-4">Attendance</h2>

                <div className="md:flex">
                  <div className="flex-1 mb-8 md:mb-0">
                    <p className="text-center">No Events</p>
                  </div>

                  <div className="w-full md:w-1/2">
                    <Calendar
                      height={300}
                      width="100%"
                      dateClasses={[
                        {
                          className: 'present',
                          dates: attendance.map(a =>
                            dateToUTC(new Date(a.date))
                          ),
                        },
                      ]}
                      min={new Date(2019, 4, 19)}
                      minDate={new Date(2019, 4, 19)}
                      onSelect={(e: Date) => {
                        console.log(e);
                      }}
                      selected={false}
                      autoFocus={false}
                      theme={{
                        selectionColor: '#394680',
                        weekdayColor: '#394680',
                        headerColor: '#303b6c',
                        floatingNav: {
                          background: '#303b6c',
                          color: '#FFF',
                          chevron: '#FFA726',
                        },
                      }}
                    />
                  </div>
                </div>
              </section>
            </>
          );
        }}
      </Query>
    </Page>
  );
};

const Calendar = styled(InfiniteCalendar)`
  font-family: 'Avenir Next', sans-serif !important;

  .present {
    width: 52px;
    height: 52px;
    background: #ed2087;
    border-radius: 100%;
    color: #fff !important;

    span {
      color: #fff !important;
    }
  }
`;

export default ViewContact;
