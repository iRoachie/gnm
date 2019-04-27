/**
 * Figures out if client has the latest version
 */

import AsyncStorage from '@react-native-community/async-storage';

import { AppVersion, versions } from '../constants';
import client from '../graphql';

/**
 * Checks if latest version operations have been completed
 */
export const checkVersionFlags = async () => {
  const versionFlags = await AsyncStorage.getItem('version_flags');

  if (versionFlags) {
    const flags: string[] = JSON.parse(versionFlags);

    if (flags.includes(AppVersion)) {
      return true;
    }

    const version = versions[AppVersion];

    // If this version needs to reset the store
    if (version.reset) {
      await client.resetStore();
    }

    // If this version needs to login again
    return !version.relog;
  }

  await client.clearStore();
  return false;
};

export const setVersionFlags = async () => {
  const flags = Object.keys(versions);
  await AsyncStorage.setItem('version_flags', JSON.stringify(flags));
};
