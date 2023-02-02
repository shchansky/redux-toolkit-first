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
