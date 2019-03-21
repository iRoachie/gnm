import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { Login, NewContact, AuthLoading, Dashboard } from './pages';
import { Theme } from './util';
import { StatusBar } from 'react-native';

const AppStack = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: 'Dashboard',
      },
    },
    NewContact: {
      screen: NewContact,
      navigationOptions: {
        title: 'New Contact',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Theme.background,
        borderBottomColor: 'transparent',
      },
      headerTitleStyle: {
        color: Theme.primary,
      },
    },
  }
);
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
