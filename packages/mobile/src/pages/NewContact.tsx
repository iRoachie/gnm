import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Input,
  ThemeProvider,
  CheckBox,
  TextProps,
} from 'react-native-elements';

import { Theme } from '../util';

const NewContact = () => {
  const [name, setname] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <ThemeProvider
      theme={{
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
        },
      }}
    >
      <View style={{ flex: 1, backgroundColor: Theme.background }}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          bounces={false}
        >
          <View style={styles.wrapper}>
            <Input
              placeholder="Name"
              value={name}
              onChangeText={setname}
              leftIcon={undefined}
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
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ThemeProvider>
  );
};

const Label: React.SFC<TextProps> = props => (
  <Text {...props} style={{ marginBottom: 16, fontSize: 17 }} />
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
});

export default NewContact;
