import React, { useState, useEffect } from 'react';
import { UserDetails } from '../../../mobile/src/types';

import { AuthKey } from '../constants';

const AuthContext = React.createContext<{
  user: UserDetails | null;
  setDetails(details: UserDetails): void;
  logout(): void;
}>({
  user: null,
  setDetails: () => {},
  logout: () => {},
});

const AuthProvider: React.FC = props => {
  const value = localStorage.getItem(AuthKey);

  const initialValue = () => (value ? JSON.parse(value) : null);
  const [user, setUser] = useState<UserDetails | null>(initialValue);

  useEffect(() => {
    localStorage.setItem(AuthKey, JSON.stringify(user));
  }, [user]);

  const setDetails = (details: UserDetails) => {
    setUser(details);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setDetails,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
