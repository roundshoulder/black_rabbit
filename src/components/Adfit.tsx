import { useEffect } from 'react';

function Adfit() {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '50');
    ins.setAttribute('data-ad-unit', 'DAN-FMUSMrWcbeIfBZ1X');
    ins.setAttribute('style', 'display:none;');
    scr.async = true;
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    document.querySelector('.adfit')?.appendChild(ins);
    document.querySelector('.adfit')?.appendChild(scr);
  }, []);

  return <div className="adfit"></div>;
}

export default Adfit;
