import { Platform } from 'react-native';

export const AppVersion = Platform.OS === 'ios' ? '1.1.0' : '1.1.0';

const baseVersions = {
  '1.0.0': {
    relog: true,
    reset: true,
  },
  '1.1.0': {
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
