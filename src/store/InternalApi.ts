import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithAuth from '@/helpers/BaseQueryWithAuth';
import { ApiResponse, LoginForm } from '@/types/global';
import { API } from '@/config/api.constants';

export const internalApi = createApi({
  reducerPath: 'internalApi',
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getProtectedData: builder.mutation<ApiResponse, void>({
      query: () => ({
        url: API.getleads,
        method: 'GET',
      }),
    }),
    updateLead: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: API.getleads,
        method: 'POST',
        body: id
      }),
    }),
  }),
});

export const { useGetProtectedDataMutation, useUpdateLeadMutation } = internalApi;

