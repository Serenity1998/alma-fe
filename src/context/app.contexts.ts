import React from 'react';

interface UserContextType {
  user?: null | undefined;
  loading: boolean;
  userType?: string;
}

interface AppContextType {
  pageLoading: boolean;
}

export const AppContext = React.createContext<AppContextType>({
  pageLoading: true,
});

export const UserContext = React.createContext<UserContextType>({
  user: undefined,
  loading: true,
  userType: undefined,
});