
export const addToCartAction = (cart_items=[], totalPayable, totalCartItems) => async (dispatch) => {
  dispatch({type:'ADD_TO_CART', data: {cart_items, totalPayable, totalCartItems}});
}