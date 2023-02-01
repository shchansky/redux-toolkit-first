import axios from "axios";
import { IUser } from "models";
import { AppDispatch } from "store/store";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  } catch (err) {
    console.log(err);
  }
};
