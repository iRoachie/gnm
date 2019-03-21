import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { TabScene } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Dashboard, Contacts } from '../pages';
import { Theme } from '../util';

const Tabs = createMaterialBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: TabScene) => (
          <MaterialIcon name="dashboard" size={24} color={tintColor} />
        ),
      },
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: TabScene) => (
          <MaterialIcon name="face" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Dashboard',
    shifting: true,
    activeTintColor: Theme.primary,
    barStyle: {
      backgroundColor: Theme.background,
    },
  }
);

export default Tabs;
