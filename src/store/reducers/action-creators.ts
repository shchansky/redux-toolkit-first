import axios from "axios";
//eslint-disable-next-line
import { stringifyContentSlice } from "store/reducers/user-slice";
import { IUser } from "models";
//eslint-disable-next-line
import { AppDispatch } from "store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

/** Рабочий вариант с dispatch (благодаря dispatch, redux узнает какие данные и куда ему помещать в stringifyContentSlice)*/
// export const loadStringifyContent = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(stringifyContentSlice.actions.usersFetching());

//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     dispatch(stringifyContentSlice.actions.usersFetchingSuccess(response.data));
//   } catch (error) {
//     if (error instanceof Error) {
//       dispatch(stringifyContentSlice.actions.usersFetchingError(error.message));
//     } else {
//       dispatch(stringifyContentSlice.actions.usersFetchingError("unknow type of error"));
//     }
//   }
// };

/** Альтернативный рабочий вариант без dispatch с реализацией через поле extraReducers в stringifyContentSlice*/
export const loadStringifyContent = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (err) {
      alert(err);
      return thunkApi.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
