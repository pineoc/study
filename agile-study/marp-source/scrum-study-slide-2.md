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
# 더 했어야할 이야기

- 개발 프로세스를 적용하는데에 필요한 것들
- 우리 팀, 조직에 필요한 프로세스 도구는 뭘까

---
# 

---