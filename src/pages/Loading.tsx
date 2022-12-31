import { css } from '@emotion/css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ingredients from '../components/ingredients';
import loading_rabbit from '../static/images/loading_rabbit.svg';
import loading_bucket from '../static/images/loading_bucket.svg';

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

  wishKeys = [...wishKeys, ...wishKeys, ...wishKeys];

  const container = css`
    overflow: hidden;
    width: 100%;
  `;

  const items = css`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    animation: slide 2.5s linear infinite;
    @keyframes slide {
      from {
        margin-left: 0px;
      }
      to {
        margin-left: -273px;
      }
    }
  `;

  // const rotate = css`
  //   animation: spin 5s ease-in infinite;
  //   @keyframes spin {
  //     100% {
  //       transform: rotate(2160deg);
  //     }
  //   }
  // `;

  return (
    <>
      <div className={container}>
        <div className={items}>
          {wishKeys.map((i) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img src={ingredients[i].img} alt="ingredients" key={i} />
              <img
                src={loading_bucket}
                alt="흑끼"
                width={'70px'}
                style={{ zIndex: 10, marginTop: '-10px' }}
              />
            </div>
          ))}
        </div>
      </div>
      <p style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '24px' }}>
          널 위한 마법의 떡<br />
          만드는 중...
        </span>
      </p>
      <img
        src={loading_rabbit}
        alt="loading rabbit"
        style={{ width: '100%' }}
      />
    </>
  );
}

export default Loading;
