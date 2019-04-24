import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { Dimensions, View, LayoutChangeEvent } from 'react-native';
import gql from 'graphql-tag';

import client, { teamsQuery } from '../graphql';
import StateContext from './StateContext';
import {
  ContactSite,
  PersonCreateInput,
  PersonStatus,
} from '../../../core/prisma-client';
import { ReturnedTeam } from '../types';

const InfoQuery = gql`
  {
    contactSites {
      id
      name
      country
    }
    statuses {
      title
    }
  }
`;

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [connected, setConnected] = useState(true);
  const [offlineChanged, setOfflineChanged] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width
  );

  useEffect(() => {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleConnectivityChange
    );

    fetchInfo();
  }, []);

  const updateDeviceWidth = (e: LayoutChangeEvent) => {
    setDeviceWidth(e.nativeEvent.layout.width);
  };

  const fetchInfo = async () => {
    try {
      const { data } = await client.query({ query: InfoQuery });
      await Promise.all([
        updateContactSites(data.contactSites),
        updateStatuses(data.statuses),
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchTeams = async () => {
    try {
      const user = await getUser();

      if (user && user.role.permissions.includes('Team:ListArea')) {
        const { data } = await client.query({ query: teamsQuery });
        await updateTeams(data.teams);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateTeams = async (teams: ReturnedTeam[]) => {
    await AsyncStorage.setItem('teams', JSON.stringify(teams));
  };

  const getTeams = async () => {
    const teams = await AsyncStorage.getItem('teams');
    return teams ? JSON.parse(teams) : [];
  };

  const handleConnectivityChange = (
    isConnected: React.SetStateAction<boolean>
  ) => {
    setConnected(isConnected);
  };

  const getUser = async () => {
    const info = await AsyncStorage.getItem('userState');
    return info ? JSON.parse(info) : null;
  };

  const updateUser = async (details: {} | null) => {
    await AsyncStorage.setItem('userState', JSON.stringify(details));
  };

  const getSites = async () => {
    const info = await AsyncStorage.getItem('sites');
    return info ? JSON.parse(info) : [];
  };

  const getStatuses = async () => {
    const info = await AsyncStorage.getItem('statuses');
    return info ? JSON.parse(info) : [];
  };

  const updateContactSites = (sites: ContactSite[]) => {
    return AsyncStorage.setItem('sites', JSON.stringify(sites));
  };

  const updateStatuses = (statuses: PersonStatus[]) => {
    return AsyncStorage.setItem('statuses', JSON.stringify(statuses));
  };

  const getOfflineContacts = async () => {
    const contacts = await AsyncStorage.getItem('offlineContacts');
    return contacts ? JSON.parse(contacts) : [];
  };

  const addOfflineContact = async (details: PersonCreateInput) => {
    const contacts = await getOfflineContacts();
    contacts.push(details);
    setOfflineChanged(offlineChanged + 1);
    await AsyncStorage.setItem('offlineContacts', JSON.stringify(contacts));
  };

  const removeOfflineContacts = async () => {
    await AsyncStorage.removeItem('offlineContacts');
    setOfflineChanged(offlineChanged + 1);
  };

  return (
    <StateContext.Provider
      value={{
        isTablet: deviceWidth > 1000,
        connected,
        getUser,
        updateUser,
        getStatuses,
        getSites,
        offlineChanged,
        addOfflineContact,
        getOfflineContacts,
        removeOfflineContacts,
        fetchTeams,
        getTeams,
      }}
    >
      <View style={{ flex: 1 }} onLayout={updateDeviceWidth}>
        {children}
      </View>
    </StateContext.Provider>
  );
};

export default StateProvider;
