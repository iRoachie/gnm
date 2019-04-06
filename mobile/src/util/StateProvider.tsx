import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { Dimensions, View, LayoutChangeEvent } from 'react-native';
import gql from 'graphql-tag';

import client from '../graphql';
import StateContext from './StateContext';
import { ContactSite, PersonCreateInput } from '../../../core/prisma-client';

const sitesQuery = gql`
  {
    contactSites {
      id
      name
      country
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
    fetchSites();
  }, []);

  const updateDeviceWidth = (e: LayoutChangeEvent) => {
    setDeviceWidth(e.nativeEvent.layout.width);
  };

  const fetchSites = async () => {
    try {
      const { data } = await client.query({ query: sitesQuery });
      await updateContactSites(data.contactSites);
    } catch (e) {
      console.log(e);
    }
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

  const updateContactSites = async (sites: ContactSite[]) => {
    await AsyncStorage.setItem('sites', JSON.stringify(sites));
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
        getSites,
        offlineChanged,
        addOfflineContact,
        getOfflineContacts,
        removeOfflineContacts,
      }}
    >
      <View style={{ flex: 1 }} onLayout={updateDeviceWidth}>
        {children}
      </View>
    </StateContext.Provider>
  );
};

export default StateProvider;
