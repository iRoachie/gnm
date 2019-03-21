import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Input,
  ThemeProvider,
  CheckBox,
  TextProps,
} from 'react-native-elements';
import { Appbar, DefaultTheme, List } from 'react-native-paper';

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

  const saveContact = () => {
    // Save Contact
    // Show Done Screen
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
          leftIcon: {
            name: 'add-circle',
            color: Theme.primary,
          },
          leftIconContainerStyle: {
            marginLeft: 0,
            marginRight: 15,
          },
          inputStyle: {
            fontSize: 15,
          },
          placeholderTextColor: 'rgba(0,0,0,.54)',
        },
        CheckBox: {
          containerStyle: {
            marginLeft: 0,
            borderWidth: 0,
            backgroundColor: '#fff',
            paddingTop: 0,
            paddingLeft: 2,
          },
          iconType: 'material',
          checkedIcon: 'radio-button-checked',
          uncheckedIcon: 'radio-button-unchecked',
        },
      }}
    >
      <View style={{ flex: 1, backgroundColor: Theme.background }}>
        <Appbar.Header dark>
          <Appbar.Action icon="close" onPress={() => navigation.goBack()} />

          <Appbar.Content
            title="New Contact"
            titleStyle={{ fontFamily: DefaultTheme.fonts.medium, fontSize: 17 }}
          />

          <Appbar.Action icon="done" onPress={saveContact} />
        </Appbar.Header>

        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          style={{ borderRadius: 2 }}
        >
          <View style={styles.wrapper}>
            <Input
              placeholder="Name"
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
              placeholder="Add email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              clearButtonMode="while-editing"
            />
            <Input
              placeholder="Add phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <Input
              placeholder="Add addess"
              value={address}
              onChangeText={setAddress}
            />

            <Input
              placeholder="Add age"
              value={age}
              onChangeText={setAge}
              keyboardType="number-pad"
              maxLength={2}
            />

            <Input
              placeholder="Notes"
              value={notes}
              onChangeText={setNotes}
              leftIcon={undefined}
              inputStyle={{
                backgroundColor: '#E5E6E5',
                padding: 15,
                paddingTop: 15,
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
    style={{ marginBottom: 10, fontSize: 15, color: 'rgba(0,0,0,.54)' }}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 16,
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
