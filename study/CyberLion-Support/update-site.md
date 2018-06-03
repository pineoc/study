# 한국사이버성폭력대응센터 사이트 업데이트

## 업데이트를 위한 조사

### 현재 사이트 상태

http://www.cyber-lion.com/
- 현재는 gnuboard로 개발되어있음.
- 메인 페이지 UI가 fixed width로 되어있음.
- 모바일 페이지가 없음.
- cyber-lion에 frameset으로 http://wjgreenh.maru.net/lion/ 을 frame으로 넣었음.
- 원본 사이트로 들어가보면, 레아이웃이 table로 작업되어 있음.
- table > table > table ... 지금 있는 UI 코드를 업데이트할 수 있는지 의문.

### 다른 사이트 조사 - DSO

http://www.dsoonline.org/
- DSO 는 XE(XpressEngine)를 사용.
- XpressEngine 3를 사용하는 듯.
- 기본적인 UI가 조금 어긋난 느낌이 있지만 템플릿 형태로 구성됨.
- 컨텐츠 업데이트가 잘 들어나는게 좋음.

## 업데이트(리뉴얼) 방안
- 현재 있는 코드를 약간 수정해서 필요한 기능을 추가.
- XE로 다시 만들기
- Bootstrap을 이용, 백 오피스도 간단하게 구현
