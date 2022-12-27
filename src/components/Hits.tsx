import { css } from '@emotion/css';

function Hits() {
  const badge = css`
    margin-top: 40px;
  `;
  return (
    <a href="https://hits.seeyoufarm.com" className={badge}>
      <img
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Froundshoulder.github.io%2Fblack_rabbit&count_bg=%23AA1FFF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EB%96%A1+%ED%83%80%EA%B0%84+%EC%82%AC%EB%9E%8C&edge_flat=false"
        alt="badge"
      />
    </a>
  );
}

export default Hits;
