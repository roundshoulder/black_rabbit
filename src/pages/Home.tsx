import { css } from '@emotion/css';
import BottomButton from '../components/BottomButton';
import { useNavigate } from 'react-router-dom';
import Hits from '../components/Hits';
import home from '../static/images/home.svg';
import counter_bg from '../static/images/counter_bg.svg';
import event from '../static/images/event.svg';

function Home() {
  const navigate = useNavigate();
  const homeImg = css`
    width: 100%;
    margin-top: 10px;
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
        hasClick={true}
      />
      <img
        src={event}
        alt="10,000번째에 가장 가까운 사람 찾아요 인스타에 흑끼태그해서 올리면....!(비밀) @magic_heukki"
      />
      <div className={counterContainer}>
        <div style={{ position: 'absolute', top: '0px', right: '-60px' }}>
          <img src={counter_bg} alt="떡 타간 사람 복받음" />
        </div>
        <Hits />
      </div>
    </>
  );
}

export default Home;
