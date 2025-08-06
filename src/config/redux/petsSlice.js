import { createSlice } from "@reduxjs/toolkit";

const petsSlice = createSlice({
  name: "pets",
  initialState: { items: [], total: 0 },
  reducers: {
    setPets: (state, action) => {
      state.items = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

const { actions, reducer } = petsSlice;
export const { setPets, setTotal } = actions;
export default reducer;
