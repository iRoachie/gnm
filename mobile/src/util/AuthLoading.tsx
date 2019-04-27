import React, { useEffect, useContext } from 'react';
import { NavigationScreenProps } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import StateContext from './StateContext';
import { checkVersionFlags } from './versionFlags';

const AuthLoading: React.FunctionComponent<NavigationScreenProps> = ({
  navigation,
}) => {
  const { getUser } = useContext(StateContext);

  useEffect(() => {
    const getAuth = async () => {
      const user = await getUser();
      const upToDate = await checkVersionFlags();

      const needsLogin = !user || !upToDate;

      navigation.navigate(needsLogin ? 'Auth' : 'App');

      setTimeout(() => {
        SplashScreen.hide();
      }, 500);
    };

    getAuth();
  }, [getUser, navigation]);

  return null;
};

export default AuthLoading;
