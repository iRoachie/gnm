import React, { useState, useContext } from 'react';
import { View, Linking, Platform, Text } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';

import { AppVersion } from '../contants';
import { Loading } from '../components';
import { Theme, StateContext } from '../util';
import client from '../graphql';

const Settings: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(StateContext);

  const signOut = async () => {
    setLoading(true);
    await updateUser(null);
    client.clearStore();

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Auth');
    }, 2000);
  };

  const sendFeedback = async () => {
    try {
      await Linking.openURL(
        `mailto:hello.gnm2019@gmail.com?subject=GNM 2019 App Feedback&body=Hello Team GNM!\n\n\n\n\n------------\n\nPlatform: ${
          Platform.OS
        }\nVersion: ${Platform.Version}`
      );
    } catch {}
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Loading visible={loading} />

      <Appbar.Header {...Theme.Appbar.Header}>
        <Appbar.Content title="Settings" {...Theme.Appbar.Content} />
      </Appbar.Header>

      <List.Section theme={{ fonts: { medium: Theme.fonts.medium } }}>
        <List.Item
          title="Send feedback"
          description="Contact admin team for feedback/issues"
          titleStyle={{ fontFamily: Theme.fonts.medium }}
          descriptionStyle={{ fontFamily: Theme.fonts.medium }}
          left={props => <List.Icon {...props} icon="help" />}
          onPress={sendFeedback}
        />

        <List.Item
          title="Sign out"
          description="Sign out of the app"
          titleStyle={{ fontFamily: Theme.fonts.medium }}
          descriptionStyle={{ fontFamily: Theme.fonts.medium }}
          left={props => <List.Icon {...props} icon="exit-to-app" />}
          onPress={signOut}
        />
      </List.Section>

      <Text
        style={{
          fontFamily: Theme.fonts.medium,
          textAlign: 'center',
          color: 'rgba(0,0,0,0.54)',
          marginTop: 16,
          fontSize: 12,
        }}
      >
        Version {AppVersion}
      </Text>
    </View>
  );
};

export default Settings;
