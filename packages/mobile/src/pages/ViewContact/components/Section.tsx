import React from 'react';
import {
  ViewProperties,
  StyleProp,
  ViewStyle,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Theme } from '../../../util';

interface SectionProps extends ViewProperties {
  title?: string;
  hideDivider?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Section: React.StatelessComponent<SectionProps> = props => (
  <View
    style={[
      {
        paddingVertical: 24,
        borderBottomWidth: props.hideDivider ? 0 : 1,
        borderBottomColor: '#DFDFE2',
      },
      props.style,
    ]}
  >
    {props.title && <Text style={styles.sectionTitle}>{props.title}</Text>}

    {props.children}
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
