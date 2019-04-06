import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../util';

interface DashboardSquareProps {
  backgroundColor?: string;
  value: string | number;
  caption: 'Contacts' | 'Interests' | 'Prospects' | 'Members';
}

const DashboardSquare: React.StatelessComponent<DashboardSquareProps> = ({
  caption,
  value,
  backgroundColor,
}) => (
  <View
    style={[
      styles.container,
      { borderBottomColor: backgroundColor, borderBottomWidth: 4 },
    ]}
  >
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.caption}>{caption}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  value: {
    fontSize: 24,
    color: '#000',
    fontFamily: Theme.fonts.medium,
  },
  caption: {
    color: 'rgba(0,0,0,0.7)',
    fontFamily: Theme.fonts.medium,
  },
});

export default DashboardSquare;
