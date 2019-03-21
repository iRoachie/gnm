import React from 'react';
import { View } from 'react-native';
import { Appbar, DefaultTheme } from 'react-native-paper';

const Dashboard = () => (
  <View>
    <Appbar.Header dark>
      <Appbar.Content
        title="Dashboard"
        titleStyle={{ fontFamily: DefaultTheme.fonts.medium, fontSize: 17 }}
      />
    </Appbar.Header>
  </View>
);

export default Dashboard;
