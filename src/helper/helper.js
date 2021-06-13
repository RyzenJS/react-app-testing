export const isIntoCart = (state, id) => {
  const match = state.filter((cart) => cart.id === id);
  console.log(match, match.length, match.length ? true : false);
  return match.length ? true : false;
};

export const totalCost = (state) => {
  const total = state.reduce((acc, item) => {
    return item.quantity * item.price + acc;
  }, 0);
  return total;
};
