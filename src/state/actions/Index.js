export const addcategories = (categories) => {
  return (dispatch) => {
    dispatch({
      type: "addcategories",

      payload: categories,
    });
  };
};
