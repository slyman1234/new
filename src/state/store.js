import { createStore, applyMiddleware } from "redux";
import { Loadstate, saveState } from "./Loadstate";
import reducers from "./reducers/Index";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const persistState = Loadstate();

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// The store now has the ability to accept thunk functions in `dispatch`
export const store = createStore(reducers, composedEnhancer, persistState);

store.subscribe(() => {
  saveState(store.getState());
});


