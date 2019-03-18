import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard, Image } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input, ThemeProvider } from 'react-native-elements';
import validator from 'validator';
import AsyncStorage from '@react-native-community/async-storage';

import { Loading } from '../components';
import { Theme } from '../util';

const Login: React.StatelessComponent<NavigationScreenProps> = props => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [loading, updateLoading] = useState(false);

  const emailRef = React.createRef<Input>();
  const passwordRef = React.createRef<Input>();

  const submit = async () => {
    emailRef.current!.blur();
    passwordRef.current!.blur();
    Keyboard.dismiss();

    try {
      await validate();
      updateLoading(true);
      await AsyncStorage.setItem('userState', 'test');

      setTimeout(() => {
        props.navigation.navigate('App');
      }, 1000);
    } catch (e) {}
  };

  const validate = () => {
    return new Promise((resolve, reject) => {
      if (validator.isEmpty(email) && validator.isEmpty(password)) {
        reject({
          emailError: 'Enter your email',
          passwordError: 'Enter your password',
        });
      }

      if (validator.isEmpty(email)) {
        reject({ emailError: 'Enter your email' });
      }

      if (!validator.isEmail(email)) {
        reject({ emailError: 'Enter a valid email' });
      }

      if (validator.isEmpty(password)) {
        reject({ passwordError: 'Enter your password' });
      }

      resolve();
    });
  };

  return (
    <ThemeProvider
      theme={{
        Input: {
          containerStyle: {
            marginBottom: 16,
            paddingHorizontal: 0,
          },
        },
      }}
    >
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Loading visible={loading} />

        <View style={{ width: '80%', alignItems: 'center' }}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.signText}>Sign in</Text>

          <Input
            placeholder="Church email address"
            ref={emailRef}
            returnKeyType="next"
            value={email}
            onChangeText={updateEmail}
            keyboardType="email-address"
            onSubmitEditing={() => passwordRef.current!.focus()}
          />

          <Input
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry
            value={password}
            onChangeText={updatePassword}
            onSubmitEditing={submit}
            ref={passwordRef}
          />

          <Button
            title="Sign in"
            disabled={loading}
            buttonStyle={{
              backgroundColor: Theme.primary,
              borderRadius: 0,
            }}
            containerStyle={{ marginTop: 30, width: '100%' }}
            onPress={submit}
          />
        </View>
      </KeyboardAwareScrollView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 60,
  },
  signText: {
    color: Theme.primary,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
  },
});

export default Login;
