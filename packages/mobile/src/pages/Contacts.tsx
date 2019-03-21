import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, DefaultTheme, FAB } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';

const Contacts: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const goToNewContact = () => {
    navigation.navigate('NewContact');
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark>
        <Appbar.Content
          title="Contacts"
          titleStyle={{ fontFamily: DefaultTheme.fonts.medium, fontSize: 17 }}
        />
      </Appbar.Header>

      <FAB style={styles.fab} icon="add" onPress={goToNewContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Contacts;
