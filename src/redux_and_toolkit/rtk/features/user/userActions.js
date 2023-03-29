import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// create async thunk gives threee state of request pending, fulfilled, rejected
export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response?.data);
});
