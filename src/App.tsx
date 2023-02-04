import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { RootSate } from "store/store";
import { userSlice } from "store/reducers/user-slice";
import { fetchUsers } from "store/reducers/action-creators";
import { PostContainer, PostContainer2, PostContainer3 } from "components";
import * as Features from "./features";

function App() {
  const { count, users, error, isLoading } = useAppSelector(
    (state: RootSate) => state.useReducer
  );

  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            dispatch(increment(10));
          }}
        >
          Increment
        </button>
      </div>
      <hr />
      <h3>Users with no thunk</h3>
      <div>
        {isLoading ? "Идет загрузка..." : JSON.stringify(users, null, 2)}
      </div>
      <div style={{ paddingTop: "30px" }}>
        {error.length ? error : "Ошибки нет"}
      </div>
      <hr />
      <h3>Posts with RTK Qerry</h3>

      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <h4>PostContainer</h4> <PostContainer />
        </div>
        <div>
          <h4>PostContainer2</h4>
          <PostContainer2 />
        </div>
      </div>

      <hr />

      <Features.MutatedPostContainer />
    </>
  );
}

export default App;
