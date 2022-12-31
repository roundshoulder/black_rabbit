import { useNavigate } from 'react-router-dom';
import results, { getResult } from '../components/results';
import result_hidden from '../static/images/result_hidden.svg';
import result_sun from '../static/images/result_sun.svg';
import result_good_bad from '../static/images/result_good_bad.svg';
import result_stamp from '../static/images/result_stamp.svg';
import result_share from '../static/images/result_share.svg';
import result_little from '../static/images/result_little.svg';
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
  const good = results[result.good];
  const bad = results[result.bad];

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
    gap: 10px;
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

  const goodbadContainer = css`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <>
      {wish && (
        <div className={container}>
          <p>2023 행운의 떡</p>
          <p
            style={{
              fontSize: '24px',
              whiteSpace: 'pre-line',
              textAlign: 'center',
            }}
          >
            {result.name}
          </p>
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
              style={{ zIndex: '10', width: '45%', marginTop: '20px' }}
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
      <div style={{ position: 'relative', height: '220px' }}>
        <img src={result_good_bad} alt="뽀뽀쪽" />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            top: '105px',
            display: 'flex',
            fontSize: '10px',
            whiteSpace: 'pre-line',
            textAlign: 'center',
          }}
        >
          <div className={goodbadContainer}>
            <img src={good.img} alt={good.name} width={80} />
            <p>{good.name}</p>
          </div>
          <div className={goodbadContainer}>
            <img src={bad.img} alt={bad.name} width={80} />
            <p>{bad.name}</p>
          </div>
        </div>
      </div>
      <img src={result_share} alt="share" />
      <a
        href="https://www.instagram.com/magic_heukki/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          paddingRight: '30px',
        }}
      >
        <img src={result_little} alt="휘끼" />
        <BottomButton
          text="다른 떡 구경하기"
          onclick={() => {}}
          hasClick={true}
          isSmall={true}
        />
      </a>
      <p style={{ color: 'red', fontSize: '12px' }}>
        * 경고. 스크롤을 내리지 마시오.
      </p>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '650px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ textAlign: 'center', marginLeft: '20px' }}>
          <a
            href="https://www.instagram.com/magic_heukki/"
            style={{ color: 'grey' }}
          >
            @magic_heukki
          </a>
          <br />
          팔로우 안하면 근손실
          <br />- 3대 500 흑끼 -
        </div>
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
