import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Input, ThemeProvider, Image } from 'react-native-elements';

import { Theme } from '../util';

const Login = () => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  const emailRef = React.createRef<Input>();
  const passwordRef = React.createRef<Input>();

  const submit = () => {
    Keyboard.dismiss();
  };

  return (
    <ThemeProvider
      theme={{
        Input: {
          containerStyle: {
            marginBottom: 16,
          },
        },
      }}
    >
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={{ width: '80%', alignItems: 'center' }}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            containerStyle={{ marginBottom: 60 }}
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
  },
  signText: {
    color: Theme.primary,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
  },
});

export default Login;
