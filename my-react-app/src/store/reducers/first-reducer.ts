import type { Reducer } from "@reduxjs/toolkit";
const defaultState: { state: number } = {
  state: 0,
};

export const firstReducer: Reducer<{}> = (state = defaultState, action) => {
  switch (action.type) {
    case "CASE":
      return { ...state, state: action.value };
    default:
      return state;
  }
};
