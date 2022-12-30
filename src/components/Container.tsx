import { css } from '@emotion/css';
import { ReactNode } from 'react';
import Adfit from './Adfit';

function Container({ children }: { children: ReactNode }) {
  const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;

  const innerContainer = css`
    flex-grow: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
    padding: 10px 0px;
    padding-bottom: 100px;
    @media screen and (min-width: 480px) {
      width: 480px;
    }
  `;
  return (
    <div className={container}>
      <Adfit />
      <div className={innerContainer}>{children}</div>
    </div>
  );
}

export default Container;
