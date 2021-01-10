ScriptRunner 꼼지락꼼지락 :hammer_and_wrench:
===
<!-- page_number: true -->
#### 이윤석(pineoc)

---
# :bulb: ScriptRunner란?

- ![](https://scriptrunner.adaptavist.com/latest/images/SR-web-logo.png)
- `Jira`, `Confluence`, `Bitbucket`에서 사용할 수 있는 플러그인(앱)
- 기반 시스템에서 일어나는 이벤트, 컴포넌트를 중심으로 동작
- `Groovy`를 이용하여 스크립팅
---
# :bulb: ScriptRunner란?

## 시스템에서 제공하는 기능 외에 많은 것들을 커스터마이즈 할 수 있는 앱
> :smile: Jira 플러그인 기능 중심으로!

---
# :book: 주요 기능
- Built-in Scripts: 기본적으로 포함되어있는 스크립트 기능
- Script JQL Functions: JQL에서 서브쿼리가 가능하도록 함
- Listeners: 이벤트를 Listen 하고 그에 따라 Action 함
- Behavior: 특정 행동(이벤트)에 따라 Action을 설정 가능 함
- ETC...

---
# :book: 주요 기능
- Built-in Scripts: 기본적으로 포함되어있는 스크립트 기능
- :white_check_mark: **`Script JQL Functions`: JQL에서 서브쿼리가 가능하도록 함**
- :white_check_mark: **`Listener`: 이벤트를 Listen하고 그에 따라 Action 함**
- Behavior: 특정 행동(이벤트)에 따라 Action을 설정가능 함
- ETC...

---
# 지금 사용하고 있는 기능들
#### 앞서 소개드린 주요 기능을 중심으로

---
# 1. 나에게 할당된 `Task`의 `상위 Epic`의 모든 `Task`와 `Sub-Task`를 보여주세요!
##### Feat. Script JQL Functions

---
## 1. 나에게 할당된 `Task`의 `상위 Epic`의 모든 `Task`와 `Sub-Task`를 보여주세요!
- :bulb:Needs: 작업자에게 할당된 업무 외에 참고해야하는 업무를 볼 수 있도록 개인화 Board를 만들어주기 위함
- 많이 느리지 않아야함
- Epic & Task & Sub-Task가 다 잘 보여야함

---
## 뚝딱뚝딱 :hammer_and_wrench: :smile:

###### `(assignee = currentUser() AND resolution = Unresolved)` OR `(issueFunction IN epicsOf("assignee = currentUser() AND resolution = Unresolved"))` OR `issueFunction IN issuesInEpics("assignee = currentUser() AND resolution = Unresolved")` OR `issueFunction IN subtasksOf("issueFunction IN issuesInEpics('assignee = currentUser() AND resolution = Unresolved')")` OR `issueFunction IN issuesInEpics("resolution = Unresolved AND issueFunction IN epicsOf('assignee = currentUser() AND resolution = Unresolved')")` OR `issueFunction IN subtasksOf("issueFunction IN issuesInEpics('issueFunction IN epicsOf(\"assignee = currentUser() AND resolution = Unresolved\") AND resolution = Unresolved')")`

---
## :white_check_mark: 1. 나에게 할당된 `Task`의 `상위 Epic`의 모든 `Task`와 `Sub-Task`를 보여주세요!

![](/Users/pineoc/Downloads/sc-jql3.png)
- 나에게 할당된 이슈 추가
- 나에게 할당된 이슈의 Epic 추가
- 나에게 할당된 이슈의 Epic의 Task와 Sub-Task 추가
> Thanks to `Lim Jaehoon`

---
# 2. Label에 `DevOps`가 입력될 경우 `Watcher`에 저와 팀원들을 추가해주세요.
##### Feat. Listeners

---
## 2. Label에 `DevOps`가 입력될 경우 `Watcher`에 팀원들을 추가해주세요.
- :bulb:Needs: DevOps 업무의 경우 팀원들이 같이 봐야보고 대응해야 해서 watcher 추가가 필요함
- :thinking: 향후 다른 Label 입력에 대한 요청도 있을 것 같다!

---
## 뚝딱뚝딱 (with Jira) :hammer_and_wrench:
![](/Users/pineoc/Downloads/sc-l2.png)

---
## 뚝딱뚝딱 (with Groovy) :hammer_and_wrench:
대략 스크립트 항목에 이렇게 작성한다 정도로 참고해주세요 :)
![](/Users/pineoc/Downloads/sc-l1.png)

---

## :white_check_mark: 2. Label에 `DevOps`가 입력될 경우 `Watcher`에 팀원들을 추가해주세요.

- `DevOps` 뿐만 아니라 다른 값도 대응할 수 있도록 고려
- 다른 이벤트에 대한 Watcher 추가 대응을 위해 함수 작성
- `[TODO]` Admin이 아닌 사용자도 리스트 변경 가능하도록 개선 필요

---
# 그 외의 요청에 따라 작업한 것들
![](https://live.staticflickr.com/8573/16614043072_e9a9be0a0b_z.jpg)
:family:: 이것도 가능한가요? 저건요? 이건요? 

---
## 그 외의 요청에 따라 작업한 것들

- `Component` 추가에 따라 특정 인원을 `Watcher`에 등록해주세요.
- 스프린트가 `Active`일 경우,
이슈 상태가 `Backlog` -> `To Do`로 `자동으로` 가게 해주세요.
- 팀원이 담당했던 이슈에 `특정 Label`이 입력되게 해주세요.
- 버그 이슈 중 `Priority`가 `Major` 이상일 경우,
특정 인원을 `Watcher`에 등록해주세요.
- 이슈 생성시 `템플릿`이 적용되게 해주세요.
- ...

---
# ScriptRunner :hammer_and_wrench:
- 플러그인이라 시스템 상 제약이 많지만
- 시스템에서 기본적으로 제공하는 것 보다 커스터마이즈 하기 좋고
- 엔지니어(개발자)라면 더 많은 기능을 사용할 수 있습니다
  - `Java` 또는 `Groovy`를 잘 사용하신다면 금상첨화 :+1:
- 개발자가 아니라면 `Automation`이라는 플러그인 추천

---
# 이쯤에서 블로그 홍보
https://pineoc.github.io/blog/tags/ScriptRunner/
ScriptRunner 관련 글들을 종종 쓰고 있습니다.
> 소개: https://pineoc.github.io/blog/2019/04/21/scriptrunner1/

---
# 감사합니다 :+1: