import React from 'react';
import {
  ViewProperties,
  StyleProp,
  ViewStyle,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Theme } from '../util';

interface SectionProps extends ViewProperties {
  title?: string;
  topDivider?: boolean;
  hideDivider?: boolean;
  style?: StyleProp<ViewStyle>;
  padded?: boolean;
  children?: React.ReactNode;
}

const Section: React.FunctionComponent<SectionProps> = ({
  padded = true,
  topDivider,
  hideDivider,
  children,
  title,
  style,
}) => (
  <View
    style={[
      {
        paddingVertical: 24,
        borderBottomWidth: hideDivider ? 0 : 1,
        borderTopWidth: topDivider ? 1 : 0,
        borderColor: '#DFDFE2',
        paddingHorizontal: padded ? 16 : 0,
      },
      style,
    ]}
  >
    {!!title && <Text style={styles.sectionTitle}>{title}</Text>}

    {children}
  </View>
);

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: Theme.fonts.medium,
    color: 'rgba(0,0,0,.87)',
    fontSize: 17,
    marginBottom: 8,
  },
});

export default Section;
