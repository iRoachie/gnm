import React, { useState } from 'react';
import { View } from 'react-native';
import { Appbar, DefaultTheme, List } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationScreenProps } from 'react-navigation';

import { Loading } from '../components';

const Settings: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('userState');

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Auth');
    }, 2000);
  };

  return (
    <View style={{ flex: 1 }}>
      <Loading visible={loading} />

      <Appbar.Header dark>
        <Appbar.Content
          title="Settings"
          titleStyle={{ fontFamily: DefaultTheme.fonts.medium, fontSize: 17 }}
        />
      </Appbar.Header>

      <List.Section title="Options">
        <List.Item
          title="Sign out"
          description="Sign out of the app"
          left={props => <List.Icon {...props} icon="exit-to-app" />}
          onPress={signOut}
        />
      </List.Section>
    </View>
  );
};

export default Settings;
