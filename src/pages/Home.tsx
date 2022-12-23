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
      <p style={{ whiteSpace: 'pre-line', textAlign: 'center', fontSize: '21px' }}>
        우리 흑끼가 창업했어요!{'\n'}
        당신의 2023 새해 목표가 담긴 재료로{'\n'}
        흑끼가 마법의 떡을 만들어준답니다!
      </p>
      <BottomButton
        text="새해목표 쓰고 덕담받기"
        onclick={() => navigate('/create')}
      />
    </>
  );
}

export default Home;
