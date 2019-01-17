import * as types from '../actions/ActionTypes';

const initialState = {
  selectedKey: 0,
  productData : [
    {
      id: 'yoon',
      name: '행보 2018 윤종신',
      creator: '윤종신',
      cover: '/redux-record/images/cover-yoon.jpg',
      price: 20000
    },
    {
      id: 'queen',
      name: 'Bohemian Rhapsody',
      creator: 'Queen',
      cover: '/redux-record/images/cover-queen.jpg',
      price: 20000
    },
    {
      id: 'chungha',
      name: '벌써 12시',
      creator: '청하',
      cover: '/redux-record/images/cover-chungha.jpg',
      price: 10000
    },
    {
      id: 'okdal',
      name: 'DAY / NIGHT [EP]',
      creator: '옥상달빛',
      cover: '/redux-record/images/cover-okdal.jpg',
      price: 15000
    },
    {
      id: 'punch',
      name: 'DREAM OF YOU',
      creator: 'PUNCH',
      cover: '/redux-record/images/cover-punch.jpg',
      price: 10000
    },
    {
      id: 'redvelvet',
      name: 'RBB',
      creator: 'RED VELVET',
      cover: '/redux-record/images/cover-redvelvet.jpg',
      price: 15000
    }
  ]
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_ITEM:
    return {
      selectedKey: action.index,
      productData: [...state.productData]
    } 
    default: return state;
  }
}