import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { RootSate } from "store/store";
import { userSlice } from "store/reducers/user-slice";
import { fetchUsers } from "store/reducers/action-creators";

export const Counter = () => {
  const { count } = useAppSelector((state: RootSate) => state.useReducer);
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h3>Counter</h3>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        Increment
      </button>
    </div>
  );
};
