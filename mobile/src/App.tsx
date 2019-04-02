import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ApolloProvider } from 'react-apollo';

import { Login, NewContact, AddContactSuccess } from './pages';
import Tabs from './containers/Tabs';
import graphqlClient from './graphql';
import { Theme, AuthProvider, AuthLoading } from './util';

const ModalStack = createStackNavigator(
  {
    AppStack: Tabs,
    NewContact,
    AddContactSuccess,
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
  <AuthProvider>
    <ApolloProvider client={graphqlClient}>
      <React.Fragment>
        <StatusBar
          backgroundColor={Theme.darkPrimary}
          barStyle="light-content"
        />
        <PaperProvider theme={theme}>
          <Root />
        </PaperProvider>
      </React.Fragment>
    </ApolloProvider>
  </AuthProvider>
);
