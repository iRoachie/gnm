import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

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
  useEffect(() => {
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

  const state = {
    getUser,
    updateUser,
    getSites,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
