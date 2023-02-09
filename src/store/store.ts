import { combineReducers, configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/user-slice";
import { jsonPlaceholderApi, dbJsonApi } from "api/api";

const rootReducer = combineReducers({
  useReducer,
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  [dbJsonApi.reducerPath]: dbJsonApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(jsonPlaceholderApi.middleware)
        .concat(dbJsonApi.middleware),
  });
};

export type RootSate = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
/** или так: */
// export type AppDispatch = ReturnType<typeof setupStore>;
