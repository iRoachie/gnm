import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Appbar, DefaultTheme } from 'react-native-paper';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import thousands from 'thousands';
import { NavigationScreenProps } from 'react-navigation';

import DashboardSquare from './DashboardSquare';
import { Theme } from '../../util';

const Dashboard: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const addContact = () => {
    navigation.push('NewContact');
  };

  return (
    <View style={{ flex: 1, backgroundColor: Theme.background }}>
      <Appbar.Header dark>
        <Appbar.Content
          title="Breath of Life SDA"
          titleStyle={{ fontFamily: DefaultTheme.fonts.medium, fontSize: 17 }}
        />
      </Appbar.Header>

      <View style={{ padding: 16 }}>
        <View style={styles.banner}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              padding: 10,
              paddingTop: 15,
            }}
          >
            <Icon
              name="assignment-ind"
              color="rgba(255,255,255,0.7)"
              size={40}
            />

            <View style={{ marginLeft: 16 }}>
              <Text style={styles.totalContactsLabel}>{thousands('1350')}</Text>
              <Text style={styles.totalContactsCaption}>Total Persons</Text>
            </View>
          </View>

          <TouchableHighlight
            underlayColor="rgba(255,255,255,.7)"
            onPress={addContact}
            style={{
              width: 80,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon color={Theme.primary} size={30} name="add" />
          </TouchableHighlight>
        </View>

        <Divider style={{ marginVertical: 30 }} />

        <View style={{ flexDirection: 'row' }}>
          <DashboardSquare
            caption="Contacts"
            value={14}
            backgroundColor="#3F51B5"
          />
          <View style={{ width: 10 }} />
          <DashboardSquare
            caption="Interests"
            value={24}
            backgroundColor="#E64A19"
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <DashboardSquare
            caption="Prospects"
            value={13}
            backgroundColor="#4CAF50"
          />
          <View style={{ width: 10 }} />
          <DashboardSquare
            caption="Members"
            value={0}
            backgroundColor="#FFA000"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: Theme.primary,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    overflow: 'hidden',
  },
  totalContactsLabel: {
    fontSize: 45,
    color: '#fff',
    marginTop: -12,
  },
  totalContactsCaption: {
    color: 'rgba(255,255,255,0.7)',
  },
});

export default Dashboard;
