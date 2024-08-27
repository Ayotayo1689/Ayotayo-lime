import { createApi } from '@reduxjs/toolkit/query/react';
import { API } from './constants';
import { BaseQuery } from './baseQuery';

export const communityApi = createApi({
  reducerPath: 'communityApi',
  baseQuery: BaseQuery,
  endpoints: (builder) => ({
    getCommunity: builder.query({
      query: (queries) => queries,
      transformErrorResponse: (err) => {
        console.log("error=>", err);
        return err;
      },
    }),
    createCommunity: builder.mutation({
      query: (req) => ({
        url: req.path,
        method: 'POST',
        body: req.datas
      }),
      transformResponse: (response) => response, 
    }),
    editCommunity: builder.mutation({
      query: (req) => ({
        url: req.path,
        method: 'PATCH',
        body: req.datas
      }),
      transformResponse: (response) => response, 
    }),
    deleteCommunity: builder.mutation({
      query: (req) => ({
        url: req.path,
        method: 'DELETE',
        body: req.datas
      }),
      transformResponse: (response) => response, 
    }),
  }),
});

export const { useGetCommunityQuery, useCreateCommunityMutation, useDeleteCommunityMutation, useEditCommunityMutation } = communityApi;
