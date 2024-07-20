import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchedItem",
  initialState: "",
  reducers: {
    updateSearchedItem: (store, action) => {
      return action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
