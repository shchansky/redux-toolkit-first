import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    /** у build 2 метода:query для получения данных от сервера (GET запрос), mutation для изменения этих данных (POST и PUT запрос)  */
    fetchAllUsers: build.query({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});
