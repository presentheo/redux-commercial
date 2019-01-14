const initialState = {
  productData : [
    {
      name: '행보 2018 윤종신',
      creator: '윤종신',
      cover: 'https://sfs.synnara.co.kr/App/ImageViewerEShop?IID=M000368013&FMT=2&ATTACH=M&TYPE=B',
      price: 25000
    },
    {
      name: 'Bohemian Rhapsody',
      creator: 'Queen',
      cover: 'https://sfs.synnara.co.kr/App/ImageViewerEShop?IID=M000367769&FMT=2&ATTACH=M&TYPE=B',
      price: 25000
    },
    {
      name: '벌써 12시',
      creator: '청하',
      cover: 'https://sfs.synnara.co.kr/App/ImageViewerEShop?IID=M000367766&FMT=2&ATTACH=M&TYPE=B',
      price: 25000
    },
    {
      name: 'DAY / NIGHT [EP]',
      creator: '옥상달빛',
      cover: 'https://sfs.synnara.co.kr/App/ImageViewerEShop?IID=M000367777&FMT=2&ATTACH=M&TYPE=B',
      price: 25000
    },
    {
      name: '해야',
      creator: '여자친구',
      cover: 'https://sfs.synnara.co.kr/App/ImageViewerEShop?IID=M000367777&FMT=2&ATTACH=M&TYPE=B',
      price: 25000
    }
  ]
}

export const product = (state = initialState) => {
  return state;
}