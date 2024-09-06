import { configureStore } from "@reduxjs/toolkit";
import testReducer from "src/redux/slice/testslice";

export default configureStore({
  reducer: {
    dataSlice: testReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
