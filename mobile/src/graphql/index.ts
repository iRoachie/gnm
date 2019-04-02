import ApolloClient from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
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
