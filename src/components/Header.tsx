import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';
import left from '../static/images/header_left.png';
import right from '../static/images/header_right.png';

function Header() {
  const navigate = useNavigate();
  const header = css`
    display: flex;
    align-items: center;
  `;
  const title = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    font-family: inherit;
    color: inherit;
    background: none;
    border: none;
  `;
  const stars = css`
    width: calc(50% - 60px);
  `;
  return (
    <div className={header}>
      <img src={left} alt="stars" className={stars} />
      <button className={title} onClick={() => navigate('/')}>
        <span>2023</span>
        <span>흑끼의 마법 떡집</span>
      </button>
      <img src={right} alt="stars" className={stars} />
    </div>
  );
}

export default Header;
