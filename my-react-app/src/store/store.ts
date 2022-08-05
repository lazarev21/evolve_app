import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers/root-reducer";

export const store = configureStore({
  reducer,
});
