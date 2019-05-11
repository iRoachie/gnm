import { Platform } from 'react-native';

export const AppVersion = Platform.OS === 'ios' ? '1.1.2' : '1.1.2';

const baseVersions = {
  '1.0.0': {
    relog: true,
    reset: true,
  },
  '1.1.0': {
    relog: true,
    reset: true,
  },
  '1.1.1': {
    relog: false,
    reset: false,
  },
  '1.1.2': {
    relog: true,
    reset: true,
  },
};

const iOSVersions = {
  ...baseVersions,
};

const androidVersions = {
  ...baseVersions,
};

export const versions = Platform.OS === 'ios' ? iOSVersions : androidVersions;
