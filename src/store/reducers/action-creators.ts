import { userSlice } from "store/reducers/user-slice";
import axios from "axios";
import { IUser } from "models";
import { AppDispatch } from "store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

/** Рабочий вариант с dispatch (благодаря dispatch, redux узнает какие данные и куда ему помещать в userSlice)*/
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());

//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (error) {
//     if (error instanceof Error) {
//       dispatch(userSlice.actions.usersFetchingError(error.message));
//     } else {
//       dispatch(userSlice.actions.usersFetchingError("unknow type of error"));
//     }
//   }
// };

/** Альтернативный рабочий вариант без dispatch с реализацией через поле extraReducers в userSlice*/
export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/usersssss");
      return response.data;
    } catch (err) {
      alert(err);
      return thunkApi.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
