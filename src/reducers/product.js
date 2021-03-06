import * as types from '../actions/ActionTypes';

const initialState = {
  selectedKey: 0,
  productData : [
    {
      id: 'yoon',
      name: '행보 2018 윤종신',
      creator: '윤종신',
      comment: `
[행보 2018 윤종신]은 2018년 '월간 윤종신'을 통해 발표된 13곡을 한 장에 담은 ‘월간 윤종신 2018’과 지난해 10월 현대카드 언더스테이지에서 진행되었던 콘서트 <윤종신 Curated 13 - 부르지 않은 노래>를 통해 선보인 라이브 11곡을 하나로 묶은 ‘부르지 않은 노래 LIVE 2018’, 총 두 장의 CD로 구성되어 있다. 

2018년은 그 어느 해보다도 ‘가수 윤종신’의 활약이 도드라졌던 해였다. 그는 2018년 한 해 동안 <월간 윤종신>을 통해 발표한 13곡 중 12곡을 직접 부르는 것은 물론, 특정 장르나 소재에 갇히지 않고 다양한 곡을 능수능란하게 소화해내면서 가수로서의 존재감에 무게를 더했다. ‘Frame’, ‘My Queen’, ‘Summer Man’, ‘떠나’, ‘Night Drive’ 등 완성도 높은 씨티팝을 연이어 선보이며 넓어졌고, ‘Slow Starter’, ‘이별톡’, ‘기댈게’, ‘벼락치기’ 등 누가 언제 들어도 윤종신의 인장을 발견할 수 있는 ‘윤종신표 발라드’를 이어나가며 깊어졌다. 
      `,
      price: 20000,
      stock: 200
    },
    {
      id: 'queen',
      name: 'Bohemian Rhapsody',
      creator: 'Queen',
      comment: `전설에 의한, 전설을 위한 영화 팝 역사의 전설 Queen의 삶과 음악 여정\n\nBOHMEMIAN RHAPSODY - Original Sound Track\n\n영화 [보헤미안 랩소디] 사운드트랙`,
      price: 20000,
      stock: 100
    },
    {
      id: 'chungha',
      name: '벌써 12시',
      creator: '청하',
      comment: `
Hands on Me, Offset, Blooming Blue
1년 6개월이란 시간 동안 총 3장의 앨범을 발매하며 청하는 앨범의 제목처럼 계속 성장해 왔다.
모두에게 손을 뻗어 가능성을 증명한 첫 앨범, 무대 위와 일상의 모든 매력을 담은 두 번째 앨범,만개한 푸른색처럼 빛나는 여름의 찬가로 돌아온 세 번째 앨범까지 밝고 경쾌한 바이브로 많은 사랑을 받았다.

이번 싱글 ‘벌써 12시’는 이 전 앨범과는 다른 청하의 새로운 색채를 표현하고 있다.
기존 앨범들이 그녀가 가지고 있는 밝은 색채에 주목했다면 이번 앨범은 도발적이고 적극적이다.
1억 스트리밍을 달성한 롤러코스터에 이어 블랙아이드 필승, 전군과 함께 한 두 번째 곡이다.

매혹적인 Flute 사운드가 커튼을 펼치듯 곡의 시작을 알리듯 울려 퍼지고, 이어지는 Pluck 사운드, 탄탄한 리듬 위에 청하의 목소리가 더해져 매력적이고 중독적인 EDM이 완성되었다.
그대와 헤어져야만 하는 시간 12시가 가까워져만 오고 이제 가야만 하지만, 마음속 서로의 대화처럼 보내주기 싫은 상황을 도발적이고 솔직하게 표현한 곡이다.
      `,
      price: 10000,
      stock: 1000
    },
    {
      id: 'okdal',
      name: 'DAY / NIGHT [EP]',
      creator: '옥상달빛',
      comment: `
옥상달빛이 들려주는 낮과 밤의 감성 EP [Day / Night]

1. 청춘길일(靑春吉日)
인생에 가장 밑바닥이라 생각했던 시간 속에서도 좋은 순간들이 있었다.
Composed by 박세진 Written by 박세진 Arranged by Philtre

2. 직업병
지금의 나의 일은, 내가 그토록 원하던 일일까?
Composed by 김윤주 Written by 김윤주 Arranged by 권영찬

3. 발란스
어제와 똑같은 하루에도 오늘의 이유를 찾아내는 것. 그것이 완벽한 밸런스
Composed by 박세진 Written by 박세진 Arranged by REPROJECT

4. 밤밤밤
가끔은 나를 스쳐가는 모든 슬픔의 이유가 다 나 같아서 슬픈 날이 있다.
Composed by 김윤주 Written by 김윤주 Arranged by 김윤주, 양영호
      `,
      price: 15000,
      stock: 1000
    },
    {
      id: 'punch',
      name: 'DREAM OF YOU',
      creator: 'PUNCH',
      comment: `
가수 펀치(Punch)가 16일 첫 미니앨범 'Dream of You'를 발표한다. 데뷔후 발표하는 첫 미니앨범이자, 펀치의 새로운 시작을 알리는 서막이다. 
타이틀곡 '이 마음 (Heart)'을 포함해 '눈꽃처럼', 'Love is You', 'Kiss Me', '이 밤의 끝' 등 총 5곡이 수록됐다. 

앞서 펀치는 '밤이 되니까' '오늘밤도' '이 밤의 끝'을 통해 특유의 이별 감성을 노래하며 성공적인 '밤 3부작'을 완성했다. 
이후 디지털 싱글 '헤어지는 중'을 발표하며 펀치만의 아이덴티티를 확고히 했다. 

특히, 펀치(Punch)는 보컬은 물론 랩 실력까지 갖춘 실력파 가수로 주요 페스티벌을 비롯해 대학 축제 섭외대상 1순위로 떠오르며 인기 기반을 다지고 있다.
히트곡이 많은 OST 요정 으로도 유명한 펀치(Punch)는 지난해 꾸준히 음원차트에서 강한 면모를 보여준 만큼 이번 신곡 "이 마음"을 통해 어떤 성적을 거둘지 귀추가 주목된다.

이어 새 앨범 'Dream of You'의 타이틀곡 '이 마음 (Heart)'으로 펀치 표 애절한 이별 노래의 정점을 찍을 예정이다. 
신곡 '이 마음 (Heart)'은 이별을 맞이한 여자의 마음을 시간과 계절에 비유한 곡으로, 펀치의 음색은 듣는 이로 하여금 공감을 불러오며 가사를 곱씹게 만든다. 

최고의 드라마 '태양의 후예'OST '괜찮아 사랑이야'OST '달의연인 보보경심려'OST 등을 ALL 프로듀싱 하고 '도깨비'OST 곡중 에일리"첫눈처럼 너에게 가겠다" 찬열&펀치(Punch)"Stay with me" 크러쉬"Beautiful" 소유 "I Miss You” 최고 히트곡 4곡을 프로듀싱했으며 "밤이 되니까" "헤어지는 중"을 프로듀싱한 국내 최강 히트 음악 프로듀서 송동운 이 프로듀싱을 맡아 곡의 완성도를 높였다.

또 태양의 후예 OST 윤미래 'ALLWAYS' 도깨비 OST 에일리'첫눈처럼 너에게 가겠다', 펀치 '밤이 되니까'로 유명한 최고의 작곡가 로코베리와 '도깨비'OST 찬열&펀치(Punch) 'Stay with me', 크러쉬'Beautiful', 펀치'헤어지는 중'으로 호흡을 맞춘 작곡가 이승주가 펀치를 위해 다시 한 번 뭉쳐 특급 시너지를 발휘했다.
이 외에도 '헤어지는 중'최인환 작곡가도 펀치의 첫 미니앨범에 참여해 완성도를 높였다. 

'밤이 되니까'이후 발표하는 신곡마다 주요 음원차트 상위권에 안착하며 신흥 음원강자로의 입지를 다졌다. 최근 발표한 '헤어지는 중' 역시 높은 순위를 유지하며 롱런 중이기에 펀치의 새 앨범 발매 소식에 많은 음악 팬들의 관심이 쏠리고 있다.
      `,
      price: 10000,
      stock: 1000
    },
    {
      id: 'redvelvet',
      name: 'RBB',
      creator: 'RED VELVET',
      comment: `
‘퍼펙트 걸그룹’ 레드벨벳(Red Velvet, SM엔터테인먼트 소속)이 다섯 번째 미니앨범 ‘RBB’로 2018 연말 가요계도 점령한다. 

레드벨벳은 오는 30일 타이틀 곡 ‘RBB (Really Bad Boy)’를 포함해 총 6트랙으로 구성된 다섯 번째 미니앨범 ‘RBB’를 발매하고 컴백 활동에 돌입할 예정이어서, 음악 팬들의 폭발적인 호응을 얻을 전망이다.

특히, 레드벨벳은 지난 1월 정규 2집 리패키지 앨범 타이틀 곡 ‘Bad Boy’와 8월 여름 미니앨범 타이틀 곡 'Power Up’을 차례로 발표, 시크한 겨울 매력부터 상큼발랄한 여름 매력까지 상반된 콘셉트를 완벽하게 소화하며 국내는 물론 글로벌 음악 차트 1위를 휩쓴 만큼, 새 앨범을 통해 보여줄 활약이 더욱 기대를 모은다.

더불어 레드벨벳은 지난 8월 서울에서 개최된 단독 콘서트 ‘REDMARE’를 시작으로 월드 투어에 돌입, 방콕, 타이베이, 싱가포르 등에서 성황리에 공연을 펼쳤으며, 내년 1월부터 후쿠오카, 고베, 요코하마 등에서 일본 첫 아레나 투어를 진행함은 물론, 2월에는 LA, 댈러스, 마이애미, 시카고, 뉴어크 등에서 미국 투어도 이어갈 예정이어서, ‘월드 클래스 걸그룹’의 진가를 확인시켜 줄 것으로 보인다.
      `,
      price: 15000,
      stock: 5000
    },
    {
      id: 'god',
      name: 'NOW & THEN',
      creator: '지오디(god)',
      comment: `
2019년 1월 13일 데뷔 20주년을 맞이하는 국민그룹 god가 1월 10일 4년만에 20주년 기념 스페셜 앨범 < THEN & NOW >를 선보인다.

데뷔 이후 주로 겨울에 앨범을 발매해오며 ‘겨울 가수’라는 별칭을 얻은 god가 듣기만해도 따뜻해지는 감성으로 추운 겨울 얼어붙은 마음을 포근히 감싸 안아 줄 예정이다.

20주년 스페셜 앨범 < THEN & NOW >는 더블 타이틀곡 ‘그 남자를 떠나’와 ‘눈을 맞춰’를 비롯해 멜로망스의 정동환이 새롭게 편곡하고 아이유, 헨리, 조현아, 양다일이 가창에 참여한 리메이크 곡 ‘길’ 등 총 10곡의 신곡과 리메이크 곡으로 알차게 채워져 있어 데뷔 이후 지금까지 20년이라는 시간 동안 한결같이 지지하고 사랑해 준 팬들에게 뜻 깊은 선물이 될 전망이다.
      `,
      price: 16300,
      stock: 400
    },
    {
      id: 'gayung',
      name: '특별히 대단할 것',
      creator: '안녕하신가영',
      comment: `
안녕하신가영 정규 2집 [특별히 대단할 것]
이 앨범을 만드는 동안은 스스로 특별히 대단할 것이 없어 자주 슬퍼지곤 했지만, 음악을 만들며 아무도 아닌 이는 아니었음을 깨달을 수 있었던 소중한 시간들이었습니다. 이 앨범을 들어주시는 모든 분들께 특별히 대단한 마음을 보내드립니다.
      `,
      price: 15600,
      stock: 1000
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

    case types.ADD_TO_CART: {
      const itemIndex = state.productData.findIndex(e => e.id === action.item.id);
      return {
        productData: [
          ...state.productData.slice(0, itemIndex),
          {
            ...state.productData[itemIndex],
            stock: state.productData[itemIndex].stock - action.quantity
          },
          ...state.productData.slice((itemIndex+1), state.productData.length),
        ]
      }
    }
  }
}