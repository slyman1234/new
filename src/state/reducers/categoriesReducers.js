const initialState = {
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addcategories":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return state
  }
};


export default reducer;
