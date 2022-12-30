import { css } from '@emotion/css';
import click from '../static/images/click.svg';

function BottomButton({
  text,
  onclick,
  enable = true,
  hasClick = false,
}: {
  text: string;
  onclick: any;
  enable?: boolean;
  hasClick?: boolean;
}) {
  const button = css`
    border: solid 2px ${enable ? '#000000' : '#767676'};
    position: relative;
    background: none;
    width: 340px;
    height: 45px;
    border-radius: 45px;
    color: ${enable ? '#000000' : '#767676'};
    background-color: ${enable ? '#FFFF00' : '#AFAFAF'};
    margin-top: 20px;
  `;
  const floating = css`
    position: absolute;
    right: -20px;
    top: 5px;
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
