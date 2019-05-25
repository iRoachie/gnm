import ApolloClient from 'apollo-boost';
import * as constants from '../constants';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_API,
  request: async operation => {
    let state = await localStorage.getItem(constants.AuthKey);
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

export default client;
