import * as types from '../actions/ActionTypes';

const initialState = {
  right: false
}

export const drawer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DRAWER:
    return {
      right: action.open
    }

    default: return state;
  }
}
