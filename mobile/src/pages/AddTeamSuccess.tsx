import React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Theme } from '../util';

const AddTeamSuccess: React.StatelessComponent<NavigationScreenProps<{}>> = ({
  navigation,
}) => {
  const goToTeams = () => {
    navigation.popToTop();
    navigation.navigate('Teams');
    StatusBar.setBarStyle('light-content');
  };

  const addAnother = () => {
    navigation.popToTop();
    navigation.navigate('NewTeam');
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
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

        <View style={styles.content}>
          <Button
            title="Submitted"
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
            title="Add Another"
            containerStyle={{ marginBottom: 15 }}
            buttonStyle={{
              backgroundColor: Theme.primary,
            }}
            icon={{ name: 'add-circle', color: '#fff' }}
            onPress={addAnother}
          />
          <Button
            title="View Teams"
            type="clear"
            icon={{ name: 'person', color: Theme.primary, size: 24 }}
            titleStyle={{ color: '#000' }}
            onPress={goToTeams}
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

export default AddTeamSuccess;
