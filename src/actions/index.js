import * as types from './ActionTypes';

export const addToCart = (item, quantity) => {
  return {
    type: types.ADD_TO_CART,
    quantity,
    item
  };
}

export const removeFromCart = (index) => {
  return {
    type: types.REMOVE_FROM_CART,
    index
  };
}

export const checkout = () => {
  return {
    type: types.CHECKOUT
  }
}

export const selectItem = (index) => {
  return {
    type: types.SELECT_ITEM,
    index
  }
}

export const toggleDrawer = (open) => {
  return {
    type: types.TOGGLE_DRAWER,
    open
  }
}