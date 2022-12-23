import { css } from '@emotion/css';
import create_input_1 from '../static/images/create_input_1.png';
import create_input_2 from '../static/images/create_input_2.png';
import create_input_3 from '../static/images/create_input_3.png';
import ingredients from '../components/ingredients';

function WishInput({
  wishKeys,
  wish,
  setWish,
}: {
  wishKeys: number[];
  wish: {
    [id: number]: string;
  };
  setWish?: any;
}) {
  const inputBackground =
    wishKeys.length === 1
      ? create_input_1
      : wishKeys.length === 2
      ? create_input_2
      : create_input_3;
  const paper = css`
    position: relative;
  `;
  const inputContainer = css`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 13px;
  `;

  return (
    <div className={paper}>
      <img src={inputBackground} alt="paper" style={{ width: '100%' }} />
      <div style={{ position: 'absolute', top: 28, left: 34, width: '80%' }}>
        {wishKeys.map((i) => (
          <div className={inputContainer} key={i}>
            <div style={{ width: '30px' }}>
              <img
                src={ingredients[i].img}
                alt={ingredients[i].name}
                style={{ maxWidth: '30px', maxHeight: '30px' }}
              />
            </div>
            {setWish ? (
              <input
                style={{ width: '100%' }}
                placeholder="입력하세요"
                maxLength={22}
                onChange={(e) => {
                  setWish({
                    ...wish,
                    [i]: e.target.value,
                  });
                }}
              />
            ) : (
              <span style={{ color: 'black' }}>{wish[i]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishInput;
