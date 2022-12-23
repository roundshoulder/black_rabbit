import BottomButton from '../components/BottomButton';
import create_check from '../static/images/create_check.png';
import create_ingredients from '../static/images/create_ingredients.png';
import create_detail from '../static/images/create_detail.png';
import create_background from '../static/images/create_background.png';
import ingredients, { ingredient } from '../components/ingredients';
import { css } from '@emotion/css';
import { useState } from 'react';
import create_input_1 from '../static/images/create_input_1.png';
import create_input_2 from '../static/images/create_input_2.png';
import create_input_3 from '../static/images/create_input_3.png';
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate();
  interface wishProps {
    [id: number]: string;
  }
  const [wish, setWish] = useState<wishProps>({});
  const wishKeys = Object.keys(wish).map((v) => parseInt(v));
  const inputBackground =
    wishKeys.length === 1
      ? create_input_1
      : wishKeys.length === 2
      ? create_input_2
      : create_input_3;
  const ItemContainer = ({
    item,
    index,
  }: {
    item: ingredient;
    index: number;
  }) => {
    const itemConatiner = css`
      width: 25%;
      font-family: inherit;
      font-size: 14px;
      color: black;
      border: none;
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      z-index: 10;
      height: 100px;
      margin-bottom: 30px;
      position: relative;
    `;

    const check = css`
      position: absolute;
    `;

    return (
      <button
        className={itemConatiner}
        onClick={() => {
          wishKeys.includes(index)
            ? setWish(
                wishKeys
                  .filter((i) => i !== index)
                  .reduce((cur, key) => {
                    return Object.assign(cur, { [key]: wish[key] });
                  }, {})
              )
            : wishKeys.length < 3 && setWish({ ...wish, [index]: '' });
        }}
      >
        <img src={item.img} alt={item.name} />
        {wishKeys.includes(index) && (
          <img src={create_check} alt="checked" className={check} />
        )}
        {item.name}
      </button>
    );
  };
  const ingredientsContainer = css`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    top: 0;
    padding: 20px;
  `;
  const paper = css`
    position: relative;
  `;
  const inputContainer = css`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
  `;
  return (
    <>
      <img
        src={create_ingredients}
        alt="떡에 들어갈 재료를 골라봐. 3개까지만 가능!"
      />
      <div style={{ position: 'relative' }}>
        <img
          src={create_background}
          style={{ width: '100%' }}
          alt="background"
        />
        <div className={ingredientsContainer}>
          {ingredients.map((item, i) => (
            <ItemContainer item={item} index={i} key={i} />
          ))}
        </div>
      </div>
      {wishKeys.length > 0 && (
        <div>
          <img src={create_detail} alt="구체적으로 적을 수록 좋아" />
          <div className={paper}>
            <img src={inputBackground} alt="paper" />
            <div style={{ position: 'absolute', top: 28, left: 34 }}>
              {wishKeys.map((i) => (
                <div className={inputContainer} key={i}>
                  <div style={{ width: '30px' }}>
                    <img
                      src={ingredients[i].img}
                      alt={ingredients[i].name}
                      style={{ maxWidth: '30px', maxHeight: '30px' }}
                    />
                  </div>
                  <input
                    placeholder="입력하세요"
                    onChange={(e) => {
                      setWish({
                        ...wish,
                        [i]: e.target.value,
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <BottomButton
        text="흑끼한테 전달하기"
        enable={wishKeys.length > 0 && !Object.values(wish).includes('')}
        onclick={() => {
          window.localStorage.setItem('wish', JSON.stringify(wish));
          navigate('/loading');
        }}
      />
    </>
  );
}

export default Create;
