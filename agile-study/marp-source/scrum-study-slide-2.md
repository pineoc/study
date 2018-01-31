<!-- $theme: default -->
<!-- page_number: true -->

# Scrum Study

@pineoc
이윤석
2018.02.01

---
# 앞서 공유했던 이야기

- 스크럼이란?
  - 사전적 정의
  - 특성, 가치, 진행, 용어 ...
- 스크럼 마스터란?
  - 정의, 역할

---
## 오늘 할 이야기 전에 보고 갈 것

---
# +Product Owner

![alter=http://agileforall.com/wp-content/uploads/2015/12/Scrum_Framework_lg-e1456358707313.jpg](C:\Users\pineoc\Downloads\scrum2.jpg)

---
# +Product Owner
<small>스크럼에서 세 역할(**Product Owner**, Development Team, Scrum Master) 중 하나.</small>

- **Product Vision**을 책임지는 역할.
- 스프린트 목표, 백로그 등의 결정의 중심.
- 제품 백로그(Product Backlog)를 정의, 우선순위를 정해 준다.
  - <small>제품 백로그: 개발할 제품에 대한 요구 사항 목록</small>
- (Should)이해관계 당사자들과의 대화를 하는 유일한 사람.
  - <small>(Should)팀에 들어오는 외압을 컨트롤할 수 있는 유일한 사람.</small>
- **제품을 사용할 고객**이 직접하거나 **비즈니스 요구사항을 정의할 수 있는 사람**이 좋음.

---
# +MVP(Minimum Viable Product)
<small>고객의 피드백을 받아 최소한의 기능(features)을 구현한 제품.</small>

<img src="C:\Users\pineoc\Downloads\FB_IMG_1514187406997.jpg" width="600">

---
# +MVP(Minimum Viable Product)
<small>고객의 피드백을 받아 최소한의 기능(features)을 구현한 제품.</small>

![](C:\Users\pineoc\Downloads\mvp.jpg)

---
# +Product Vision
프로젝트를 통해 달성하고자 하는 것이 간결하면서도 명확하게 담겨 있어야 한다.
<small>
- 누가 제품을 구매하는가
- 목표 대상 고객이 누구인가
- 고객을 무엇을 필요로 하는가
- 제품의 어떤 점이 고객에게 가치를 전달하여 구매하게 하는가
- 고객의 시장의 제품보다 어떤 점이 이 제품을 선호하게 하는가
</small>

---
## 오늘 할 이야기

- 스토리란?
- 스토리는 어떻게 (잘)쓰지?
- 스토리 포인트
- 속도(Velocity) 측정
- 번다운 차트
- 스크럼 ceremonies(Planning, stand-up, sprint review, sprint retrospective)

---
# 스토리란?
- = 사용자 스토리(User Story)
- **서비스 고객**에게 **가치**를 줄 수 있는 기능을 서술한 것
- 고객이 **가치를 평가할 수 있도록** 작성해야 함
- 기술적 전문 용어가 아닌 **비즈니스 언어**로 작성해야 함

---
# 스토리는 어떻게 (잘)쓰지?
1. 스토리에 들어갈 내용
2. 좋은 사용자 스토리의 구성 요소
3. 스토리 도출하기
4. 인수 테스트

---
## 1. 스토리에 들어갈 내용
`[사용자 역할]은 [행위/목표]를 수행하여 [이유]를 한다`
`As [who], I want [what] so that [why]`
- 사용자가 시스템을 사용하는 주 목적을 중심으로 작성
- 사용자가 기능을 사용하여 목적을 달성할 수 있는 단위로
- 능동태로 작성

---
## 2. 사용자 스토리의 구성요소
**INVEST**
- `I`ndependent (of all others)
- `N`egotiable (not a specific contract for features)
- `V`aluable (or vertical)
- `E`stimable (to a good approximation)
- `S`mall (so as to fit within an iteration)
- `T`estable (in principle, even if there isn't a test for it yet)

---
## 2. 사용자 스토리의 구성요소
**INVEST**
- `I` 독립적이다
- `N` 조절 가능해야 한다
- `V` 사용자에게 가치가 있어야 한다
- `E` 측정 가능해야 한다
- `S` (이터레이션 가능할 만큼) 작아야한다
- `T` 테스트 가능해야한다

---
# 스토리는 어떻게 (잘)쓰지?
1. 스토리에 들어갈 내용
2. 좋은 사용자 스토리의 구성 요소
3. `스토리 도출하기`
4. 인수 테스트

---
## 3. 스토리 도출하기
<small>사용자 스토리는 사용자 관점에서 작성되어야 한다.</small>
<사용자 되기 게임>
1. 팀원은 `페르소나(persona)`를 선택
2. 페르소나 입장에서 선호/경쟁 사이트 사용
3. **장, 단점, 경험, 느낌, 성공요인** 분석
4. 팀원들과 내용 공유
5. 겅유 내용 바탕으로 **사용자 스토리** 도출

---
## 4. 인수 테스트(Acceptance Test)
<small>사용자가 기대하거나 가정하는 내용에 대한 테스트 항목</small>
### 테스트의 종류
- 기능 테스트 <small>계획한 대로 구현되었는지 확인</small>
- 인터페이스 테스트 <small>인터페이스 구성요소가 예상한대로 동작하는지 확인</small>
- 사용성 테스트 <small>쉽게, 잘 사용가능한지 확인</small>
- 성능 테스트 <small>부하가 걸린 상태에서 어느정도의 성능을 보이는지 확인</small>
- 스트레스 테스트 <small>사용자 초과, 과도한 부하 확인 테스트</small>

---
## 스토리를 잘 쓰려면

- **사용자 관점**에서 작성 (개발자 관점은 빼고 작성해야함)
- **INVEST** 요소를 지켜서 작성
- `[사용자 역할]은 [행위/목표]를 수행하여 [이유]를 한다` 형식으로
  - 사용자가 기능을 사용, 목적을 달성할 수 있는 단위로
- 능동태로 작성
<small>
  - As a `user`, I can `indicate folders not to backup` so that `my backup drive isn't filled up with things I don't need saved`.
  - `사용자`는 `백업하지 않을 폴더를 지정`하여 `백업 드라이브가 저장하지 않아도 되는 항목으로 채워지지 않도록 할 수 있습니다`.
</small>

---
# 스토리 포인트
<small>스토리를 크기를 **추정**하기 위해 사용되는 값</small>
- 스프린트 내에 개발해야하는 백로그(스토리) 추출, 각 백로그에 대한 크기를 산정하는 방식은 `플래닝 포커(Planning Pocker)`
<small>
  1. 팀원들이 모여 백로그를 하나 선택, 각자 생각하는 공수가 적힌 카드를 제출 (숫자는 추상적인 시간을 의미)
  2. 숫자가 비슷하거나, 완전히 다를수도 있는데 Scrum Master이 주도해서 서로의 차이점을 공유, 합의하면서 min, max 숫자를 조정한다.
  3. 스프린트에 작업할 백로그마다 반복한다.
</small>
- 하다보면 min, max의 중간쯤이 의미가 있다는 것을 알게됨
<small>(프로젝트, 백로그마다 다를 수 있음)</small>

---
# 플래닝 포커
<small>**플래닝 포커**, 다른 말로 **스크럼 포커** 라고도 불림</small>

![](C:\Users\pineoc\Downloads\planning.jpg)

---
# 속도(Velocity)
<small>이터레이션 내에서 완료한 작업의 수(스토리 포인트)</small>

![](C:\Users\pineoc\Downloads\velocity.jpg)

---
# 속도는 왜 측정하는가

- <small>한정된 기간(이터레이션)동안 팀의 퍼포먼스를 알기위해
- 속도를 알게되면 이터레이션 안에 개발할 수 있는 스토리를 알맞게 넣고,
- `안정적 + 반복적`으로 개발된 스토리가 포함된 결과물을 전달할 수 있다
- **프로젝트의 전체적인 흐름을 보고 관리할 수 있다.**
</small>

---
## Refresh, 오늘 할 이야기

- 스토리란?
- 스토리는 어떻게 (잘)쓰지?
- 스토리 포인트
- 속도(Velocity) 측정
- **번다운 차트**
- 스크럼 ceremonies<small>(Planning, stand-up, sprint review, sprint retrospective)</small>

---
# Burndown Chart(번다운 차트)

<img src="C:\Users\pineoc\Downloads\gh_burndown-chart2.png" height="520"/>

---
# Burndown Chart(번다운 차트)
간단히 말하면, <small>**Work left to do versus time** = **시간 당 남은 일**을 보여줌</small>

- 스프린트 백로그의 남은 작업량을 추적할 수 있음
- 작업 속도를 파악할 수 있음
- **스프린트 목표를 달성할 시기 예측 가능!**
- **팀의 퍼포먼스를 측정할 수 있음!!**

---
# Burndown Chart(번다운 차트)

<small>참고: http://www.agilenutshell.com/episodes/6-burndown-charts</small>

![](C:\Users\pineoc\Downloads\burndown-4-realistic.png)

---
# 스크럼 Ceremonies

- Planning
- Stand-up
- Sprint Review
- Sprint Retrospective

---
# 스크럼 Ceremonies

![](C:\Users\pineoc\Downloads\scrum3.jpg)

---
# 스크럼 Ceremonies - <small>`Sprint Planning`</small>

예정된 스프린트에서 완료할 사항을 결정하는 팀 기획 회의.
(제품 백로그에서 스프린트 백로그로 가져오는 플래닝)

---
# 스크럼 Ceremonies - <small>`Sprint Planning`</small>
## 산출물

- 스프린트 백로그
- 확정된 스프린트 데모 날짜
- 확정된 Daily Scrum 시간 & 장소

> <small>플래닝에 대한 이야기는 따로 하나 만들어도 모자람이 없는 내용..!</small>

---
# 스크럼 Ceremonies - <small>`Stand-up`</small>
Daily Scrum Meeting, 일일 스크럼 미팅이라고 함.

- 스크럼 팀원 전원이 모여서 스탠드업으로 수행
- 어제 한일, 오늘 할 일, 이슈 사항 공유

> <small>스탠드업으로 수행하는 이유는 늘어지지 않게 하기 위해서.</small>

---
# 스크럼 Ceremonies - <small>`Stand-up`</small>

<small>얼른 끝내...</small>

![](C:\Users\pineoc\Downloads\image.png)

---
# 스크럼 Ceremonies - <small>`Sprint Review`</small>
스프린트가 종료하는 시점에 팀원 전체가 모여
각자 한 일을 리뷰한다.
(혼내는 시간이 아닌 **팀이 만든 결과물**을 모두 함께 모여서 보는 것)

---
# 스크럼 Ceremonies - <small>`Sprint Retrospective`</small>

산출물을 살펴보는 `Sprint Review`와 다르게,
**스프린트 회고**는 스프린트 기간 동안에 팀 내부에서 발생한 여러가지 일들을 되돌아보는 것
**잘한 것 / 개선할 것 / 새로 시작할 것**을 이야기하는 과정이다
(`새로 시작할 것`은 다음 스프린트에서 새로 시작할 것들)

---
# 스크럼 Ceremonies - <small>`Sprint Retrospective`</small>

회고는<small>
팀원들이 평소에는 하기 힘든 이야기들을 끄집어내야 하는 과정이기 때문에
**ScrumMaster**의 역할이 무척 중요하다
</small>

> **애자일 회고** 책을 추천

---
# 스크럼 Ceremonies - <small>`Sprint Retrospective`</small>

회고를 위한 다양한 기법이 존재한다
- 주요 사건을 5F로 공유 <small>(Fact, Feeling, Finding, Future action, Feedback)</small>
- 다른 관점으로 프로젝트 돌아보기<small>(관계 중심, 툴 중심 등등)</small>
- 오늘의 회고에서 나의 ESVP는?
  - <small>Explorer / Shopper / Vacationer / Prisoner
  - Book: [Agile Retrospectives: Making Good Teams Great](https://www.amazon.com/Agile-Retrospectives-Making-Teams-Great/dp/0977616649/)</small>
- 나를 점검하기
- etc

---
# 더 했어야할 이야기

- 개발 프로세스를 적용하는데에 필요한 것들
- 우리 팀, 조직에 필요한 프로세스 도구는 뭘까

> <small>스토리에 대한 깊은 이해, 스크럼 ceremonies 각각에 대한 이해가 
> 녹아 있어야 위의 이야기를 할 수 있을 것 같습니다.</small>

---
# 고맙습니다