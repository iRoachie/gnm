import React from 'react';
import { View } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { StatusBar, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Login, AuthLoading, NewContact } from './pages';
import { Theme } from './util';
import Tabs from './containers/Tabs';

const ModalStack = createStackNavigator(
  {
    AppStack: Tabs,
    NewContact,
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

    {Platform.OS === 'ios' && (
      <View
        style={{
          backgroundColor: Theme.darkPrimary,
          height: getStatusBarHeight(),
        }}
      />
    )}

    <PaperProvider theme={theme}>
      <Root />
    </PaperProvider>
  </React.Fragment>
);
