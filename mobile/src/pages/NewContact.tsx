import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Input,
  ThemeProvider,
  CheckBox,
  TextProps,
} from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import validator from 'validator';
import { NavigationScreenProps } from 'react-navigation';

import { Picker, Loading } from '../components';
import { Theme, StateContext } from '../util';
import {
  ContactSite,
  PersonCreateInput,
  Sex,
} from '../../../core/prisma-client';
import { UserDetails } from '../types';
import client, { newContactMutation } from '../graphql';

const NewContact: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [userInfo, setUserInfo] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [sex, setSex] = useState<Sex | null>(null);
  const [sexError, setSexError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telephone, setTelephone] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [notes, setNotes] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [sites, setSites] = useState<ContactSite[]>([]);
  const [contactSite, setContactSite] = useState<ContactSite | null>(null);
  const [contactSiteError, setContactSiteError] = useState('');

  const { getSites, getUser, connected, addOfflineContact } = useContext(
    StateContext
  );

  useEffect(() => {
    const fetchSites = async () => {
      const sites = await getSites();
      const user = await getUser();

      if (sites && user) {
        setSites(
          sites
            .filter(a => a.country === user.contactSites[0].country)
            .sort((a, b) => (a.name < b.name ? -1 : 1))
        );
        setUserInfo(user!);
      }
    };

    fetchSites();
  }, []);

  const submit = async () => {
    setNameError('');
    setSexError('');
    setContactSiteError('');
    setEmailError('');

    try {
      await validate();
      setLoading(true);
      saveContact();
    } catch (err) {}
  };

  const validate = () => {
    return new Promise((resolve, reject) => {
      let errors = false;

      if (validator.isEmpty(name)) {
        setNameError('Enter contact name');
        errors = true;
      }

      if (sex === null) {
        setSexError('Choose contact sex');
        errors = true;
      }

      if (contactSite === null) {
        setContactSiteError('Select a contact site');
        errors = true;
      }

      if (!validator.isEmpty(email) && !validator.isEmail(email)) {
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
    const data: PersonCreateInput = {
      name,
      status: {
        connect: { title: 'Contact' },
      },
      sex: sex!,
      contactSite: {
        connect: {
          id: contactSite!.id,
        },
      },
      ...(teamCode && { teamCode }),
      ...(email && { email }),
      ...(telephone && { telephone }),
      ...(cellphone && { cellphone }),
      ...(address && { address }),
      ...(age && { age: parseInt(age) }),
      ...(notes && {
        notes: {
          create: {
            date: new Date(),
            message: notes,
            user: {
              connect: {
                id: userInfo!.id,
              },
            },
          },
        },
      }),
    };

    if (!connected) {
      await addOfflineContact(data);
      setLoading(false);

      setTimeout(() => {
        navigation.navigate('AddContactSuccess', { offline: true });
      }, 500);
    } else {
      try {
        await client.mutate({
          mutation: newContactMutation,
          variables: { data },
          refetchQueries: ['DashboardQuery', 'ContactsQuery'],
        });
        setLoading(false);

        setTimeout(() => {
          navigation.navigate('AddContactSuccess');
        }, 500);
      } catch (error) {
        console.log(error);
      }
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

          <Appbar.Content title="New Contact" {...Theme.Appbar.Content} />

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
              value={name}
              onChangeText={setName}
              inputStyle={{
                fontSize: 20,
              }}
              errorMessage={nameError}
            />

            <Label error={sexError}>Sex</Label>

            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
              <CheckBox
                title="Male"
                checked={sex === 'M'}
                onPress={() => setSex('M')}
              />
              <CheckBox
                title="Female"
                checked={sex === 'F'}
                onPress={() => setSex('F')}
              />
            </View>

            <Input
              label="Team Code"
              value={teamCode}
              onChangeText={setTeamCode}
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
            />

            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              clearButtonMode="while-editing"
              errorMessage={emailError}
              autoCorrect={false}
            />

            <Input
              label="Phone"
              value={telephone}
              onChangeText={setTelephone}
              keyboardType="phone-pad"
            />

            <Input
              label="Cell"
              value={cellphone}
              onChangeText={setCellphone}
              keyboardType="phone-pad"
            />

            <Input label="Address" value={address} onChangeText={setAddress} />

            <Input
              label="Age"
              value={age}
              onChangeText={setAge}
              keyboardType="number-pad"
              maxLength={2}
            />

            <Input
              label="Notes"
              value={notes}
              onChangeText={setNotes}
              inputStyle={{
                backgroundColor: '#E5E6E5',
                padding: 15,
                marginTop: 15,
                minHeight: 150,
                borderWidth: 1,
                borderColor: '#D7D9D8',
              }}
              containerStyle={{
                marginBottom: 15,
              }}
              multiline
              textAlignVertical="top"
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ThemeProvider>
  );
};

const Label: React.SFC<TextProps & { error?: string }> = ({
  children,
  error,
  ...rest
}) => (
  <Text
    {...rest}
    style={{
      marginBottom: 10,
      fontSize: 15,
      color: 'rgba(0,0,0,.54)',
      fontFamily: Theme.fonts.semibold,
    }}
  >
    {children}

    {!!error ? (
      <Text
        style={{
          color: Theme.error,
          fontSize: 12,
          fontFamily: Theme.fonts.medium,
        }}
      >{`  ${error}`}</Text>
    ) : (
      ''
    )}
  </Text>
);

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
