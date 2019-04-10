import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import { Theme } from '../../../util';

interface HeaderProps {
  name: string;
  teamCode?: string;
  status: string;
  onEdit(): void;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  name,
  teamCode,
  status,
  onEdit,
}) => (
  <View
    style={{
      backgroundColor: Theme.primary,
      paddingLeft: 16,
      paddingTop: 8,
      paddingBottom: 16,
      paddingRight: 16,
      zIndex: 2,
    }}
  >
    {!!teamCode && (
      <Text
        style={{
          color: Theme.primary,
          fontFamily: Theme.fonts.semibold,
          backgroundColor: '#fff',
          paddingHorizontal: 4,
          alignSelf: 'flex-start',
          fontSize: 12,
          marginBottom: 8,
        }}
      >
        {teamCode}
      </Text>
    )}

    <Text
      style={{
        color: '#fff',
        fontFamily: Theme.fonts.semibold,
        fontSize: 30,
        marginBottom: -4,
      }}
    >
      {name}
    </Text>

    <Text
      style={{
        color: '#fff',
        fontFamily: Theme.fonts.regular,
        fontSize: 20,
      }}
    >
      {status}
    </Text>

    <FAB
      color={Theme.primary}
      theme={{
        colors: {
          accent: '#fff',
        },
      }}
      small
      style={styles.fab}
      icon="edit"
      onPress={onEdit}
    />
  </View>
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    bottom: -16,
    zIndex: 2,
  },
});

export default Header;
