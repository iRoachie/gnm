import React, { useContext, useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import thousands from 'thousands';
import { NavigationScreenProps } from 'react-navigation';
import { Query } from 'react-apollo';

import { Theme, AuthContext } from '../../util';
import { dashboardQuery } from '../../graphql';

import TotalBanner from './TotalBanner';
import DashboardSquare from './DashboardSquare';

const Dashboard: React.FunctionComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const [user, setUser] = useState('...');
  const { getUser } = useContext(AuthContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const user = await getUser();
    if (user) {
      setUser(user.name);
    }
  };

  const addContact = () => {
    navigation.push('NewContact');
  };

  return (
    <View style={{ flex: 1, backgroundColor: Theme.background }}>
      <Query query={dashboardQuery} notifyOnNetworkStatusChange>
        {({ loading, error, data, refetch }) => {
          return (
            <React.Fragment>
              <Appbar.Header {...Theme.Appbar.Header}>
                <Appbar.Content title={user} {...Theme.Appbar.Content} />
                <Appbar.Action icon="refresh" onPress={() => refetch()} />
              </Appbar.Header>

              {loading ? (
                <ActivityIndicator style={{ marginTop: 16 }} />
              ) : error ? (
                `Error!: ${error}`
              ) : (
                <ScrollView>
                  <View style={{ padding: 16 }}>
                    <TotalBanner
                      total={data.total.count}
                      onPress={addContact}
                    />

                    <Divider style={{ marginTop: 20, marginBottom: 15 }} />

                    <View style={{ flexDirection: 'row' }}>
                      <DashboardSquare
                        caption="Contacts"
                        value={thousands(data.contacts.count)}
                        backgroundColor="#3F51B5"
                      />
                      <View style={{ width: 10 }} />
                      <DashboardSquare
                        caption="Interests"
                        value={thousands(data.interests.count)}
                        backgroundColor="#E64A19"
                      />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <DashboardSquare
                        caption="Prospects"
                        value={thousands(data.prospects.count)}
                        backgroundColor="#4CAF50"
                      />
                      <View style={{ width: 10 }} />
                      <DashboardSquare
                        caption="Members"
                        value={thousands(data.members.count)}
                        backgroundColor="#FFA000"
                      />
                    </View>
                  </View>
                </ScrollView>
              )}
            </React.Fragment>
          );
        }}
      </Query>
    </View>
  );
};

export default Dashboard;
