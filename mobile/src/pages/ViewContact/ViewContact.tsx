import React from 'react';
import { View, Text, ScrollView, FlatList, Linking } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Appbar, ActivityIndicator } from 'react-native-paper';
import { ListItem, ThemeProvider, CheckBox } from 'react-native-elements';
import { Query } from 'react-apollo';

import {
  Person,
  PersonStatus,
  ContactSite,
} from '../../../../core/prisma-client/index';
import NoteItem from './components/NoteItem';
import Section from './components/Section';
import BlockValue from './components/BlockValue';
import Header from './components/Header';

import { Theme } from '../../util';
import { MergedNote } from '../../types';
import gql from 'graphql-tag';

interface ScreenParams {
  id: string;
}

interface MergedPerson extends Person {
  notes: MergedNote[];
  status: Partial<PersonStatus>;
  contactSite: Partial<ContactSite>;
}

const ViewContactQuery = gql`
  query ViewContactQuery($id: ID!) {
    person(where: { id: $id }) {
      id
      name
      status {
        title
      }
      contactSite {
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

const ViewContact: React.FunctionComponent<
  NavigationScreenProps<ScreenParams>
> = ({ navigation }) => {
  const editContact = () => {
    //
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark {...Theme.Appbar.Header}>
        <Appbar.Action icon="arrow-back" onPress={() => navigation.pop()} />
        <Appbar.Content {...Theme.Appbar.Content} />
      </Appbar.Header>

      <Query<{ person: MergedPerson }>
        query={ViewContactQuery}
        variables={{ id: navigation.getParam('id') }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) {
            return <ActivityIndicator style={{ marginTop: 16 }} />;
          }

          if (error) {
            return <Text>Error!: {error}</Text>;
          }

          const { person } = data!;

          return (
            <React.Fragment>
              <Header
                name={person.name}
                status={person.status.title!}
                onEdit={editContact}
                teamCode={person.teamCode}
              />

              <View style={{ backgroundColor: '#fff', flex: 1, zIndex: 1 }}>
                <ScrollView
                  contentContainerStyle={{ paddingBottom: 16, paddingTop: 0 }}
                >
                  <Section padded={false}>
                    <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
                      {!!person.age && (
                        <BlockValue label="Age" value={person.age} />
                      )}
                      <BlockValue
                        label="Sex"
                        value={person.sex === 'M' ? 'Male' : 'Female'}
                      />
                    </View>

                    <ThemeProvider
                      theme={{
                        ListItem: {
                          containerStyle: {
                            paddingHorizontal: 16,
                          },
                          titleStyle: {
                            fontFamily: Theme.fonts.regular,
                            color: '#000',
                            fontSize: 15,
                          },
                          subtitleStyle: {
                            fontFamily: Theme.fonts.medium,
                            color: Theme.primary,
                            fontSize: 14,
                          },
                        },
                      }}
                    >
                      <View style={{ marginTop: 16, marginBottom: -14 }}>
                        <ListItem
                          title={`${person.contactSite.name} - ${
                            person.contactSite.country
                          }`}
                          subtitle="Contact Site"
                        />

                        {!!person.address && (
                          <ListItem title={person.address} subtitle="Address" />
                        )}
                        {!!person.telephone && (
                          <ListItem
                            title={person.telephone}
                            subtitle="Telephone"
                            onPress={() => Linking.openURL(`tel:444-4444`)}
                          />
                        )}
                        {!!person.cellphone && (
                          <ListItem
                            title={person.cellphone}
                            subtitle="Cell Phone"
                            onPress={() => Linking.openURL(`tel:222-4444`)}
                          />
                        )}
                        {!!person.email && (
                          <ListItem
                            title={person.email}
                            subtitle="Email"
                            onPress={() =>
                              Linking.openURL(`mailto:eqegqq@saf.com`)
                            }
                          />
                        )}
                      </View>
                    </ThemeProvider>
                  </Section>

                  <Section title="Lessons Completed">
                    <ThemeProvider
                      theme={{
                        CheckBox: {
                          containerStyle: {
                            marginLeft: 0,
                          },
                          Component: View,
                          checkedColor: Theme.primary,
                        },
                      }}
                    >
                      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <CheckBox checked={!!person.lesson1} title="1" />
                        <CheckBox checked={!!person.lesson2} title="2" />
                        <CheckBox checked={!!person.lesson3} title="3" />
                        <CheckBox checked={!!person.lesson4} title="4" />
                        <CheckBox checked={!!person.lesson5} title="5" />
                        <CheckBox checked={!!person.lesson6} title="6" />
                        <CheckBox checked={!!person.lesson7} title="7" />
                      </View>
                    </ThemeProvider>
                  </Section>

                  <Section title="Received">
                    <ThemeProvider
                      theme={{
                        CheckBox: {
                          containerStyle: {
                            marginLeft: 0,
                          },
                          Component: View,
                          checkedColor: Theme.primary,
                        },
                      }}
                    >
                      <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                          checked={!!person.handbill}
                          title="Handbill"
                          containerStyle={{ flex: 1 }}
                        />
                        <CheckBox
                          checked={!!person.letter}
                          title="Letter"
                          containerStyle={{ flex: 1 }}
                        />
                      </View>

                      <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                          checked={!!person.invitation}
                          title="Invitation"
                          containerStyle={{ flex: 1 }}
                        />
                        <CheckBox
                          checked={!!person.guestTag}
                          title="Guest Tag"
                          containerStyle={{ flex: 1 }}
                        />
                      </View>
                    </ThemeProvider>
                  </Section>

                  <Section title="Require Transportation">
                    <ThemeProvider
                      theme={{
                        CheckBox: {
                          containerStyle: {
                            marginLeft: 0,
                          },
                          Component: View,
                          checkedColor: Theme.primary,
                        },
                      }}
                    >
                      <CheckBox
                        checked={!!person.transport}
                        title="Yes"
                        containerStyle={{ flex: 1 }}
                      />
                    </ThemeProvider>
                  </Section>

                  <Section title="Notes" hideDivider>
                    <FlatList
                      data={person.notes}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => <NoteItem note={item} />}
                      ItemSeparatorComponent={() => (
                        <View style={{ marginBottom: 24 }} />
                      )}
                      ListEmptyComponent={
                        <Text
                          style={{
                            textAlign: 'center',
                            marginTop: 16,
                            fontSize: 16,
                            fontFamily: Theme.fonts.regular,
                          }}
                        >
                          No Notes
                        </Text>
                      }
                    />
                  </Section>
                </ScrollView>
              </View>
            </React.Fragment>
          );
        }}
      </Query>
    </View>
  );
};

export default ViewContact;
