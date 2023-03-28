import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    reStock: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

export default iceCreamSlice.reducer;
export const { ordered, reStock } = iceCreamSlice.actions;
