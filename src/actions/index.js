import * as types from './ActionTypes';

export const addToCart = (item) => {
  return {
    type: types.ADD_TO_CART,
    item
  };
}

export const removeFromCart = (index) => {
  return {
    type: types.REMOVE_FROM_CART,
    index
  };
}

export const toggleDrawer = (open) => {
  return {
    type: types.TOGGLE_DRAWER,
    open
  }
}