import { createSlice } from "@reduxjs/toolkit";

const sheltersSlice = createSlice({
  name: "shelters",
  initialState: { items: [], total: 0 },
  reducers: {
    setShelters: (state, action) => {
      state.items = action.payload;
    },
    setTotalShelters: (state, action) => {
      state.total = action.payload;
    },
  },
});

const { actions, reducer } = sheltersSlice;
export const { setShelters, setTotalShelters } = actions;
export default reducer;
