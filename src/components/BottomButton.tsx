import { css } from '@emotion/css';

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

    background: none;
    width: 340px;
    height: 45px;
    border-radius: 45px;
    color: ${enable ? '#000000' : '#767676'};
    background-color: ${enable ? '#FFFF00' : '#AFAFAF'};
    margin-top: 20px;
  `;
  return (
    <button onClick={onclick} disabled={!enable} className={button}>
      {text}
    </button>
  );
}

export default BottomButton;
