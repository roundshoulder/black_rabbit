import { css } from '@emotion/css';
import click from '../static/images/click.svg';

function BottomButton({
  text,
  onclick,
  enable = true,
  hasClick = false,
  isSmall = false,
}: {
  text: string;
  onclick: any;
  enable?: boolean;
  hasClick?: boolean;
  isSmall?: boolean;
}) {
  const button = css`
    border: solid 2px ${enable ? '#000000' : '#767676'};
    position: relative;
    background: none;
    width: ${isSmall ? '170px' : '340px'};
    height: 45px;
    border-radius: 45px;
    color: ${enable ? '#000000' : '#767676'};
    background-color: ${enable ? '#FFFF00' : '#AFAFAF'};
  `;
  const floating = css`
    position: absolute;
    right: ${isSmall ? '-50px' : '-20px'};
    top: 10px;
    animation: bounce 1.5s ease infinite;
    /* prettier-ignore */
    @keyframes bounce {
      0% { transform: translateY(0%); }
      10% { transform: translateY(-20%); }
      20% { transform: translateY(0%); }
      25% { transform: translateY(-7%); }
      27% { transform: translateY(0%); }
      29% { transform: translateY(-3%); }
      30% { transform: translateY(0); }
    }
  `;
  return (
    <button onClick={onclick} disabled={!enable} className={button}>
      {hasClick && <img src={click} alt="click" className={floating} />}
      {text}
    </button>
  );
}

export default BottomButton;
