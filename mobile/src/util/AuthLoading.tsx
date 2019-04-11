import React, { useEffect, useContext } from 'react';
import { NavigationScreenProps } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import Loading from '../components/Loading';
import StateContext from './StateContext';

const AuthLoading: React.FunctionComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const { getUser } = useContext(StateContext);

  useEffect(() => {
    getAuth();
  }, []);

  const getAuth = async () => {
    const user = await getUser();
    navigation.navigate(user ? 'App' : 'Auth');

    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  };

  return <Loading visible={true} />;
};

export default AuthLoading;
