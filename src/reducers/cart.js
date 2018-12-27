import * as types from '../actions/ActionTypes';

const initialState = {
  cartData : [
    {
      name: 'LOVE YOURSELF',
      creator: '방탄소년단',
      price: 25000
    }
  ]
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
    return {
      cartData: [
        ...state.cartData,
        action.item
      ]
    }

    case types.REMOVE_FROM_CART:
    return {
      cartData: [
        ...state.cartData.slice(0, action.index),
        ...state.cartData.slice(action.index+1, state.cartData.length)
      ]
    }
    default: return state;
  }
}
