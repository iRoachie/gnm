import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import color from 'color';
import { Icon } from 'react-native-elements';

import { Theme } from '../util';

const OfflineBanner = () => (
  <View style={styles.container}>
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}
    >
      <Icon
        name="signal-wifi-off"
        containerStyle={{ marginRight: 6 }}
        size={15}
      />
      <Text
        style={{
          fontFamily: Theme.fonts.semibold,
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: 15,
        }}
      >
        Looks like you're offline
      </Text>
    </View>

    <Text
      style={{
        fontFamily: Theme.fonts.medium,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 13,
      }}
    >
      Some of the functions of the app may be unavailable. Contacts added while
      offline will be synced once connection restores.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: color(Theme.error)
      .lighten(0.7)
      .hex(),
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: color(Theme.error)
      .lighten(0.8)
      .hex(),
    margin: 15,
    padding: 10,
  },
});

export default OfflineBanner;
