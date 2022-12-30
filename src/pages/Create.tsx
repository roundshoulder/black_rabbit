import BottomButton from '../components/BottomButton';
import create_check from '../static/images/create_check.svg';
import create_ingredients from '../static/images/create_ingredients.svg';
import create_bucket from '../static/images/create_bucket.svg';
import menu from '../static/images/menu.svg';
import ingredients, { ingredient } from '../components/ingredients';
import { css } from '@emotion/css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate();
  const [wish, setWish] = useState<number[]>([]);
  const ItemContainer = ({
    item,
    index,
  }: {
    item: ingredient;
    index: number;
  }) => {
    const itemConatiner = css`
      padding: 0;
      width: 33%;
      font-size: 12px;
      border: none;
      background: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100px;
      position: relative;
      color: black;
    `;

    const check = css`
      position: absolute;
      top: 15px;
    `;

    return (
      <button
        className={itemConatiner}
        onClick={() => {
          wish.includes(index)
            ? setWish(wish.filter((i) => i !== index))
            : wish.length < 3 && setWish([...wish, index]);
        }}
      >
        <img src={item.img} alt={item.name} />
        {wish.includes(index) && (
          <img src={create_check} alt="checked" className={check} />
        )}
        {item.name}
      </button>
    );
  };

  const titleConatainer = css`
    width: 100%;
    top: -10px;
    display: flex;
    justify-content: center;
    position: absolute;
  `;

  const ingredientsContainer = css`
    background-color: white;
    margin: 20px 20px 10px 20px;
    border: solid 2px black;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  `;

  const bucketContainer = css`
    width: 100%;
    min-height: 100px;
    position: relative;
  `;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '40px',
      }}
    >
      <img
        src={create_ingredients}
        alt="떡에 들어갈 재료를 골라봐. 3개까지만 가능!"
        style={{ width: '90%', marginBottom: '10px' }}
      />
      <div style={{ position: 'relative' }}>
        <div className={titleConatainer}>
          <img src={menu} alt="2023 행운의 재료" />
        </div>
        <div className={ingredientsContainer}>
          {ingredients.map((item, i) => (
            <ItemContainer item={item} index={i} key={i} />
          ))}
        </div>
      </div>
      <div className={bucketContainer}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            top: '0px',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '30px',
            alignItems: 'center',
          }}
        >
          {wish.map((i) => (
            <img src={ingredients[i].img} alt={ingredients[i].name} key={i} />
          ))}
        </div>
        <p style={{ margin: '0px 20px 30px 20px' }}>* 원산지 : 국내산</p>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={create_bucket}
            alt="바구니를 들고있는 휘끼"
            style={{ zIndex: '10' }}
          />
        </div>
      </div>
      <BottomButton
        text="흑끼한테 전달하기"
        enable={wish.length > 0}
        onclick={() => {
          window.localStorage.setItem('wish', wish.toString());
          navigate('/loading');
        }}
      />
    </div>
  );
}

export default Create;
