import { css } from '@emotion/css';
import title from '../static/images/title.png';
import bottle from '../static/images/bottle.png';
import BottomButton from '../components/BottomButton';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const titleImg = css`
    width: 100%;
    margin-top: 45px;
  `;
  return (
    <>
      <img src={title} alt="2023 흑끼의 마법 떡집" className={titleImg} />
      <img src={bottle} alt="2023 흑끼의 마법 떡집" className={titleImg} />
      <span>새해 목표가 담긴 재료를 선택하면</span>
      <span>내가 만든 떡 준다 ㅅㄱ</span>
      <span>3줄은 되야될듯??</span>
      <BottomButton
        text="새해목표 쓰고 덕담받기"
        onclick={() => navigate('/create')}
      />
    </>
  );
}

export default Home;
