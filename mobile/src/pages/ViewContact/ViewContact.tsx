import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, Linking } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Appbar, ActivityIndicator } from 'react-native-paper';
import { ListItem, ThemeProvider, CheckBox } from 'react-native-elements';

import { Person } from '../../../../core/prisma-client/index';
import NoteItem from './components/NoteItem';
import { Section } from '../../components/';
import BlockValue from './components/BlockValue';
import Header from './components/Header';

import { Theme } from '../../util';
import { MergedPerson } from '../../types';
import client, { viewContactQuery } from '../../graphql';

interface ScreenParams {
  id: string;
}

const ViewContact: React.FunctionComponent<
  NavigationScreenProps<ScreenParams>
> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [person, setPerson] = useState<MergedPerson | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const editContact = (person: Person | null) => {
    if (person) {
      navigation.navigate('EditContact', { person });
    }
  };

  const getUser = async () => {
    try {
      const { data } = await client.query({
        query: viewContactQuery,
        variables: { id: navigation.getParam('id') },
      });

      setPerson(data.person);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark {...Theme.Appbar.Header}>
        <Appbar.Action icon="arrow-back" onPress={() => navigation.pop()} />
        <Appbar.Content {...Theme.Appbar.Content} />
        <Appbar.Action icon="edit" onPress={() => editContact(person)} />
      </Appbar.Header>

      {loading && <ActivityIndicator style={{ marginTop: 16 }} />}

      {!!error && <Text>Error!: {error.message}</Text>}

      {!!person && (
        <React.Fragment>
          <Header
            name={person.name}
            status={person.status.title!}
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
                        onPress={() =>
                          Linking.openURL(`tel:${person.telephone}`)
                        }
                      />
                    )}
                    {!!person.cellphone && (
                      <ListItem
                        title={person.cellphone}
                        subtitle="Cell Phone"
                        onPress={() =>
                          Linking.openURL(`tel:${person.cellphone}`)
                        }
                      />
                    )}
                    {!!person.email && (
                      <ListItem
                        title={person.email}
                        subtitle="Email"
                        onPress={() =>
                          Linking.openURL(`mailto:${person.email}`)
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
      )}
    </View>
  );
};

export default ViewContact;
