import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bagItems",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFromBag: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const BagSliceActions = BagSlice.actions;
export default BagSlice;
