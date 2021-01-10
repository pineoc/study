# Google for mobile Conference Contents

## Android P 최신 기능 소개

지윤이에게 도움 받을 것

## Google Assistant, 내 비즈니스에 어떻게 활용해야할까

- 여러기기, 여러 언어로 `액션`할 수 있도록 하고 있음
- My Day, '매일 필요한 정보를 한 화면에 표시'하는 디스플레이
- 구글 맵스에도 구글 어시스턴트 들어갈 것. (한국은 아직 일정 없음)

### 더 자연스럽게, 더 간편한 디지털 비서

- 새로운 6개의 목소리 추가
- 존 레전드 목소리 -> 가까운 미래에 다른 한국 사람 목소리도 가능하지 않을까 함
- Continued Conversation
  - 오케이 구글, 헤이 구글을 계속 이야기하지 않음
  - 질문, 대화를 이어갈 수 있도록 개선됨
- Multiple Actions
  - 여러개의 질문을 한문장에 해도 답을 할 수 있음
- Pretty Please
  - 아이와 이야기할 때 Please를 붙일 수 있도록 하는 것
  - 한국에 도입할때는 어떻게 할지 고민 중
- Google Duplex
  - 사람 대신 예약할 수 있다는 것

### 새로운 연동 방식 / 기능들: 시간은 더 절약하고 & 유저와의 인게이지먼트는 더 깊게

#### 새로운 연동 방식

- Content Actions
- App Actions

- Verical programs (=Direct Actions)
  - 서비스 이름을 말하는 것이 아닌 유저가 하고 싶은 액션을 그대로 말하고 실행하는 것
- Conversational Actions
  - 연동방식 자유로움
  - DialogFlow를 사용하거나 다른 챗봇을 SDK로 연결할 수도 있음.
  - 서비스 이름을 알고 있을 필요가 있음.
- Content Actions (AMP/SDM)
  - News, Recipes, Podcasts

#### Default Routines

각 상황에서 루틴하게 할 일, 할 프로그램 등을 정의할 수 있음

- Good Morning
- Leaving Home
- Commuting to work
- Commuting to home
- I'm Home
- Bedtime

#### 액션 링크 (Action Link)

웹사이트에서 URL 링크를 통해 어시스턴트로 진행될 수 있게 함.

#### 결제 (재화 / 서비스 구매)

구글 IO에서는 스타벅스로 예시를 들었었음.  
결제 서비스를 조금 더 나아가면, 예약 서비스도 가능할 것.

#### 디지털 굿즈 판매

이미 IAP를 진행하고 있다면 구글 어시스턴트에서도 가능할 것.

## Android Things: Android 앱 개발 기술로 쉽게 IoT 만들기

- 스마트폰, 웨어, 자동차 등을 지원하는 플랫폼
- IoT, 사물인터넷은 지속적으로 성장하고 있음
- IoT 제품을 만드는데에 어려움이 많음 (기술, 프로세스)
- Android Things는 더 쉽게 만들 수 있도록 지원하는 것들이 많음
- 안드로이드 앱 개발하듯이 개발하여 내놓을 수 있음
- 내부 OS 보안 패치는 Google에서 자동으로 진행
- `A/B 테스트`는 업데이트 안정성을 지원함
- IoT는 디스플레이는 옵션, Speech | controller로 가능할 것.
- <https://androidthings.withgoogle.com/#!/>

## Firebase 최신 기능 소개

- Cloud Firestore
  - Serverless, Realtime, Offline
- Cloud Function
  - Unit testing 등이 추가되었음.
- ML Kit 추가
  - Text Extraction, Face Detection, Barcode Detection .. 총 5개 지원.

### Impove app quality

- Stability & Bug -> need to fix it
- Speed, Quailty -> need to improve
- Firebase Crashlytics
  - WeTransfer가 현재 사용 중. -> Log를 보면서 버그를 수정, 99.4%까지 크래시가 없도록 작업하였음
  - Slack 연동 가능
  - 업그레이드 하세욧
