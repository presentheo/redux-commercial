import * as types from '../actions/ActionTypes';

const initialState = {
  selectedKey: 0,
  productData : [
    {
      name: '행보 2018 윤종신',
      creator: '윤종신',
      cover: '/images/cover-yoon.jpg',
      price: 20000
    },
    {
      name: 'Bohemian Rhapsody',
      creator: 'Queen',
      cover: '/images/cover-queen.jpg',
      price: 20000
    },
    {
      name: '벌써 12시',
      creator: '청하',
      cover: '/images/cover-chungha.jpg',
      price: 10000
    },
    {
      name: 'DAY / NIGHT [EP]',
      creator: '옥상달빛',
      cover: '/images/cover-okdal.jpg',
      price: 15000
    },
    {
      name: 'DREAM OF YOU',
      creator: 'PUNCH',
      cover: '/images/cover-punch.jpg',
      price: 10000
    },
    {
      name: 'RBB',
      creator: 'RED VELVET',
      cover: '/images/cover-redvelvet.jpg',
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