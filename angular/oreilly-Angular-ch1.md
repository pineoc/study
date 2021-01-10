# Oreilly Angular - The Complete Guide 2020

<https://learning.oreilly.com/videos/angular-the/9781788998437>

## Chapter 1: Getting Started

### 프로젝트 설정

https://angular.kr/guide/setup-local

1. node, npm 설치
2. npm install -g @angular/cli:latest
3. ng new my-first-app
  - https://angular.io/cli/new
4. ng serve

### 강의 구조

1. 시작
2. 기초 내용(The Basics)
3. 컴포넌트와 데이터 바인딩
4. 디렉티브
5. 서비스 & 의존성 주입(Dependency Injection)
6. 라우팅
7. 옵저버블(Observables)
8. Forms
9. 파이프
10. Http
11. Authentication
12. 최적화, NgModules
13. Deployment
14. 애니메이션, 테스팅

### TypeScript

Types, Classes, Interfaces가 있는 JS 슈퍼셋으로 볼 수 있음.
타입 스크립트는 컴파일되어 자바스크립트로 변환됨
(이 강의에서는 타입스크립트에 대해 깊게 다루지 않고 프로젝트를 만드는데에 집중하는 듯)

### 프로젝트 기본 설정 (부트스트랩 추가)

강의에서는 .angular-cli.json이었는데 cli 버전 10에서는 angular.json으로 되어있음 (경로도 다르다)

```json
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
  "outputPath": "dist/my-first-app",
  "index": "src/index.html",
  "main": "src/main.ts",
  "polyfills": "src/polyfills.ts",
    "tsConfig": "tsconfig.app.json",
    "aot": true,
    "assets": [
      "src/favicon.ico",
      "src/assets"
    ],
    "styles": [
      "src/styles.scss",
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": []
  },
```

이런 식으로 스타일을 추가해주었음.

이렇게 챕터 1 마무리.

