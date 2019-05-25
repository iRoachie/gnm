import React from 'react';
import { Redirect, Router } from '@reach/router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { ApolloProvider } from 'react-apollo';

import { Login, Contacts } from './pages';
import ProtectedRoute from './util/ProtectedRoute';
import { AuthProvider } from './util/AuthContext';
import client from './graphql';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Avenir Next'].join(','),
    fontSize: 14,
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1rem',
        fontWeight: 'bold',
      },
    },
  },
  palette: {
    primary: {
      main: '#394680',
    },
  },
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Login path="/login" />
            <ProtectedRoute component={Contacts} path="/contacts" />
            <Redirect from="/" to="/contact" noThrow />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
