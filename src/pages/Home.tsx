import { css } from '@emotion/css';
import BottomButton from '../components/BottomButton';
import { useNavigate } from 'react-router-dom';
import Hits from '../components/Hits';
import home from '../static/images/home.svg';
import intro from '../static/images/intro.svg';

function Home() {
  const navigate = useNavigate();
  const homeImg = css`
    width: 100%;
  `;

  const introStyle = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const introText = css`
    white-space: pre-line;
    text-align: center;
  `;
  return (
    <>
      <img src={home} alt="2023 흑끼의 마법 떡집" className={homeImg} />
      <div style={{ position: 'relative' }}>
        <img src={intro} alt="intro" className={homeImg} />
        <div className={introStyle}>
          <p className={introText}>
            새 해는 흑토끼의 해!
            <br />
            흑끼가 마법의 떡을 만들어준다!
          </p>
        </div>
      </div>
      <BottomButton
        text="새해목표 쓰고 마법떡 받기"
        onclick={() => navigate('/create')}
      />
      <Hits />
    </>
  );
}

export default Home;
