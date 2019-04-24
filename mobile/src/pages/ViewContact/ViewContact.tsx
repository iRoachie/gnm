import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Linking,
  Platform,
  Keyboard,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  Appbar,
  ActivityIndicator,
  Dialog,
  Portal,
  Button,
} from 'react-native-paper';
import {
  ListItem,
  ThemeProvider,
  CheckBox,
  Input,
} from 'react-native-elements';
import { Query } from 'react-apollo';

import {
  Person,
  PersonWhereUniqueInput,
  PersonUpdateInput,
} from '../../../../core/prisma-client/index';
import NoteItem from './components/NoteItem';
import { Section } from '../../components/';
import BlockValue from './components/BlockValue';
import Header from './components/Header';

import { Theme, StateContext } from '../../util';
import { MergedPerson, UserDetails } from '../../types';
import client, { viewContactQuery, updateContactMutation } from '../../graphql';

interface ScreenParams {
  id: string;
}

const ViewContact: React.FunctionComponent<
  NavigationScreenProps<ScreenParams>
> = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState<UserDetails | null>(null);
  const [noteLoading, setNoteLoading] = useState(false);
  const [note, setNote] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const { getUser } = useContext(StateContext);

  const noteRef = React.createRef<Input>();

  useEffect(() => {
    const fetchInfo = async () => {
      const user = await getUser();

      if (user) {
        setUserInfo(user);
      }
    };

    fetchInfo();
  }, []);

  const editContact = (person: Person | null) => {
    if (person) {
      navigation.navigate('EditContact', { person });
    }
  };

  const showNoteModal = () => {
    setDialogVisible(true);
  };

  const dismissNoteModal = () => {
    Keyboard.dismiss();
    setDialogVisible(false);
  };

  const addNote = async () => {
    const id = navigation.getParam('id');

    setNoteLoading(true);
    Keyboard.dismiss();

    const data: PersonUpdateInput = {
      notes: {
        create: [
          {
            message: note,
            date: new Date(),
            user: { connect: { id: userInfo!.id } },
          },
        ],
      },
    };

    const where: PersonWhereUniqueInput = {
      id,
    };

    try {
      await client.mutate({
        mutation: updateContactMutation,
        variables: { where, data },
        refetchQueries: [
          {
            query: viewContactQuery,
            variables: { id },
          },
        ],
      });

      setTimeout(() => {
        setNoteLoading(false);
        dismissNoteModal();
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={dismissNoteModal}>
          <Dialog.Content>
            <Input
              label="Add Note"
              ref={noteRef}
              inputStyle={{
                fontSize: 15,
                fontFamily: Theme.fonts.medium,
                backgroundColor: '#E5E6E5',
                padding: 15,
                marginTop: 15,
                height: 150,
              }}
              autoFocus
              labelStyle={{
                fontFamily: Theme.fonts.semibold,
                color: 'rgba(0,0,0,.54)',
                fontSize: 17,
                fontWeight: Platform.OS === 'ios' ? '600' : '400',
              }}
              value={note}
              onChangeText={setNote}
              multiline
              textAlignVertical="top"
            />
          </Dialog.Content>
          <Dialog.Actions>
            {!noteLoading && (
              <Button
                theme={{ fonts: { medium: Theme.fonts.semibold } }}
                onPress={dismissNoteModal}
              >
                Cancel
              </Button>
            )}

            <Button
              theme={{ fonts: { medium: Theme.fonts.semibold } }}
              onPress={addNote}
              loading={noteLoading}
              disabled={noteLoading}
            >
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <Query<{ person: MergedPerson }>
        query={viewContactQuery}
        variables={{ id: navigation.getParam('id') || '' }}
      >
        {({ loading, error, data }) => {
          return (
            <>
              <Appbar.Header dark {...Theme.Appbar.Header}>
                <Appbar.Action
                  icon="arrow-back"
                  onPress={() => navigation.pop()}
                />
                <Appbar.Content {...Theme.Appbar.Content} />
                <Appbar.Action icon="note-add" onPress={showNoteModal} />
                {!!data && data.person && (
                  <Appbar.Action
                    icon="edit"
                    onPress={() => editContact(data.person)}
                  />
                )}
              </Appbar.Header>

              {loading ? (
                <ActivityIndicator style={{ marginTop: 16 }} />
              ) : !!error ? (
                <Text>Error!: {error.message}</Text>
              ) : (
                data &&
                data.person && (
                  <React.Fragment>
                    <Header
                      name={data.person.name}
                      status={data.person.status.title!}
                      teamCode={data.person.teamCode}
                    />

                    <View
                      style={{ backgroundColor: '#fff', flex: 1, zIndex: 1 }}
                    >
                      <ScrollView
                        contentContainerStyle={{
                          paddingBottom: 16,
                          paddingTop: 0,
                        }}
                      >
                        <Section padded={false}>
                          <View
                            style={{ flexDirection: 'row', paddingLeft: 16 }}
                          >
                            {!!data.person.age && (
                              <BlockValue label="Age" value={data.person.age} />
                            )}
                            <BlockValue
                              label="Sex"
                              value={
                                data.person.sex === 'M' ? 'Male' : 'Female'
                              }
                            />
                          </View>

                          <ThemeProvider
                            theme={{
                              ListItem: {
                                containerStyle: {
                                  paddingHorizontal: 16,
                                },
                                titleStyle: {
                                  fontFamily: Theme.fonts.medium,
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
                                title={`${data.person.contactSite.name} - ${
                                  data.person.contactSite.country
                                }`}
                                subtitle="Contact Site"
                              />

                              {!!data.person.team && (
                                <ListItem
                                  title={data.person.team.name}
                                  subtitle="Team"
                                />
                              )}

                              {!!data.person.address && (
                                <ListItem
                                  title={data.person.address}
                                  subtitle="Address"
                                />
                              )}
                              {!!data.person.telephone && (
                                <ListItem
                                  title={data.person.telephone}
                                  subtitle="Telephone"
                                  onPress={() =>
                                    Linking.openURL(
                                      `tel:${data.person.telephone}`
                                    )
                                  }
                                />
                              )}
                              {!!data.person.cellphone && (
                                <ListItem
                                  title={data.person.cellphone}
                                  subtitle="Cell Phone"
                                  onPress={() =>
                                    Linking.openURL(
                                      `tel:${data.person.cellphone}`
                                    )
                                  }
                                />
                              )}
                              {!!data.person.email && (
                                <ListItem
                                  title={data.person.email}
                                  subtitle="Email"
                                  onPress={() =>
                                    Linking.openURL(
                                      `mailto:${data.person.email}`
                                    )
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
                            <View
                              style={{ flexDirection: 'row', flexWrap: 'wrap' }}
                            >
                              <CheckBox
                                checked={!!data.person.lesson1}
                                title="1"
                              />
                              <CheckBox
                                checked={!!data.person.lesson2}
                                title="2"
                              />
                              <CheckBox
                                checked={!!data.person.lesson3}
                                title="3"
                              />
                              <CheckBox
                                checked={!!data.person.lesson4}
                                title="4"
                              />
                              <CheckBox
                                checked={!!data.person.lesson5}
                                title="5"
                              />
                              <CheckBox
                                checked={!!data.person.lesson6}
                                title="6"
                              />
                              <CheckBox
                                checked={!!data.person.lesson7}
                                title="7"
                              />
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
                                checked={!!data.person.handbill}
                                title="Handbill"
                                containerStyle={{ flex: 1 }}
                              />
                              <CheckBox
                                checked={!!data.person.letter}
                                title="Letter"
                                containerStyle={{ flex: 1 }}
                              />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                              <CheckBox
                                checked={!!data.person.invitation}
                                title="Invitation"
                                containerStyle={{ flex: 1 }}
                              />
                              <CheckBox
                                checked={!!data.person.guestTag}
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
                              checked={!!data.person.transport}
                              title="Yes"
                              containerStyle={{ flex: 1 }}
                            />
                          </ThemeProvider>
                        </Section>

                        <Section title="Notes" hideDivider>
                          <FlatList
                            data={data.person.notes}
                            extraData={noteLoading}
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
                                  fontFamily: Theme.fonts.medium,
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
                )
              )}
            </>
          );
        }}
      </Query>
    </View>
  );
};

export default ViewContact;
