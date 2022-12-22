import { css } from '@emotion/css';
import left from '../static/images/header_left.png';
import right from '../static/images/header_right.png';

function Header() {
  const header = css`
    display: flex;
    align-items: center;
  `;
  const title = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    text-decoration: none;
    color: inherit;
  `;
  const stars = css`
    width: calc(50% - 60px);
  `;
  return (
    <div className={header}>
      <img src={left} alt="stars" className={stars} />
      <a className={title} href="/">
        <span>2023</span>
        <span>흑끼의 마법 떡집</span>
      </a>
      <img src={right} alt="stars" className={stars} />
    </div>
  );
}

export default Header;
