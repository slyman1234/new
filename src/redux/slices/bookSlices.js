import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const bookSlices = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } = bookSlices.actions;

export default bookSlices.reducer;
