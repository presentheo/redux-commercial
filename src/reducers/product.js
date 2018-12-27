const initialState = {
  productData : [
    {
      name: 'Supermassive Blackhole',
      creator: 'Muse',
      price: 25000
    },
    {
      name: 'Bohemian Rhapsody',
      creator: 'Queen',
      price: 25000
    },
    {
      name: 'NEW CHAPTER #2: THE TRUTH OF LOVE',
      creator: '동방신기',
      price: 25000
    }
  ]
}

export const product = (state = initialState) => {
  return state;
}