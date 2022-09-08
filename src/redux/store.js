import { configureStore } from '@reduxjs/toolkit'
import { bookSlices } from "../redux/slices/bookSlices"

export const store = configureStore({
  reducer: {

    categories: bookSlices

  },
})


