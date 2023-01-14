import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../store/root-reducer";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector