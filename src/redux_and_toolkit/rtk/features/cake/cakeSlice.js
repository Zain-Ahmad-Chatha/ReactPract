import { createSlice } from "@reduxjs/toolkit";

import { ordered as iceCreamOrdered } from "../iceCream/iceCreamSlice";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    reStock: (state, action) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
  // we want that by one get one policy , then we use extra reducers, here the user is buying only iceCream but also
  // getting a cake...
  extraReducers: (builder) => {
    builder.addCase(iceCreamOrdered, (state) => {
      state.numOfCakes--;
    });
  },
});

export default cakeSlice.reducer;
export const { ordered, reStock } = cakeSlice.actions;
