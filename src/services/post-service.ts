import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../models";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    /**
     * у build 2 метода:query для получения данных от сервера (GET запрос), mutation для изменения этих данных (POST и PUT запрос)
     * */
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit = 5) => ({
        url: "/posts",
        params: { _limit: limit },
      }),
    }),
  }),
});

export const postAPI2 = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit = 2) => ({
        url: "/posts",
        params: { _limit: limit },
      }),
    }),
    /** <IPost, IPost> - request/ responce */
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post
      }),
    }),
  }),
});
