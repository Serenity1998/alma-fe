import { configureStore } from '@reduxjs/toolkit';
import { commonApi } from './CommonApi';
import { internalApi } from './InternalApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [commonApi.reducerPath]: commonApi.reducer,
      [internalApi.reducerPath]: internalApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware).concat(internalApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
