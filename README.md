# 2023 흑끼의 마법 떡집

🐰 2023년 새해 맞이 덕담 컨텐츠를 제공하는 서비스입니다.

- 새해 목표와 연관된 `재료`를 선택하면,
- 흑끼에게 `행운의 떡`과 `덕담`을 받을 수 있어요!

<br/>

## 🥕 Summary

<table>
  <tr>
    <th>Type</th>
    <td>Static web page</td>
    <td></td>
  </tr>
  <tr>
    <th>Version 1.0</th>
    <td>2022.12.18 ~ 2022.12.25</td>
    <td>서비스 개발</td>
  </tr>
  <tr>
    <th>Version 2.0</th>
    <td>2023.01.22 ~</td>
    <td>사이트 성능 개선</td>
  </tr>
  <tr>
    <th>Role</th>
    <td>개발, CI/CD, 배포, 그림</td>
    <td><a href='https://github.com/da-in'>da-in</a></td>
  </tr>
</table>

<br/>

## 🔧 Stack

<div>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/👩‍🎤Emotion/css-D26AC2?style=flat-square&logoColor=white">
  <img src="https://img.shields.io/badge/Github Pages-222222?style=flat-square&logo=Github&logoColor=white">
</div>

<br/>

## 🚨 웹 성능 Issue

Google [PageSpeed Insights](https://pagespeed.web.dev/) 에서 웹 성능을 측정하였습니다.

### 개선 전 (2023.01.22 기준)

<!-- prettier-ignore -->
||성능|접근성|권장사항|검색엔진 최적화|
|-|:-:|:-:|:-:|:-:|
|mobile|**64**|95|100|92|
|web|96|95|100|100|

### 개선 후 (2023.01.00)

개선 작업 진행중입니다.

### TODO

- [ ] First Contentful Paint(3G)
- [ ] Time to Interactive
- [ ] Speed Index
- [ ] Largest contentful Paint
- [ ] Cumulative Layout shift

<br/>

- [ ] 사용하지 않는 자바스크립트 줄이기
- [ ] 차세대 형식을 사용해 이미지 제공하기
- [ ] 콘텐츠가 포함된 최대 페인트 이미지 미리 로드

<br/>

- [ ] 웹폰트가 로드되는 동안 텍스트가 계속 표시되는지 확인하기
- [ ] 이미지 요소에 `width` 및 `height` 명시
- [ ] 효율적인 캐시 정책
- [ ] 중요 요청 체이닝 차단
- [ ] 요청 수는 낮게, 전송 크기는 작게 유지하기
- [ ] 콘텐츠가 포함된 최대 페인트 요소
- [ ] 대규모 레이아웃 변경 피하기
- [ ] 긴 기본 스레드 작업 피하기

<br/>

- [ ] \<iframe\> 요소에 제목없음
- [ ] 문서에 읽기 쉬운 글꼴 크기를 사용하지 않음
