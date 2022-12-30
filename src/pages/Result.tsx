import { useNavigate } from 'react-router-dom';
import { getResult } from '../components/results';
import result_rabbit from '../static/images/result_rabbit.png';
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

  const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 40px;
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
          <span style={{ fontSize: '28px' }}>{result.name}</span>
          <img src={result.img} alt={result.name} />
          <span className={text}>{result.info}</span>
          <img
            src={result_rabbit}
            alt="공유하면 이뤄질지도 몰라"
            style={{ width: '90%' }}
          />
          <a
            href="https://instagram.com/magic_heukki?igshid=MWI4MTIyMDE="
            className={instagram}
          >
            <img src={hand} alt="다른 떡 구경하기" style={{ width: '40px' }} />{' '}
            다른 떡 구경하기
          </a>
        </div>
      )}
    </>
  );
}

export default Result;
