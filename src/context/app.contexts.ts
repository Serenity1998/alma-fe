import React from 'react';
import {jwtDecode} from 'jwt-decode';

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