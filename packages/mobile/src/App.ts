import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { Login, NewContact, AuthLoading } from './pages';
import { Theme } from './util';

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

export default createAppContainer(
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
