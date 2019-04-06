import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

import client from '../graphql';
import AuthContext from './AuthContext';
import { ContactSite } from '../../../core/prisma-client';
import gql from 'graphql-tag';

const sitesQuery = gql`
  {
    contactSites {
      id
      name
      country
    }
  }
`;

const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleConnectivityChange
    );
    fetchSites();
  }, []);

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

  return (
    <AuthContext.Provider
      value={{
        connected,
        getUser,
        updateUser,
        getSites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
