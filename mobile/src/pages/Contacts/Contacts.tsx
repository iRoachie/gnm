import React, { useState } from 'react';
import { View, StyleSheet, Platform, FlatList, Text } from 'react-native';
import { FAB, List, ActivityIndicator, Appbar } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import debounce from 'lodash.debounce';

import { Person } from '../../../../core/prisma-client/index';
import { Theme } from '../../util';
import { Query } from 'react-apollo';
import { contactsQuery } from '../../graphql';

const Contacts: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [search, setSearch] = useState('');
  const [dbSearch, setdbSearch] = useState('');

  let searchDb = (value: string) => {
    setdbSearch(value);
  };

  searchDb = debounce(searchDb, 300);

  const goToNewContact = () => {
    navigation.navigate('NewContact');
  };

  const toggleFilter = () => {
    //
  };

  const viewContact = (contact: any) => {
    navigation.push('ViewContact', { contact });
  };

  const updateSearch = (value: string) => {
    setSearch(value);
    searchDb(value);
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark {...Theme.Appbar.Header}>
        <Appbar.Content title="Contacts" {...Theme.Appbar.Content} />
        <Appbar.Action icon="filter-list" onPress={toggleFilter} />
      </Appbar.Header>

      <SearchBar
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        placeholder="Search Contacts"
        inputStyle={{
          fontSize: 17,
          fontFamily: Theme.fonts.medium,
          marginLeft: 10,
        }}
        inputContainerStyle={Platform.select({
          ios: {
            backgroundColor: '#f6f6f6',
          },
        })}
        containerStyle={Platform.select({
          ios: {
            backgroundColor: Theme.background,
          },
        })}
        value={search}
        onChangeText={updateSearch}
        cancelButtonProps={{
          color: Theme.primary,
          buttonTextStyle: { fontFamily: Theme.fonts.medium },
        }}
      />

      <Query
        query={contactsQuery}
        notifyOnNetworkStatusChange
        variables={{ search: dbSearch }}
      >
        {({ loading, error, data, refetch }) => {
          return loading ? (
            <ActivityIndicator style={{ marginTop: 16 }} />
          ) : error ? (
            <Text>`Error!: ${error}`</Text>
          ) : (
            <FlatList<Person>
              data={data.persons.data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <List.Item
                  title={item.name}
                  titleStyle={{ fontFamily: Theme.fonts.medium }}
                  descriptionStyle={{ fontFamily: Theme.fonts.regular }}
                  description={item.address}
                  onPress={() => viewContact(item)}
                />
              )}
              ListEmptyComponent={
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 16,
                    fontSize: 16,
                    fontFamily: Theme.fonts.regular,
                  }}
                >
                  No Contacts
                </Text>
              }
            />
          );
        }}
      </Query>

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
