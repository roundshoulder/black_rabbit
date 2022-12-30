import { useNavigate } from 'react-router-dom';
import { getResult } from '../components/results';
import result_hidden from '../static/images/result_hidden.svg';
import result_sun from '../static/images/result_sun.svg';
import hand from '../static/images/hand.png';
import { css } from '@emotion/css';

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

  const text = css`
    padding: 10px;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    white-space: pre-line;
    text-align: center;
    margin-bottom: 10px;
    font-weight: normal;
    line-height: 24px;
  `;

  return (
    <>
      {wish && (
        <div className={container}>
          <p>2023 행운의 떡</p>
          <span style={{ fontSize: '24px' }}>{result.name}</span>
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
            <img src={result.img} alt={result.name} style={{ zIndex: '10' }} />
          </div>
          <span className={text}>{result.info}</span>
          <a
            href="https://instagram.com/magic_heukki?igshid=MWI4MTIyMDE="
            className={instagram}
          >
            <img src={hand} alt="다른 떡 구경하기" style={{ width: '40px' }} />{' '}
            다른 떡 구경하기
          </a>
        </div>
      )}
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
