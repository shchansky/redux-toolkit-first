import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../models";

export const UnmutatedContentApi = createApi({
  reducerPath: "UnmutatedContentApi",
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

export const MutatedContentApi = createApi({
  reducerPath: "MutatedContentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts2: build.query<IPost[], number>({
      query: (limit = 2) => ({
        url: "/posts",
        params: { _limit: limit },
      }),
      providesTags: (result) => ["Post"],
    }),
    /** <IPost, IPost> - request/ responce */
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
