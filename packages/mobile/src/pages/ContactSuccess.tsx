import React from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

import { Theme } from '../util';

const ContactSuccess = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Button
        title="Submitted"
        containerStyle={{ marginBottom: 15 }}
        buttonStyle={{ backgroundColor: '#fff' }}
        titleStyle={{ color: Theme.primary }}
        icon={{ name: 'check-circle', color: Theme.primary }}
        TouchableComponent={View}
        raised
      />
      <Button
        title="Add Another"
        containerStyle={{ marginBottom: 15 }}
        buttonStyle={{ backgroundColor: Theme.primary }}
        icon={{ name: 'add-circle', color: '#fff' }}
      />
      <Button
        title="View Contacts"
        type="clear"
        icon={{ name: 'person', color: Theme.primary, size: 24 }}
        titleStyle={{ color: '#000' }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
  },
});

export default ContactSuccess;
