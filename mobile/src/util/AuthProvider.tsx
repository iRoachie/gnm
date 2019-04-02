import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from './AuthContext';

const AuthProvider: React.FunctionComponent = ({ children }) => {
  const getUser = async () => {
    const info = await AsyncStorage.getItem('userState');
    return info ? JSON.parse(info) : null;
  };

  const updateUser = async (details: {} | null) => {
    await AsyncStorage.setItem('userState', JSON.stringify(details));
  };

  const state = {
    getUser,
    updateUser,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
