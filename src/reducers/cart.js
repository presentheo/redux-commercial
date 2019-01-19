import * as types from '../actions/ActionTypes';

const initialState = {
  cartData : []
}


export const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const itemIndex = state.cartData.findIndex(e => e.id === action.item.id)
      if (itemIndex === -1){
        return {
          cartData: [...state.cartData, {...action.item, quantity: action.quantity}]
        }
      }
      return {
        cartData: [
          ...state.cartData.slice(0, itemIndex),
          {...state.cartData[itemIndex], quantity: state.cartData[itemIndex].quantity + action.quantity},
          ...state.cartData.slice(itemIndex+1, state.cartData.length)
        ]
      }

    case types.REMOVE_FROM_CART:
    return {
      cartData: [
        ...state.cartData.slice(0, action.index),
        ...state.cartData.slice(action.index+1, state.cartData.length)
      ]
    }

    case types.CHECKOUT:
      return initialState;

      default: return state;
  }
}
