import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithoutAuth from '@/helpers/BaseQueryWithoutAuth';
import { ApiResponse, PublicLeadForm, LoginForm } from '@/types/global';
import { API } from '@/config/api.constants';

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryWithoutAuth,
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginForm>({
      query: (body: any) => ({
        url: API.login,
        method: 'POST',
        body,
      }),
    }),
    postLeadForm: builder.mutation<ApiResponse, PublicLeadForm>({
      query: (body: any) => ({
        url: API.postlead,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  usePostLeadFormMutation,
  useLoginMutation
} = commonApi;
