import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { RootSate } from "store/store";
import { userSlice } from "store/reducers/user-slice";

function App() {
  const { count } = useAppSelector((state: RootSate) => state.useReducer);

  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
