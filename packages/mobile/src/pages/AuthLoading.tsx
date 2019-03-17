import React, { useEffect } from 'react';
import { NavigationScreenProps } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { Loading } from '../components';

const AuthLoading: React.StatelessComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  useEffect(() => {
    getAuth();
  }, []);

  const getAuth = async () => {
    const userState = await AsyncStorage.getItem('userState');
    navigation.navigate(userState ? 'App' : 'Auth');
  };

  return <Loading visible={true} />;
};

export default AuthLoading;
