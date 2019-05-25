import React from 'react';
import { Router } from '@reach/router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { Login, Contacts } from './pages';
import ProtectedRoute from './util/ProtectedRoute';
import { AuthProvider } from './util/AuthContext';

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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Login path="/login" />
          <ProtectedRoute component={Contacts} path="/" />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
