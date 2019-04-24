import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { FAB, List, ActivityIndicator, Appbar } from 'react-native-paper';
import { Query } from 'react-apollo';
import { NavigationScreenProps } from 'react-navigation';

import { Theme, StateContext } from '../util';
import { teamsQuery } from '../graphql';
import { UserDetails, ReturnedTeam } from '../types';
import { OfflineBanner } from '../components';

const Teams: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [userInfo, setUserInfo] = useState<UserDetails | null>(null);
  const { connected, getUser } = useContext(StateContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();

      if (user) {
        setUserInfo(user!);
      }
    };

    fetchUser();
  }, []);

  const goToNewTeam = () => {
    navigation.navigate('NewTeam');
  };

  return (
    <View style={{ flex: 1 }}>
      {!connected ? (
        <>
          <Appbar.Header dark {...Theme.Appbar.Header}>
            <Appbar.Action
              icon="arrow-back"
              onPress={() => navigation.goBack()}
            />

            <Appbar.Content title="Teams" {...Theme.Appbar.Content} />
          </Appbar.Header>

          <OfflineBanner />
        </>
      ) : (
        <Query query={teamsQuery} notifyOnNetworkStatusChange>
          {({ loading, error, data, refetch }) => (
            <>
              <Appbar.Header dark {...Theme.Appbar.Header}>
                <Appbar.Action
                  icon="arrow-back"
                  onPress={() => navigation.goBack()}
                />

                <Appbar.Content title="Teams" {...Theme.Appbar.Content} />

                {!loading && !error && (
                  <Appbar.Action icon="refresh" onPress={() => refetch()} />
                )}
              </Appbar.Header>

              {loading && <ActivityIndicator style={{ marginTop: 16 }} />}

              {!loading && !error && (
                <FlatList<ReturnedTeam>
                  data={data.teams}
                  keyExtractor={item => item.id}
                  keyboardShouldPersistTaps="always"
                  renderItem={({ item }) => (
                    <List.Item
                      title={item.name}
                      titleStyle={{ fontFamily: Theme.fonts.medium }}
                      descriptionStyle={{ fontFamily: Theme.fonts.medium }}
                      {...!!userInfo &&
                        userInfo.role.permissions.includes('Team:ListAll') && {
                          description: item.contactSite.name,
                        }}
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
                      No Teams
                    </Text>
                  }
                />
              )}
            </>
          )}
        </Query>
      )}

      <FAB style={styles.fab} icon="add" onPress={goToNewTeam} />
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

export default Teams;
