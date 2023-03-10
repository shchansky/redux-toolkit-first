import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootSate, AppDispatch } from "store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;
