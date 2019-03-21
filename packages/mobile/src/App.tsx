import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Login, AuthLoading, NewContact, AddPersonSuccess } from './pages';
import { Theme } from './util';
import Tabs from './containers/Tabs';

const ModalStack = createStackNavigator(
  {
    AppStack: Tabs,
    NewContact,
    AddPersonSuccess,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const Root = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: ModalStack,
      Auth: Login,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.primary,
    accent: Theme.primary,
  },
};

export default () => (
  <React.Fragment>
    <StatusBar backgroundColor={Theme.darkPrimary} barStyle="light-content" />
    <PaperProvider theme={theme}>
      <Root />
    </PaperProvider>
  </React.Fragment>
);
