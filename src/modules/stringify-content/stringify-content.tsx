import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { RootSate } from "store/store";
import { fetchUsers } from "store/reducers/action-creators";

export const StringifyContent = () => {
  const { users, error, isLoading } = useAppSelector(
    (state: RootSate) => state.useReducer
  );

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h3>StringifyContent - with thunk</h3>
      <div>
        {isLoading ? "Идет загрузка..." : JSON.stringify(users, null, 2)}
      </div>
      <div style={{ paddingTop: "30px" }}>
        {error.length ? error : "Ошибки нет"}
      </div>
    </div>
  );
};
