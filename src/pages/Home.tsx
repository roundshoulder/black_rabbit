import { css } from '@emotion/css';
import BottomButton from '../components/BottomButton';
import { useNavigate } from 'react-router-dom';
import Hits from '../components/Hits';
import home from '../static/images/home.svg';
import counter_bg from '../static/images/counter_bg.svg';

function Home() {
  const navigate = useNavigate();
  const homeImg = css`
    width: 100%;
  `;
  const counterContainer = css`
    position: relative;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <img src={home} alt="2023 흑끼의 마법 떡집" className={homeImg} />
      <BottomButton
        text="새해목표 쓰고 마법떡 받기"
        onclick={() => navigate('/create')}
      />
      <div className={counterContainer}>
        <div style={{ paddingLeft: '60px', position: 'absolute', top: '0px' }}>
          <img src={counter_bg} alt="떡 타간 사람 복받음" />
        </div>
        <Hits />
      </div>
    </>
  );
}

export default Home;
