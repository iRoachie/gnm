import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Platform, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, ThemeProvider, CheckBox } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import validator from 'validator';
import { NavigationScreenProps } from 'react-navigation';

import { Picker, Loading, Section } from '../../components';
import { Theme, StateContext } from '../../util';
import {
  ContactSite,
  PersonStatus,
  PersonUpdateInput,
  PersonWhereUniqueInput,
  Team,
} from '../../../../core/prisma-client';
import { MergedPerson } from '../../types';
import client, { updateContactMutation, viewContactQuery } from '../../graphql';

interface ScreenParams {
  person: MergedPerson;
}

const EditContact: React.StatelessComponent<
  NavigationScreenProps<ScreenParams>
> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [sites, setSites] = useState<ContactSite[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [statuses, setStatuses] = useState<PersonStatus[]>([]);
  const [person, setPerson] = useState(navigation.getParam('person')!);
  const { getSites, getUser, getStatuses, getTeams } = useContext(StateContext);

  useEffect(() => {
    const fetchSites = async () => {
      const sites = await getSites();
      const user = await getUser();
      const statuses = await getStatuses();
      const teams = await getTeams();

      if (sites && user && statuses && teams) {
        setSites(
          sites
            .filter(a => a.country === user.contactSites[0].country)
            .sort((a, b) => (a.name < b.name ? -1 : 1))
        );
        setStatuses(statuses);
        setTeams(teams);
      }
    };

    fetchSites();
  }, [getSites, getStatuses, getTeams, getUser]);

  const submit = async () => {
    setEmailError('');
    Keyboard.dismiss();

    try {
      await validate();
      setLoading(true);
      saveContact();
    } catch (err) {}
  };

  const validate = () => {
    return new Promise((resolve, reject) => {
      let errors = false;

      if (person.email && !validator.isEmail(person.email)) {
        setEmailError('Enter valid email address');
        errors = true;
      }

      if (errors) {
        reject();
      } else {
        resolve();
      }
    });
  };

  const saveContact = async () => {
    const {
      id,
      contactSite,
      team,
      status,
      notes,
      name,
      sex,
      __typename,
      ...rest
    } = person;
    const data: PersonUpdateInput = {
      status: {
        connect: { title: person.status.title! },
      },
      contactSite: {
        connect: {
          id: person.contactSite.id!,
        },
      },
      team: {
        connect: {
          id: person.team.id,
        },
      },
      ...rest,
    };

    const where: PersonWhereUniqueInput = {
      id,
    };

    try {
      await client.mutate({
        mutation: updateContactMutation,
        variables: { where, data },
        refetchQueries: [
          'DashboardQuery',
          'ContactsQuery',
          {
            query: viewContactQuery,
            variables: { id },
          },
        ],
      });
      setLoading(false);
      setTimeout(() => {
        navigation.navigate('EditContactSuccess');
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const updateValue = (data: Partial<MergedPerson>) => {
    setPerson({ ...person, ...data });
  };

  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: Theme.primary,
        },
        Input: {
          containerStyle: {
            paddingHorizontal: 0,
            marginBottom: 30,
          },
          inputContainerStyle: {
            borderBottomColor: '#eee',
          },
          labelStyle: {
            fontFamily: Theme.fonts.semibold,
            color: 'rgba(0,0,0,.54)',
            fontSize: 15,
            fontWeight: Platform.OS === 'ios' ? '600' : '400',
          },
          errorStyle: {
            marginLeft: 0,
            fontFamily: Theme.fonts.medium,
          },
          inputStyle: {
            fontSize: 15,
            fontFamily: Theme.fonts.medium,
          },
        },
        CheckBox: {
          containerStyle: {
            marginLeft: 0,
            borderWidth: 0,
            backgroundColor: '#fff',
            paddingTop: 0,
            paddingLeft: 2,
          },
          textStyle: {
            fontFamily: Theme.fonts.medium,
            fontWeight: Platform.OS === 'ios' ? '600' : '400',
            fontSize: 15,
          },
          iconType: 'material',
          checkedIcon: 'radio-button-checked',
          uncheckedIcon: 'radio-button-unchecked',
        },
      }}
    >
      <Loading visible={loading} />

      <View style={{ flex: 1, backgroundColor: Theme.background }}>
        <Appbar.Header {...Theme.Appbar.Header}>
          <Appbar.Action icon="close" onPress={() => navigation.goBack()} />

          <Appbar.Content title="Edit Contact" {...Theme.Appbar.Content} />

          <Appbar.Action icon="done" onPress={submit} />
        </Appbar.Header>

        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          style={{ borderRadius: 2 }}
        >
          <View style={styles.wrapper}>
            <Input
              label="Name"
              placeholder="Full name"
              value={person.name}
              inputStyle={{
                fontSize: 20,
                color: 'grey',
              }}
              editable={false}
            />

            <Input
              label="Team Code"
              value={person.teamCode}
              onChangeText={a => updateValue({ teamCode: a })}
            />

            <Picker<Partial<PersonStatus>>
              label="Status"
              message="Status"
              displayKey="title"
              displayValue="title"
              values={statuses}
              value={person.status}
              containerStyle={{ marginBottom: 30 }}
              onPress={a => updateValue({ status: a })}
            />

            <Picker<ContactSite>
              label="Contact Site"
              message="Contact Site"
              displayKey="id"
              displayValue="name"
              values={sites}
              value={person.contactSite}
              containerStyle={{ marginBottom: 30 }}
              onPress={a => updateValue({ contactSite: a })}
            />

            <Picker<Team>
              label="Team"
              message="Team"
              displayKey="id"
              displayValue="name"
              values={teams}
              value={person.team}
              onPress={a => updateValue({ team: a })}
              containerStyle={{ marginBottom: 30 }}
            />

            <Input
              label="Email"
              value={person.email}
              autoCapitalize="none"
              keyboardType="email-address"
              clearButtonMode="while-editing"
              errorMessage={emailError}
              onChangeText={a => updateValue({ email: a })}
              autoCorrect={false}
            />

            <Input
              label="Phone"
              value={person.telephone}
              keyboardType="phone-pad"
              onChangeText={a => updateValue({ telephone: a })}
            />

            <Input
              label="Cell"
              value={person.cellphone}
              keyboardType="phone-pad"
              onChangeText={a => updateValue({ cellphone: a })}
            />

            <Input
              label="Address"
              value={person.address}
              onChangeText={a => updateValue({ address: a })}
            />

            <Input
              label="Age"
              value={person.age ? String(person.age) : ''}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={a => updateValue({ age: parseInt(a) })}
            />
          </View>

          <Section title="Lessons Completed" topDivider>
            <ThemeProvider
              theme={{
                CheckBox: {
                  containerStyle: {
                    marginLeft: 0,
                  },
                  checkedColor: Theme.primary,
                },
              }}
            >
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <CheckBox
                  title="1"
                  checked={person.lesson1}
                  onPress={() => updateValue({ lesson1: !person.lesson1 })}
                />
                <CheckBox
                  title="2"
                  checked={person.lesson2}
                  onPress={() => updateValue({ lesson2: !person.lesson2 })}
                />
                <CheckBox
                  title="3"
                  checked={person.lesson3}
                  onPress={() => updateValue({ lesson3: !person.lesson3 })}
                />
                <CheckBox
                  title="4"
                  checked={person.lesson4}
                  onPress={() => updateValue({ lesson4: !person.lesson4 })}
                />
                <CheckBox
                  title="5"
                  checked={person.lesson5}
                  onPress={() => updateValue({ lesson5: !person.lesson5 })}
                />
                <CheckBox
                  title="6"
                  checked={person.lesson6}
                  onPress={() => updateValue({ lesson6: !person.lesson6 })}
                />
                <CheckBox
                  title="7"
                  checked={person.lesson7}
                  onPress={() => updateValue({ lesson7: !person.lesson7 })}
                />
              </View>
            </ThemeProvider>
          </Section>

          <Section title="Received">
            <ThemeProvider
              theme={{
                CheckBox: {
                  containerStyle: {
                    flex: 1,
                    marginLeft: 0,
                  },
                  checkedColor: Theme.primary,
                },
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  title="Handbill"
                  checked={person.handbill}
                  onPress={() => updateValue({ handbill: !person.handbill })}
                />
                <CheckBox
                  title="Letter"
                  checked={person.letter}
                  onPress={() => updateValue({ letter: !person.letter })}
                />
              </View>

              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  title="Invitation"
                  checked={person.invitation}
                  onPress={() =>
                    updateValue({ invitation: !person.invitation })
                  }
                />
                <CheckBox
                  title="Guest Tag"
                  checked={person.guestTag}
                  onPress={() => updateValue({ guestTag: !person.guestTag })}
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
                    flex: 1,
                  },
                  checkedColor: Theme.primary,
                },
              }}
            >
              <CheckBox
                title="Yes"
                checked={person.transport}
                onPress={() => updateValue({ transport: !person.transport })}
              />
            </ThemeProvider>
          </Section>
        </KeyboardAwareScrollView>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default EditContact;
