export const addToCart = (product) => {
  console.log("action-creator", product);
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: 1 },
    });
  };
};

export const removeFromCart = (product_Id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product_Id,
    });
  };
};

export const addQuantity = (product_Id) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_QUANTITY",
      payload: product_Id,
    });
  };
};

export const removeQuantity = (product_Id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_QUANTITY",
      payload: product_Id,
    });
  };
};

export const checkout = (product_Id = 0) => {
  return (dispatch) => {
    dispatch({
      type: "CHECKOUT",
      payload: product_Id,
    });
  };
};
