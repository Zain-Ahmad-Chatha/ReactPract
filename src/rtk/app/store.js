import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cakeSlice, iceCreamSlice, userSlice } from "../features";
import { createLogger } from "redux-logger";

const logger = createLogger();

const rtkStore = configureStore({
  reducer: {
    cake: cakeSlice, // here just passing reducer function of slice..
    iceCream: iceCreamSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default rtkStore;
