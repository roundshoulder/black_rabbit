import { css } from '@emotion/css';
import title from '../static/images/title.png';
import home_rabbit from '../static/images/home_rabbit.png';
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
      <img src={home_rabbit} alt="2023 흑끼의 마법 떡집" className={titleImg} />
      {/* prettier-ignore */}
      <p style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
        새해 목표가 담긴 재료를 선택하면{'\n'}
        내가 만든 떡 준다 ㅅㄱ{'\n'}
        3줄은 되야될듯??
      </p>
      <BottomButton
        text="새해목표 쓰고 덕담받기"
        onclick={() => navigate('/create')}
      />
    </>
  );
}

export default Home;
