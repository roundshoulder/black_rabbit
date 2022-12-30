import { css } from '@emotion/css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ingredients from '../components/ingredients';
import loading_rabbit from '../static/images/loading_rabbit.png';

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/result');
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  const wish = localStorage.getItem('wish');
  let wishKeys: number[] = [];
  if (wish) {
    wishKeys = wish.split(',').map((v) => parseInt(v, 10));
  }

  const container = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    align-items: center;
  `;

  const items = css`
    display: flex;
    gap: 20px;
    align-items: center;
  `;

  const rotate = css`
    animation: spin 5s ease-in infinite;
    @keyframes spin {
      100% {
        transform: rotate(2160deg);
      }
    }
  `;

  return (
    <div className={container}>
      <p style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
        <span style={{ fontSize: '24px' }}>재료에 맞는{`\n`}</span>
        <span style={{ fontSize: '40px' }}>떡 만드는 중...</span>
      </p>
      <div className={items}>
        {wishKeys.map((i) => (
          <img
            src={ingredients[i].img}
            alt="ingredients"
            key={i}
            className={rotate}
          />
        ))}
      </div>
      <img
        src={loading_rabbit}
        alt="loading rabbit"
        style={{ width: '110px' }}
      />
      <span style={{ fontSize: '24px' }}>잠시 기다려바</span>
    </div>
  );
}

export default Loading;
