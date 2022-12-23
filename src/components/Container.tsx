import { css } from '@emotion/css';
import { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  const container = css`
    display: flex;
    justify-content: center;
    width: 100%;
  `;

  const innerContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px;
    padding-bottom: 100px;
    @media screen and (min-width: 480px) {
      width: 480px;
    }
  `;
  return (
    <div className={container}>
      <div className={innerContainer}>{children}</div>
    </div>
  );
}

export default Container;
