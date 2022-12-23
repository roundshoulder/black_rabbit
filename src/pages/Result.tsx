import { useNavigate } from 'react-router-dom';
import { getResult } from '../components/results';
import WishInput from '../components/WishInput';
import result_rabbit from '../static/images/result_rabbit.png';
import hand from '../static/images/hand.png';
import { css } from '@emotion/css';

function Result() {
  const navigate = useNavigate();
  const wish = localStorage.getItem('wish');
  let wishKeys: number[] = [];
  if (wish) {
    wishKeys = Object.keys(JSON.parse(wish)).map((v) => parseInt(v, 10));
  } else {
    navigate('/');
  }
  const result = getResult(wishKeys);

  const instagram = css`
    text-decoration: none;
    color: inherit;
    display: flex;
    gap: 20px;
    margin-top: 30px;
  `;

  const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 40px;
  `;

  return (
    <>
      {wish && (
        <div className={container}>
          <span style={{ fontSize: '28px' }}>{result.name}</span>
          <img src={result.img} alt={result.name} />
          <span
            style={{
              padding: '10px',
              fontSize: '14px',
              whiteSpace: 'pre-line',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            {result.info}
          </span>
          <img src={result_rabbit} alt="공유하면 이뤄질지도 몰라" />
          {wishKeys.length > 0 && (
            <WishInput wishKeys={wishKeys} wish={JSON.parse(wish)} />
          )}
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
