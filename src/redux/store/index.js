import { configureStore } from "@reduxjs/toolkit";
import { dataFetch } from "../reducers/dataFetch";

export const store =  configureStore({
  reducer: dataFetch,
});

