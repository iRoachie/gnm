import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    padding: 15,
    borderRadius: 4,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  value: {
    fontSize: 24,
    color: '#000',
  },
  caption: {
    color: 'rgba(0,0,0,0.7)',
  },
});

export default DashboardSquare;
