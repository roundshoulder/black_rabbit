export interface result {
  name: string;
  img: any;
  info: string;
}

const categories: { [index: number]: number } = {
  //부와 명예
  2: 1,
  6: 1,
  7: 1,
  //낭만파
  4: 10,
  8: 10,
  9: 10,
  //관계적 행복
  3: 100,
  11: 100,
  10: 100,
  //인내와 결실
  0: 1000,
  1: 1000,
  5: 1000,
};

export function getResult(wishKeys: number[]) {
  let category;
  let result;
  if (wishKeys.length === 1) {
    // 재료 1개
    result = results[wishKeys[0]];
  } else {
    category = wishKeys.map((key) => {
      return categories[key];
    });
    let sum = 0;
    category.forEach((num) => {
      sum += num;
    });
    switch (sum) {
      case 11:
        result = results[12];
        break;
      case 101:
        result = results[13];
        break;
      case 1001:
        result = results[14];
        break;
      case 110:
        result = results[15];
        break;
      case 1010:
        result = results[16];
        break;
      case 1100:
        result = results[17];
        break;
      //3개를 고른 경우
      case 12 || 102 || 1002 || 3:
        result = results[19];
        break;
      case 21 || 120 || 1020 || 30:
        result = results[20];
        break;
      case 201 || 210 || 1200 || 300:
        result = results[21];
        break;
      case 2001 || 2010 || 2100 || 3000:
        result = results[22];
        break;
      default:
        result = results[18];
        break;
    }
  }
  return result;
}

