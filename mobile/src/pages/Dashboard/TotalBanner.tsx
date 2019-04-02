import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import thousands from 'thousands';

import { Theme } from '../../util';

interface TotalBannerProps {
  total: number;
  onPress(): void;
}

const TotalBanner: React.FunctionComponent<TotalBannerProps> = ({
  total,
  onPress,
}) => (
  <View style={styles.banner}>
    <View
      style={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 10,
        paddingTop: 15,
      }}
    >
      <Icon name="assignment-ind" color="rgba(255,255,255,0.7)" size={40} />

      <View style={{ marginLeft: 16 }}>
        <Text style={styles.totalContactsLabel}>{thousands(total)}</Text>
        <Text style={styles.totalContactsCaption}>Total Persons</Text>
      </View>
    </View>

    <TouchableHighlight
      underlayColor="rgba(255,255,255,.7)"
      onPress={onPress}
      style={{
        width: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon color={Theme.primary} size={30} name="add" />
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  banner: {
    backgroundColor: Theme.primary,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    overflow: 'hidden',
  },
  totalContactsLabel: {
    fontSize: 45,
    color: '#fff',
    fontFamily: Theme.fonts.medium,
    lineHeight: 50,
    marginBottom: -7,
  },
  totalContactsCaption: {
    color: 'rgba(255,255,255,0.7)',
    fontFamily: Theme.fonts.semibold,
  },
});

export default TotalBanner;
