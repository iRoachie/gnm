import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { Login, NewContact, AuthLoading } from './pages';
import { Theme } from './util';
import { StatusBar } from 'react-native';

const AppStack = createStackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      title: 'New Contact',
      headerStyle: {
        backgroundColor: Theme.background,
        borderBottomColor: 'transparent',
      },
      headerTitleStyle: {
        color: Theme.primary,
      },
    },
  },
});
const AuthStack = createStackNavigator(
  { Login },
  {
    headerMode: 'none',
  }
);

const Root = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default () => (
  <React.Fragment>
    <StatusBar backgroundColor={Theme.primary} />
    <Root />
  </React.Fragment>
);
