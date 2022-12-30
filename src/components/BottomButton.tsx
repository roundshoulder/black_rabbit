import { css } from '@emotion/css';
import click from '../static/images/click.svg';

function BottomButton({
  text,
  onclick,
  enable = true,
}: {
  text: string;
  onclick: any;
  enable?: boolean;
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
    right: -30px;
    top: 5px;
    animation: bounce 2s ease infinite;
    @keyframes bounce {
      70% {
        transform: translateY(0%);
      }
      80% {
        transform: translateY(-20%);
      }
      90% {
        transform: translateY(0%);
      }
      95% {
        transform: translateY(-7%);
      }
      97% {
        transform: translateY(0%);
      }
      99% {
        transform: translateY(-3%);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;
  return (
    <button onClick={onclick} disabled={!enable} className={button}>
      <img src={click} alt="click" className={floating} />
      {text}
    </button>
  );
}

export default BottomButton;
