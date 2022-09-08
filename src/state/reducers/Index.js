import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducers";

const reducers = combineReducers({
  categories: categoriesReducer,
});

export default reducers;
