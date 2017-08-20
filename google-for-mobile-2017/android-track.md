# Android Track Sessions
안드로이드 세션

## What's New in Android
### Attention
- Android O Notifications
  - Attention-based sorting
  - Notification Channels
  - Notification Badges or Dots
- Alert Windows
  - New floating layer
  - For developers
    - Use TYPE_APPLICATION_OVERLAY
- Background Limits
  - Improve RAM / battery performance
- Location & Sensors
  - Location Best Practices
    - Foreground services
    - Geofencing
    - Location batching
  - Sensors
- Android Support Library
  - Min SDK version 14 (reduced 1.4K methods)
### New
- UI
  - Adaptive Icons
  - Pinning Shortcuts & Widgets
  - INSTALL_SHORTCUT 브로드캐스트가 deprecated됨.
  - Picture in picture가 지원됨
  - 멀티 디스플레이
  - Autofill Framework
  - Physical Animation
- Media
  - Media improvements
  - AAudio Native API
- WebView
  - 다른 프로세스에서 돌아가게 바뀜.
- Text
  - Fonts in XML
  - Downloadable Fonts
  - Auto-sizing Textview
- Accessibility
  - Visual Impairments
  - print disabilities
  - for developers
- System
  - Strict mode
- Security
  - Google Play Protect
- Instant Apps
- Android Go
- System Health
- Android Gradle Builds
- ART Performnace / Memory improvements
  - GC 속도가 빨라졌음.

## 새로워진 안드로이드 개발툴 소개 - 양찬석
안드로이드 스튜디오 개발툴에 대한 소개
### 로드맵
- 작년 I/O에서 2.2버전 릴리즈
- 2.3버전은 작년 11월에서 Constaint Layout, Instant Run
- 2.4가 아닌 3.0이 된 이유. 업데이트 할 것도 많고 그래들 호환성도 맞춰야할 것들이 있어서 Major 업데이트

### 주요 기능 소개
#### 개발
- 코틀린 지원
- 인스턴트 앱
  - 4메가 미만으로 APK를 만들어야 하는데 이를 위해서는 라이브러리 쪼개야함. com.android.feature로 나눠지는게 포인트.
#### 빌드
- 빌드 속도 빨라짐.
  - 변경된 부분만 빌드하게 task들을 쪼개고 정리하는 중.
  - build cache가 지원되면 더 빨라질듯 (3.0 혹은 3.1에 업데이트 될듯)
  - Single Module VS Many Modules, single module 빌드가 더 빨랐는데 이제는 별로 차이가 없음.
  - Parallel build를 통해서 비슷해진 것.
  - 자바 8 지원.
  - 종속성 관리 지원.

#### 테스트
- 에뮬레이터
  - 이제 에뮬레이터에 플레이 스토어를 가지는 이미지가 추가됨
  - 레이아웃 inspector 추가됨.

#### 최적화
- 안드로이드 Vital
- 프로파일러 향상됨

## 안드로이드 앱 사이즈 줄이기
### Auto multi build apk
자동으로 armeabi v7 만 올리면 안드로이드 O 에서 자동으로 알아서 내려줘서 APK는 맞는 것만 받기 때문에 사이즈가 줄어듬.

### app signing
app signing은 현재 v1, v2 로 진행되고 있음.

## 인스턴트 앱
예시) jet, Vimeo, wanted, buzzfeed tasty ...
### prepare your use case
- Conversion
  - 인스턴트 앱을 통해 쉽게 접근하고 이를 통해 유저를 획득.
- Reach
  - URL을 통해서 앱을 만나게 할 수 있음.

### Guiding principles
1. One app, before and after installation.
  - modulize app features
  - 설치하기 전, 후가 같은 앱이어야한다.
2. Entering your app
  - Design for multiple entry points.
  - Design for home screen entry.
3. Decreasing Friction.
  - Identity, 스마트 락이나 다른 앱에서 가입된 것을 확인해야한다.
  - Physical Payments, 구글 계정에 저장된 카드로 결제될 수 있게 API제공되니까 그거 써라
  - No New Friction!
4. Installing Your App.
  - Play Install API, 사용자는 인스턴트 앱 상태에 다운로드를 하고 있더라도 앱을 계속 사용할 수 있다.
  -
5. Tracking success
  - Publish through the play console, 콘솔에서 볼 수 있음.
  - New metrics and flows, installed VS instant app metrics

### How do you define success?

### Recap
1. g.co/instantApps
2. 인스턴트 앱쓰고 사용자 더 모아봐
3. 인스턴트 앱 만들때 생각해둬야하는건 one app, entry point.

## 구글 플레이 스토어로 오류 없는 앱 만들기
구글 플레이 스토어에서 지원되는 성능관련 리포트를 통해 앱의 어디가 문제가 있는지,  
이를 통해 어디를 수정해야하는지 알 수 있어서 오류 없는 앱을 만들 수 있다는 것인 듯.

### ANR
- ANR을 통해서 버그를 찾을 수 있는데, 그 상황을 재현하는 기능이 3.0에서 지원될 예정.

### Wake Lock
다운로드 요청 후 아무 반응이 없는 경우가 일반적인데 이 상황을 잘 막아야함

### Wakeups


### Render Times

위의 3개는 배터리를 많이 소모하는 것들.

### Firebase Performance Monitoring
이것도 사용하면 좋음!
