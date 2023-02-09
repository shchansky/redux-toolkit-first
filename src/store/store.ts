import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stringifyContentReducer from "./reducers/user-slice";
import { UnmutatedContentApi, MutatedContentApi } from "api/api";

const rootReducer = combineReducers({
  stringifyContentReducer,
  [UnmutatedContentApi.reducerPath]: UnmutatedContentApi.reducer,
  [MutatedContentApi.reducerPath]: MutatedContentApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(UnmutatedContentApi.middleware)
        .concat(MutatedContentApi.middleware),
  });
};

export type RootSate = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
/** или так: */
// export type AppDispatch = ReturnType<typeof setupStore>;
