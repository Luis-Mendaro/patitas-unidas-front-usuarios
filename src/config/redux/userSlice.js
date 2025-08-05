import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login } = actions;
export default reducer;
