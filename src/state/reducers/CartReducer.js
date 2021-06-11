import { increaseQuantity } from "../../helper/helper";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      const newState = state.filter((pd) => pd.id != action.payload);
      return [...newState];

    case "ADD_QUANTITY":
      const quantity = state.filter((pd) => {
        if (pd.id === action.payload) {
          pd.quantity++;
        }
        return pd;
      });
      return [...quantity];

    case "REMOVE_QUANTITY":
      const removedQuantity = state.filter((pd) => {
        if (pd.id === action.payload) {
          if (pd.quantity > 0) {
            pd.quantity--;
          }
        }
        return pd;
      });
      return [...removedQuantity];

    case "CHECKOUT":
      return [];

    default:
      return state;
  }
};

export default reducer;
