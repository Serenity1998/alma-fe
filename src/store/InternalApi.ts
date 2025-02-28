import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithAuth from '@/helpers/BaseQueryWithAuth';

export const internalApi = createApi({
  reducerPath: 'internalApi',
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getProtectedData: builder.query({
      query: () => '/lead',
    }),
  }),
});

export const { useGetProtectedDataQuery } = internalApi;

