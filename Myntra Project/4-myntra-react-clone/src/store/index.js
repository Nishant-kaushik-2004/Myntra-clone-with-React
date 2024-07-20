import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import BagSlice from "./bagSlice";
import searchSlice from "./searchSlice";
import pageSlice from "./pageslice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bagItems: BagSlice.reducer,
    searchedItem: searchSlice.reducer,
    pageNo: pageSlice.reducer,
  },
});

export default myntraStore;
