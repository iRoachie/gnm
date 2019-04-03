import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../util';

interface BlockValueProps {
  label: string | number;
  value: string | number;
}

const BlockValue: React.StatelessComponent<BlockValueProps> = ({
  label,
  value,
}) => (
  <View style={styles.container}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  value: {
    color: '#000',
    fontFamily: Theme.fonts.regular,
    fontSize: 24,
  },
  label: {
    color: Theme.primary,
    fontFamily: Theme.fonts.medium,
    fontSize: 14,
  },
});

export default BlockValue;
