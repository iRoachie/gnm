import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Input,
  ThemeProvider,
  CheckBox,
  TextProps,
} from 'react-native-elements';
import { Appbar } from 'react-native-paper';

import { Theme } from '../util';
import { NavigationScreenProps } from 'react-navigation';

const NewContact: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [name, setname] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [notes, setNotes] = useState('');
  const [teamCode, setTeamCode] = useState('');

  const saveContact = () => {
    // Save Contact
    navigation.navigate('AddContactSuccess');
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
          leftIconContainerStyle: {
            marginLeft: 0,
            marginRight: 15,
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
            fontWeight: '400',
          },
          iconType: 'material',
          checkedIcon: 'radio-button-checked',
          uncheckedIcon: 'radio-button-unchecked',
        },
      }}
    >
      <View style={{ flex: 1, backgroundColor: Theme.background }}>
        <Appbar.Header {...Theme.Appbar.Header}>
          <Appbar.Action icon="close" onPress={() => navigation.goBack()} />

          <Appbar.Content title="New Contact" {...Theme.Appbar.Content} />

          <Appbar.Action icon="done" onPress={saveContact} />
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
              onChangeText={setname}
              leftIcon={undefined}
              inputStyle={{
                fontSize: 20,
              }}
            />

            <Label>Sex</Label>

            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
              <CheckBox
                title="Male"
                checked={sex === 'male'}
                onPress={() => setSex('male')}
              />
              <CheckBox
                title="Female"
                checked={sex === 'female'}
                onPress={() => setSex('female')}
              />
            </View>

            <Input
              label="Team Code"
              placeholder="Optional"
              value={teamCode}
              onChangeText={setTeamCode}
            />

            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              clearButtonMode="while-editing"
            />
            <Input
              label="Phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <Input label="Addess" value={address} onChangeText={setAddress} />

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
              leftIcon={undefined}
              inputStyle={{
                backgroundColor: '#E5E6E5',
                padding: 15,
                paddingTop: 15,
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

const Label: React.SFC<TextProps> = props => (
  <Text
    {...props}
    style={{
      marginBottom: 10,
      fontSize: 15,
      color: 'rgba(0,0,0,.54)',
      fontFamily: Theme.fonts.semibold,
    }}
  />
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
