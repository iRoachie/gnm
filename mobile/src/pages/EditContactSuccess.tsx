import React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Theme } from '../util';

const EditContactSuccess: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const goToContacts = () => {
    navigation.popToTop();
    navigation.navigate('Contacts');
    StatusBar.setBarStyle('light-content');
  };

  return (
    <ThemeProvider
      theme={{
        Button: {
          titleStyle: {
            fontFamily: Theme.fonts.medium,
          },
        },
      }}
    >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.content}>
          <Button
            title="Edits Saved"
            containerStyle={{ marginBottom: 15 }}
            buttonStyle={{ backgroundColor: '#fff' }}
            titleStyle={{
              color: Theme.primary,
            }}
            icon={{ name: 'check-circle', color: Theme.primary }}
            TouchableComponent={View}
            raised
          />
          <Button
            title="View Contacts"
            type="clear"
            icon={{ name: 'person', color: Theme.primary, size: 24 }}
            titleStyle={{ color: '#000' }}
            onPress={goToContacts}
          />
        </View>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
  },
});

export default EditContactSuccess;
