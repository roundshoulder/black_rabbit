import { useNavigate } from 'react-router-dom';
import { getResult } from '../components/results';
import result_hidden from '../static/images/result_hidden.svg';
import result_sun from '../static/images/result_sun.svg';
import result_good from '../static/images/result_good.svg';
import result_bad from '../static/images/result_bad.svg';
import result_stamp from '../static/images/result_stamp.svg';
import { css } from '@emotion/css';
import BottomButton from '../components/BottomButton';

function Result() {
  const navigate = useNavigate();
  const wish = localStorage.getItem('wish');
  let wishKeys: number[] = [];
  if (wish) {
    wishKeys = wish.split(',').map((v) => parseInt(v, 10));
  } else {
    navigate('/');
  }
  const result = getResult(wishKeys);

  const instagram = css`
    text-decoration: none;
    color: inherit;
    display: flex;
    gap: 20px;
    margin-top: 20px;
  `;

  const sunContainer = css`
    width: 100%;
    height: 170px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `;

  const infoContainer = css`
    background-color: white;
    padding: 10px;
    border: solid 2px black;
    border-radius: 10px;
  `;

  const text = css`
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    white-space: pre-line;
    text-align: center;
    line-height: 22px;
  `;

  return (
    <>
      {wish && (
        <div className={container}>
          <p>2023 행운의 떡</p>
          <p style={{ fontSize: '24px' }}>{result.name}</p>
          <div className={sunContainer}>
            <div
              style={{
                position: 'absolute',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img src={result_sun} alt="sun" />
            </div>
            <img
              src={result.img}
              alt={result.name}
              style={{ zIndex: '10', width: '30%' }}
            />
          </div>
          <div className={infoContainer}>
            <p className={text}>{result.info}</p>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <img src={result_stamp} alt="stamp" />
            </div>
          </div>
        </div>
      )}
      <img src={result_good} alt="뽀뽀쪽" />
      <img src={result_bad} alt="빌런 토끼" />

      <a href="https://instagram.com/magic_heukki?igshid=MWI4MTIyMDE=">
        <BottomButton
          text="다른 떡 구경하기"
          onclick={() => {}}
          hasClick={true}
        />
      </a>
      <p style={{ color: 'red' }}>* 경고 : 스크롤을 내리지 마시오.</p>
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <img
          src={result_hidden}
          alt="3대 500토끼"
          style={{ position: 'absolute', bottom: '0px', right: '0px' }}
        />
      </div>
    </>
  );
}

export default Result;