const results: { [id: number]: result } = {
  0: {
    name: '다이어트용 야채설기',
    img: require('../static/images/result/0.png'),
    info: `이 떡으로 말하자면 맛은 하나도 없는 채소만 들어간 다이어트용 야채설기!
    이걸 먹으면 살도 빠지고 군것질도 생각 안 날거야!! 이거 먹고 2023에는
    날씬한 몸매 만들어야지 헤헿 근데 얘도 너무 많이 먹으면 살찌니까 그만 먹어 이 돼지야 ><`,
  },
  1: {
    name: '갓생도 식후경 쌀떡볶이',
    img: require('../static/images/result/1.png'),
    info: `후후 자네가 새해부터 일찍 일어나는 새인가? 이 떡으로 말하자면
    당신의 365일 상쾌한 아침 기상을 책임져 줄 쌀떢볶이!
    새해에는 스케줄표도 써보고, 일찍 일어나서 전부 실천해보라구!
    오늘 할 일: 흑끼한테 당근사주기`,
  },
  2: {
    name: '부기온앤온 금가루 뿌린 화과자',
    img: require('../static/images/result/2.png'),
    info: `머야머야 옷이 그게 머야-!! 그런 당신을 위해 준비한 부기온앤온 금가루 뿌린 화과자가 여기있단 말씀!
    이거 먹고 얼른 부자돼서 옷부터 flex!해버리라구! 내년에는 계좌랑 지갑에 돈이
    차고 넘쳐서 돈 걱정은 하덜덜 말라구 ㅎㅎ 그리고 실례가 안 된다면 아이스크림 하나만 사주십시오`,
  },
  3: {
    name: '애인이 끓여준 떡라면',
    img: require('../static/images/result/3.png'),
    info: `우왕 따뜻한 온기가 마구 올라오는 게 보여? 이건 애인이 끓여준 떡라면이야
    이걸 먹으면 너도 매력도랑 인기가 올라가서 새해에는 애인을 사귈 수 있다구%%
    라면 호로록 먹구 꽁냥꽁냥 많이 하라구 ㅎㅎ 아니 잠깐.. 왤케 설레게 나를 쳐다보는거야 으앙 ㅠ 소름끼쳐!`,
  },
  4: {
    name: '날씨는 언제나 내 편! 기우제용 콩편',
    img: require('../static/images/result/4.png'),
    info: `하이하이! 나는 너의 날씨요정! 이 떡은 너를 향한 마법의 주문!
    여행을 사랑하는 너를 위해 준비한 기우제용 콩편이얌!! 이걸 먹으면
    여행가는 날은 날씨가 화창할거란 말씀! 헤헿 효과없으면 어떡하냐고?
    그럴거면 그냥 날씨예보 봐 이 바보얌 ><`,
  },
  5: {
    name: '간과 폐를 건강하게 헛개도라지 시루떡',
    img: require('../static/images/result/5.png'),
    info: `이 떡으로 말하자면 헛개나무 열매가 팍팍 들어간 헛개도라지 시루떡이란 말씀!
    이거 먹으면 간이랑 폐 기능이 좋아지고  술이랑 담배는 생각도 안 나서 건강하게 살 수 있다구 ㅎㅎ
    그러니 새해에는 마음 딱 잡고 살라구! 잠시만... 나더러 흑기사 해달라구? 싫어 나는 흑기사가 아니라 흑끼걸랑 ㅋ`,
  },
  6: {
    name: '엿처럼 한방에 붙는 찹쌀떡',
    img: require('../static/images/result/6.png'),
    info: `후후 이 떡은 내 비장의 무기! 엿처럼 한방에 붙는 찹쌀떡!!
    이거 먹으면 공부한 내용 다 생각나고, 원하는 곳에 갈 수 있단 말씀!
    그니까 희망 잃지 말고 새해에는 멋진 도전 성공하란 뜻에서 주문도 알려줄게
    주문을 외워 *삐리삐리샤라쁑쁑 엿먹어라 내 찹쌀같은 인생아@@@! 힝 실은 뻥임 ㅅㄱ`,
  },
  7: {
    name: '대학원생의 가호를 받은 물떡',
    img: require('../static/images/result/7.png'),
    info: `이 떡으로 말하자면 대학원생의 눈물이 들어간 짭짤한 물떡이란 말씀!
    먹으면 책이 마구마구 보고싶어지고 똑똑해진단 말이얌><  그동안 어려웠던 책이랑 지식들을 마구마구 습득하라구!
   근데 많이 먹어서 교수님이 대학원으로 부르면 나는 몰랑`,
  },
  8: {
    name: '인간이 되자! 쑥떡',
    img: require('../static/images/result/8.png'),
    info: `으앗! 벌써 맛없는 냄새나 ㅠㅠ 이건 바로 인간이 되게 해주는 쑥떡!
    이 떡을 먹으면 인성파탄자도 인간으로 만들어준다규! 이거 먹고 인간이 돼서
    어려운 사람도 많이 도와주고, 훌륭한 인품 갖추길 응원할게
    잉 맞다 그거 먹으면 1년동안 입냄새남 ㅋ 먹기 전에 말한단걸 깜빡><`,
  },
  9: {
    name: '즐거운 취미를 위한 초코크림떡',
    img: require('../static/images/result/9.png'),
    info: `왓 이즈 유얼 하비? 새해에는 취미 하나 새로 습득해보자구!
    즐거운 취미를 위한 초코크림떡과 함께 말야. 이걸 먹으면 너도 너만을 위한
    좋은 취미를 가질 수 있을거얌 ㅎㅎ 새해에는 이색 취미 하나 늘려보는 건 어때?
    예를 들면, 흑끼한테 당근 사주기, 흑끼한테 당근 사주기, 흑끼한테 당근....`,
  },
  10: {
    name: '친구랑 나눠먹는 조랭이떡',
    img: require('../static/images/result/10.png'),
    info: `이 떡으로 말하자면 당신의 우정을 새해에도 지켜줄 조랭이떡이란 말씀!
    두 쪽으로 쪼개서 친구랑 나눠먹으면 너네 우정도 영원할거야
    너의 평생 우정이 계속되면 좋겠어 >< 세상에 꺾일 때면~ 술 한 잔 기울이며~ 이제는 우리의 날들이 온다고~!!`,
  },
  11: {
    name: '가족끼리 먹는 떡국',
    img: require('../static/images/result/11.png'),
    info: `어머머! 이게 뭐람? 이건 바로 가족끼리 먹을 수 있는 떡국이야!!
    벌써 따뜻해지는 이 느낌 너무 좋잖아 ><!! 이걸 먹으면 새해에도 가족들하고
    화목하게 잘 지낼 수 있단 말씀! 이거 먹고 내년에도 가족들하고 행복해져!!
    아 맞다 떡국 먹으면 나이먹으니까 많이 먹어서 부모님이랑 친구먹어버령 ㅎㅎ`,
  },
  // 2개
  12: {
    name: '현실과 낭만 둘다 놓칠 수 없는 구름떡',
    img: require('../static/images/result/12.png'),
    info: `채워야해요`,
  },
  13: {
    name: '사회생활 만렙 술떡',
    img: require('../static/images/result/13.png'),
    info: `채워야해요`,
  },
  14: {
    name: '고생끝에 낙이 오리라 솔방울떡',
    img: require('../static/images/result/14.png'),
    info: `채워야해요`,
  },
  15: {
    name: '낭만적인 분위기메이커 티라미수떡',
    img: require('../static/images/result/15.png'),
    info: `채워야해요`,
  },
  16: {
    name: '그대여 꽃 피우리라 화전',
    img: require('../static/images/result/16.png'),
    info: `채워야해요`,
  },
  17: {
    name: '무한한 가능성을 지닌 가래떡',
    img: require('../static/images/result/17.png'),
    info: `채워야해요`,
  },

  // 3개
  18: {
    name: '다방면에서 성공할 무지개떡',
    img: require('../static/images/result/18.png'),
    info: `채워야해요`,
  },
  19: {
    name: '돈이 보이는 금빛 인절미',
    img: require('../static/images/result/19.png'),
    info: `채워야해요`,
  },
  20: {
    name: '낭만파 새하얀 백설기',
    img: require('../static/images/result/20.png'),
    info: `채워야해요`,
  },
  21: {
    name: '당신처럼 달달한 꿀떡',
    img: require('../static/images/result/21.png'),
    info: `채워야해요`,
  },
  22: {
    name: '슈퍼맨은 바로 당신! 떡케이크',
    img: require('../static/images/result/22.png'),
    info: `채워야해요`,
  },
};

export default results;
