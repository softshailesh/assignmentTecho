
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/portfolio.js";

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});
