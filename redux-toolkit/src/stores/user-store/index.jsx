import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectUser = (state) => state.user.user;
