import { css } from '@emotion/css';
import grey_button from '../static/images/grey_button.png';
import yellow_button from '../static/images/yellow_button.png';

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
    border: none;
    font-family: inherit;
    font-size: 18px;
    background: none;
    width: 340px;
    height: 53px;
    color: ${enable ? 'black' : 'white'};
    background-image: url(${enable ? yellow_button : grey_button});
  `;
  return (
    <button onClick={onclick} disabled={!enable} className={button}>
      {text}
    </button>
  );
}

export default BottomButton;
