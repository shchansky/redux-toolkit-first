import { combineReducers, configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/user-slice";
import { postAPI, postAPI2 } from "services/post-service";

const rootReducer = combineReducers({
  useReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(postAPI.middleware)
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware, postAPI2.middleware),
  });
};

export type RootSate = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
/** или так: */
// export type AppDispatch = ReturnType<typeof setupStore>;
