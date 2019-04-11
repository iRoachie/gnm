import ApolloClient from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';

import { GRAPH_API } from 'react-native-dotenv';

const client = new ApolloClient({
  uri: GRAPH_API,
  request: async operation => {
    let state = await AsyncStorage.getItem('userState');
    const info = state ? JSON.parse(state) : null;

    if (info) {
      const token = info.jwt;

      operation.setContext({
        headers: {
          authorization: token,
        },
      });
    }
  },
});

export * from './mutations';
export * from './queries';
export default client;
