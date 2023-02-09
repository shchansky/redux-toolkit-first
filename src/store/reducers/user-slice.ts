import { loadStringifyContent } from "store/reducers/action-creators";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "models";

type UserState = {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
};

export const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const stringifyContentSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },

    /** Альтернатива полю extraReducers(необходимо экшен loadStringifyContent оборачивать dispatch) */
    // usersFetching(state) {
    //   state.isLoading = true;
    // },

    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.users = action.payload;
    // },

    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },

  /** экшен loadStringifyContent обернут createAsyncThunk  */
  extraReducers: {
    [loadStringifyContent.pending.type]: (state) => {
      state.isLoading = true;
    },

    [loadStringifyContent.fulfilled.type]: (
      state,
      action: PayloadAction<IUser[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },

    [loadStringifyContent.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default stringifyContentSlice.reducer;
