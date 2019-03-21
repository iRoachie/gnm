import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import {
  Appbar,
  DefaultTheme,
  FAB,
  List,
  ActivityIndicator,
} from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';

import { SearchBar } from 'react-native-elements';

const Contacts: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const result = await response.json();
      setContacts(result.results);
      setFetching(false);
    };

    getContacts();
  }, []);

  const goToNewContact = () => {
    navigation.navigate('NewContact');
  };

  const toggleFilter = () => {
    //
  };

  const viewContact = (contact: any) => {
    //
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark>
        <Appbar.Content
          title="Contacts"
          titleStyle={{ fontFamily: DefaultTheme.fonts.medium, fontSize: 17 }}
        />

        <Appbar.Action icon="filter-list" onPress={toggleFilter} />
      </Appbar.Header>

      <SearchBar
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        placeholder="Search Contacts"
        inputStyle={{
          fontSize: Platform.OS === 'ios' ? 17 : 15,
        }}
        value={search}
        onChangeText={setSearch}
      />

      {fetching ? (
        <ActivityIndicator style={{ marginTop: 16 }} />
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={item => item.login.uuid}
          renderItem={({ item }) => (
            <List.Item
              title={`${item.name.first} ${item.name.last}`}
              description={item.location.street}
              onPress={() => viewContact(item)}
            />
          )}
        />
      )}

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
