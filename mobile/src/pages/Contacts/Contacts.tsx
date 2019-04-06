import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Platform, FlatList, Text } from 'react-native';
import { FAB, List, ActivityIndicator, Appbar } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';
import { SearchBar, Divider } from 'react-native-elements';
import debounce from 'lodash.debounce';
import uuid from 'uuid/v1';

import {
  Person,
  PersonCreateInput,
} from '../../../../core/prisma-client/index';
import { Theme, StateContext } from '../../util';
import { Query } from 'react-apollo';
import { contactsQuery } from '../../graphql';
import { OfflineBanner } from '../../components';
import { OfflinePerson } from '../../types';

const Contacts: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [search, setSearch] = useState('');
  const [dbSearch, setdbSearch] = useState('');
  const [offlineContacts, setOfflineContacts] = useState<OfflinePerson[]>([]);

  const { connected, getOfflineContacts } = useContext(StateContext);

  useEffect(() => {
    const fetchOffline = async () => {
      const contacts = await getOfflineContacts();

      if (contacts) {
        setOfflineContacts(
          contacts.map(a => ({
            id: uuid(),
            ...a,
          }))
        );
      }
    };

    fetchOffline();
  }, []);

  let searchDb = (value: string) => {
    setdbSearch(value);
  };

  searchDb = debounce(searchDb, 300);

  const goToNewContact = () => {
    navigation.navigate('NewContact');
  };

  const viewContact = (contact: Person | OfflinePerson) => {
    if (connected) {
      navigation.push('ViewContact', { id: contact.id });
    }
  };

  const updateSearch = (value: string) => {
    setSearch(value);
    searchDb(value.toLowerCase().trim());
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header dark {...Theme.Appbar.Header}>
        <Appbar.Content title="Contacts" {...Theme.Appbar.Content} />
      </Appbar.Header>

      {!connected && (
        <>
          <OfflineBanner />

          <View style={{ paddingHorizontal: 16 }}>
            <Divider style={{ marginTop: 20, marginBottom: 30 }} />
          </View>

          <Text
            style={{
              fontFamily: Theme.fonts.semibold,
              textAlign: 'center',
              marginBottom: 15,
              fontSize: 15,
              color: 'rgba(0,0,0,.87)',
            }}
          >
            Offline Contacts
          </Text>

          <FlatList
            data={offlineContacts}
            keyExtractor={a => a.id}
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
                No Offline Contacts
              </Text>
            }
          />
        </>
      )}

      {connected && (
        <Query
          query={contactsQuery}
          notifyOnNetworkStatusChange
          variables={{ search: dbSearch }}
        >
          {({ loading, error, data, refetch }) => {
            return loading ? (
              <ActivityIndicator style={{ marginTop: 16 }} />
            ) : error ? null : (
              <>
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
                      backgroundColor: '#fff',
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
                <FlatList<Person>
                  data={data.persons.data}
                  keyExtractor={item => item.id}
                  keyboardShouldPersistTaps="always"
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
              </>
            );
          }}
        </Query>
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
