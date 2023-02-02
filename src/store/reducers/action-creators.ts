import { userSlice } from "store/reducers/user-slice";
import axios from "axios";
import { IUser } from "models";
import { AppDispatch } from "store/store";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());

    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(userSlice.actions.usersFetchingError(error.message));
    } else {
      dispatch(userSlice.actions.usersFetchingError("unknow type of error"));
    }
  }
};
