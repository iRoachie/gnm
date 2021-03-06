import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Theme from '../util/Theme';

const Syncing: React.FunctionComponent = () => (
  <View style={styles.content}>
    <ActivityIndicator size="large" color="green" />

    <View style={styles.loaderContainer}>
      <Text style={styles.message}>Syncing your changes...</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(0,0,0,.9)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  message: {
    color: '#fff',
    fontFamily: Theme.fonts.medium,
    fontSize: 17,
  },
});

export default Syncing;