- Firebase Performance (beta)
  - slow frames, Frozen frames, Samples 화면을 통해 자세한 사항을 볼 수 있음.
  - SWIGGY가 현재 사용 중. -> 퍼포먼스를 많이 올릴 수 있었음.
- Firebase Test Lab
  - Spotify -> 테스트를 통해 확인할 수 있는 것이 2배 더 많았음
  - <http://g.co/firebase/TestLabSignUp>

### Grow Business

- Firebase Cloud Message
- Firebase A/B Testing
  - A, B 테스트를 통해 분석하고 성장.

## 새로워진 Material Design 소개

### Material Design은?

- 프린트 디자인 메서드 (Print design method)
- 모션 프로바이드 미닝 (Motion provides meaning)
- 플렉시블 파운데이션 (Flexible foundation)
- 크로스 플랫폼 (Cross-platform)
- Open source
- Material Design System is a set of components
- Material Design System offers guidelines (material.io)

### Why use Material Design?

- 개발자와 디자인의 커뮤니케이션 비용 최소화 가능
- 교차플랫폼 지원 용이.
- 스티커시트가 많아서 사용해볼 수 있음.
- 전문 연구를 통해 나온 제품. (워크플로우(프로덕트(컴포넌트)))

### 변경된 현재 홈페이지, <https://material.io>

- 사이트 검은색으로 바뀜
- 케이스를 보고 적용해볼 수 있게 공개되어있음.

### 머터리얼 가이드라인

- 다양하게 안내하는 가이드라인
- 소스, 코드 모두 오픈소스
- 컴포넌트 가이드라인은 선택사항

### Develop

- MDC (Material Design Component)
  - Android, iOS, Web ...
- GitHub에 오픈되어 있음

### Tool

- 아이콘 다운받아서 적용해볼 수 있음
- 컬러툴
- 머터리얼 테마 툴 (트렌드 컬러, 글자체 서포팅 툴), 스케치 플러그인으로 추가되어있음

### 새로운 변화

- Tabs
  - Scalable, Informative, Peers (네비게이션 동등성)
  - 탭 텍스트 사이즈는 같아야 함.
  - 아이콘 + 텍스트는 가이드라인에 맞지 않음
- 네비게이션 드로어 (Navigation Drawer)
  - Organized, Identifiable, Contextual
  - 최소 5개의 메뉴
  - 글씨 크기 같게, 아이콘 일관성있게, 디바이더는 필요할때만
- Floating Action Button
  - Constructive, Contextual, Primary
  - 레이아웃 추가 안좋음(노티 버블)
  - 텍스트 권장x
  - 스피드 Dial 3~6개 까지만
  - 같은 성격 아이콘 넣는 것을 권장
- App Bar
  - Persistent, Guiding, Consistant
  - 이미지 넣지 말것
  - 한 줄의 타이틀 텍스트 권장
  - 폰트 사이즈 줄이지 않고, 글자가 잘리지 않도록.
- App Bars: bottom
  - Actionable, Flexible, Ergonomic
  - action이 있어야함.
  - 키보드와 겹치지 않고 위로 올라와 있어야 함.
- Backdrop
  - Relevant, Immediate, Contextual

## ARCore / Daydream 최신 기능 소개

- ARCore 100M 기기가 지원되고 있음
- Education, Advertising, Products에 잘 사용할 수 있을 것.
- Vertical Planes
  - 벽에 오브젝트를 넣을 수 있음.
- Sceneform
  - android studio 플러그인
  - SDK가 ARCore와 잘 연동되어 잘 사용할 수 있음
- Cloud Anchor
  - 클라우드를 통해 모든 사람이 같은 오브젝트를 볼 수 있는 것
  - cross platform으로 가능
  - Light Board (데모 게임)
  - 교육, 게임, 아트, 쇼핑에 모두 적용할 수 있을 것
- VR, Daydream
  - Standalone VR (6DOF), 미라지 솔로 출시
  - Seurat: 모바일 VR을 위한 기술 (<https://github.com/googlevr/seurat>), 오픈소스로 사용할 수 있음.