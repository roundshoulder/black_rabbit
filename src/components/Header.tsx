import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const header = css`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const nav = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: inherit;
    color: inherit;
    background: none;
    border: none;
  `;

  return (
    <div className={header}>
      <button className={nav} onClick={() => navigate('/')}>
        {`< 처음으로`}
      </button>
      <button className={nav} onClick={() => navigate('/')}>
        흑끼의 마법떡집
      </button>
    </div>
  );
}

export default Header;
