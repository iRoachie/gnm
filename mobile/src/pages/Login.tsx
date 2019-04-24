import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Image,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input, ThemeProvider } from 'react-native-elements';
import validator from 'validator';

import { Theme, StateContext } from '../util';
import client, { loginMutation } from '../graphql';
import { ContactSite } from '../../../core/prisma-client';
import { ReturnedUserRole } from '../types';

type Response = {
  login: {
    id: string;
    name: string;
    email: string;
    jwt: string;
    role: ReturnedUserRole;
    contactSites: ContactSite[];
  };
};

const Login: React.FunctionComponent<NavigationScreenProps> = props => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, updateLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { updateUser, isTablet, fetchTeams } = useContext(StateContext);

  const emailRef = React.createRef<Input>();
  const passwordRef = React.createRef<Input>();

  const submit = async () => {
    emailRef.current!.blur();
    passwordRef.current!.blur();
    Keyboard.dismiss();

    setEmailError('');
    setPasswordError('');
    setErrorMessage('');

    try {
      await validate();
      updateLoading(true);
      await login();
    } catch (e) {
      if (e.emailError) {
        setEmailError(e.emailError);
      }

      if (e.passwordError) {
        setPasswordError(e.passwordError);
      }
    }
  };

  const login = async () => {
    try {
      const { data } = await client.mutate<Response>({
        mutation: loginMutation,
        variables: {
          email,
          password,
        },
      });

      await updateUser(data!.login);
      await fetchTeams();

      setTimeout(() => {
        props.navigation.navigate('App');
      }, 1000);
    } catch (error) {
      let message = `Couldn't sign in at this time. Try again later.`;

      if (error.graphQLErrors.length > 0) {
        message = error.graphQLErrors[0].message;
      }

      setTimeout(() => {
        setErrorMessage(message);
        updateLoading(false);
      }, 1000);
    }
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
          inputStyle: {
            fontFamily: Theme.fonts.medium,
            fontSize: 15,
          },
          labelStyle: {
            fontFamily: Theme.fonts.semibold,
            color: 'rgba(0,0,0,.54)',
            fontSize: 15,
            fontWeight: Platform.OS === 'ios' ? '600' : '400',
          },
          errorStyle: {
            fontFamily: Theme.fonts.medium,
            marginLeft: 0,
          },
        },
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {isTablet && (
          <Image
            style={{
              width: Dimensions.get('window').width / 2,
              height: Dimensions.get('window').height,
            }}
            source={require('../assets/blue-g-bg.jpg')}
            resizeMode="cover"
          />
        )}

        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {Platform.OS === 'ios' && (
            <StatusBar
              barStyle="dark-content"
              backgroundColor={Theme.darkPrimary}
            />
          )}

          <View style={{ width: '80%', alignItems: 'center' }}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.signText}>Sign in</Text>

            <Input
              label="Church email address"
              ref={emailRef}
              returnKeyType="next"
              value={email}
              onChangeText={updateEmail}
              keyboardType="email-address"
              onSubmitEditing={() => passwordRef.current!.focus()}
              editable={!loading}
              autoCapitalize="none"
              errorMessage={emailError}
              textContentType="emailAddress"
              autoCorrect={false}
            />

            <Input
              label="Password"
              returnKeyType="done"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={updatePassword}
              onSubmitEditing={submit}
              ref={passwordRef}
              editable={!loading}
              errorMessage={passwordError}
              textContentType="password"
              rightIcon={{
                name: 'visibility',
                color: showPassword ? Theme.primary : 'rgba(0, 0, 0, 0.28)',
                onPress: () => setShowPassword(!showPassword),
              }}
            />

            <Text style={styles.errorMessage}>{errorMessage}</Text>

            <Button
              title="Sign in"
              loading={loading}
              disabled={loading}
              buttonStyle={{
                backgroundColor: Theme.primary,
                borderRadius: 0,
              }}
              loadingProps={{ color: Theme.primary }}
              titleStyle={{ fontFamily: Theme.fonts.semibold }}
              containerStyle={{ marginTop: 30, width: '100%' }}
              onPress={submit}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
    paddingVertical: 30,
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
    fontFamily: Theme.fonts.medium,
  },
  errorMessage: {
    color: 'red',
    fontFamily: Theme.fonts.medium,
    fontSize: 16,
  },
});

export default Login;
