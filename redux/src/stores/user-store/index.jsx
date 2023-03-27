import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return Promise.resolve({ id: 1, name: "John Doe" });
});

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const selectUser = (state) => state.user.user;
