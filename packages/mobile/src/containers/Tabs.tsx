import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { TabScene } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Dashboard, Persons, Settings } from '../pages';
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
      screen: Persons,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: TabScene) => (
          <MaterialIcon name="face" size={24} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }: TabScene) => (
          <MaterialIcon name="settings" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Dashboard',
    activeTintColor: Theme.primary,
    barStyle: {
      backgroundColor: '#F8F8F8',
    },
    // @ts-ignore
    renderLabel: ({ color, route }) => {
      return (
        <Text
          style={{
            fontFamily: Theme.fonts.medium,
            color,
            textAlign: 'center',
            fontSize: 12,
          }}
        >
          {route.routeName}
        </Text>
      );
    },
  }
);

export default Tabs;
