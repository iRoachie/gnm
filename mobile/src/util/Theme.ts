import { Platform } from 'react-native';
import { AppbarHeaderProps, AppbarContentProps } from 'react-native-paper';

const fonts = {
  semibold: 'AvenirNext-DemiBold',
  regular: 'AvenirNext-Regular',
  medium: 'AvenirNext-Medium',
};

const Theme = {
  primary: '#394680',
  darkPrimary: '#303b6c',
  background: '#E5E5E5',
  error: '#ff190c',
  fonts,
  Appbar: {
    Header: {
      dark: true,
      style: Platform.select({ ios: { height: 45 } }),
    } as AppbarHeaderProps,
    Content: {
      titleStyle: {
        fontFamily: fonts.semibold,
        ...Platform.select({
          ios: {
            fontSize: 19,
          },
        }),
      },
      subtitleStyle: {
        fontFamily: fonts.medium,
        marginTop: -8,
      },
    } as AppbarContentProps,
  },
};

export default Theme;
