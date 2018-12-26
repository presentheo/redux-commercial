import * as types from '../actions/ActionTypes';

const initialState = {
  cartData : [
    {
      name: 'Covernat Benchdown',
      price: 250000
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


// const ARRAY = [1,2,3,4,5]
// function remove(arr,elem){
//   return [
//     ...arr.splice(0, arr.indexOf(elem)),
//     ...arr.splice(arr.indexOf(elem)+1, arr.length)
//   ]
// }
// remove(ARRAY, 4)