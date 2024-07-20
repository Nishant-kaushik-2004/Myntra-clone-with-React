import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pageNo",
  initialState: 1,
  reducers: {
    updatePage: (store, action) => {
      console.log("from pageSlice",action.payload,store);
      return action.payload;
    },
  },
});

export const pageActions = pageSlice.actions;
export default pageSlice;