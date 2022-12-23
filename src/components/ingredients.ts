export interface ingredient {
  name: string;
  img: any;
}

const ingredients: ingredient[] = [
  {
    name: '다욧트 샐러드',
    img: require('../static/images/gradients/샐러드.png'),
  },
  {
    name: '미라클모닝쥬스',
    img: require('../static/images/gradients/아침햇살.png'),
  },
  {
    name: '돈되는 금가루',
    img: require('../static/images/gradients/금.png'),
  },
  {
    name: '사랑의 썸라면',
    img: require('../static/images/gradients/라면.png'),
  },
  {
    name: '여행 떠난 연어',
    img: require('../static/images/gradients/연어.png'),
  },
  {
    name: '금연/금주 열매',
    img: require('../static/images/gradients/헛개.png'),
  },
  {
    name: '합격 엿',
    img: require('../static/images/gradients/엿.png'),
  },
  {
    name: '똑똑해지는 눈물',
    img: require('../static/images/gradients/눈물.png'),
  },
  {
    name: '사람되는 쑥마늘',
    img: require('../static/images/gradients/쑥마늘.png'),
  },
  {
    name: '취미시간',
    img: require('../static/images/gradients/자유시간.png'),
  },
  {
    name: '우정 캔디',
    img: require('../static/images/gradients/짝궁.png'),
  },
  {
    name: '화목한 후라이',
    img: require('../static/images/gradients/계란후라이.png'),
  },
];

export default ingredients;
