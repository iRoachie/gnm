import React, { useContext, useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
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
      <Appbar.Header {...Theme.Appbar.Header}>
        <Appbar.Content title={user} {...Theme.Appbar.Content} />
      </Appbar.Header>

      <Query query={dashboardQuery}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator style={{ marginTop: 16 }} />;

          if (error) return `Error!: ${error}`;

          return (
            <ScrollView>
              <View style={{ padding: 16 }}>
                <TotalBanner total={data.total.count} onPress={addContact} />

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
          );
        }}
      </Query>
    </View>
  );
};

export default Dashboard;
