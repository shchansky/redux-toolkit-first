import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { RootSate } from "store/store";
import { stringifyContentSlice } from "store/reducers/user-slice";
import { loadStringifyContent } from "store/reducers/action-creators";

export const Counter = () => {
  const { count } = useAppSelector((state: RootSate) => state.stringifyContentReducer);
  const { increment } = stringifyContentSlice.actions;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadStringifyContent());
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
