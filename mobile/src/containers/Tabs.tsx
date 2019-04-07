import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { TabScene, NavigationScreenProps } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Dashboard, Contacts, Settings } from '../pages';
import { Theme, StateContext } from '../util';

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

class TabTabs extends React.Component<NavigationScreenProps> {
  static router = Tabs.router;

  render() {
    return (
      <StateContext.Consumer>
        {({ isTablet }) => (
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {isTablet && (
              <Image
                style={{
                  flex: 1,
                  height: Dimensions.get('window').height,
                }}
                source={require('../assets/blue-g-bg.jpg')}
                resizeMode="cover"
              />
            )}

            <View style={{ flex: 2 }}>
              <Tabs navigation={this.props.navigation} />
            </View>
          </View>
        )}
      </StateContext.Consumer>
    );
  }
}

export default TabTabs;
