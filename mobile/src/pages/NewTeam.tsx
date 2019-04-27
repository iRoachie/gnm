import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Platform, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, ThemeProvider } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import validator from 'validator';
import { NavigationScreenProps } from 'react-navigation';

import { Picker, Loading } from '../components';
import { Theme, StateContext } from '../util';
import { ContactSite, TeamCreateInput } from '../../../core/prisma-client';
import client, { newTeamMutation } from '../graphql';
import { UserDetails } from '../types';

const NewContact: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [userInfo, setUserInfo] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [sites, setSites] = useState<ContactSite[]>([]);
  const [contactSite, setContactSite] = useState<ContactSite | null>(null);
  const [contactSiteError, setContactSiteError] = useState('');

  const { getSites, getUser } = useContext(StateContext);

  useEffect(() => {
    const fetchSites = async () => {
      const sites = await getSites();
      const user = await getUser();

      if (sites && user) {
        const filteredSites =
          user.contactSites.length > 0
            ? sites.filter(a => a.country === user.contactSites[0].country)
            : sites;

        if (user.contactSites.length > 0) {
          setContactSite(sites.find(a => a.id === user.contactSites[0].id)!);
        }

        setSites(filteredSites.sort((a, b) => (a.name < b.name ? -1 : 1)));
        setUserInfo(user);
      }
    };

    fetchSites();
  }, [getSites, getUser]);

  const submit = async () => {
    Keyboard.dismiss();
    setNameError('');
    setContactSiteError('');

    try {
      await validate();
      setLoading(true);
      saveTeam();
    } catch (err) {}
  };

  const validate = () => {
    return new Promise((resolve, reject) => {
      let errors = false;

      if (validator.isEmpty(name)) {
        setNameError('Enter contact name');
        errors = true;
      }

      if (contactSite === null) {
        setContactSiteError('Select a contact site');
        errors = true;
      }

      if (errors) {
        reject();
      } else {
        resolve();
      }
    });
  };

  const saveTeam = async () => {
    const data: TeamCreateInput = {
      name,
      contactSite: {
        connect: {
          id: contactSite!.id,
        },
      },
    };

    try {
      await client.mutate({
        mutation: newTeamMutation,
        variables: { data },
        refetchQueries: ['TeamsQuery'],
      });
      setLoading(false);

      setTimeout(() => {
        navigation.navigate('AddTeamSuccess');
      }, 500);
    } catch (error) {
      console.log(error);
    }
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
      }}
    >
      <Loading visible={loading} />
      <View style={{ flex: 1, backgroundColor: Theme.background }}>
        <Appbar.Header {...Theme.Appbar.Header}>
          <Appbar.Action icon="close" onPress={() => navigation.goBack()} />

          <Appbar.Content title="New Team" {...Theme.Appbar.Content} />

          <Appbar.Action icon="done" onPress={submit} />
        </Appbar.Header>

        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          style={{ borderRadius: 2 }}
        >
          <View style={styles.wrapper}>
            <Input
              label="Team Name"
              placeholder="Name of team or Area Leader"
              value={name}
              onChangeText={setName}
              inputStyle={{
                fontSize: 20,
              }}
              errorMessage={nameError}
            />

            <Picker<ContactSite>
              label="Contact Site"
              message="Contact Site"
              displayKey="id"
              displayValue="name"
              values={sites}
              value={contactSite}
              onPress={a => setContactSite(a)}
              containerStyle={{ marginBottom: 30 }}
              error={contactSiteError}
              disabled={
                !!userInfo &&
                !userInfo.role.permissions.includes('Team:ListAll')
              }
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 2,
  },
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default NewContact;
