<!-- $theme: gaia -->
<!-- page_number: true -->

# Lean에 대해 알아보자

@pineoc
이윤석

---
# Index

1. Lean이란?
2. Lean Waste
3. Lean Software Development
4. Lean & Agile

---
# Lean이란?

---
# Lean이란?

- ~~사전적 정의: 기울다, 기울이다~~
- ## Lean Manufacturing
  - Wiki: [link](https://en.wikipedia.org/wiki/Lean_manufacturing)
  - Lean이라고 불리는 systematic method.
  - **Waste** Minimization
  - Lean Thinking(business methodology)

---
# Lean = `Waste` `Minimization`

---
# Lean에서의 Waste

아래의 세 가지 Waste는 TPS의 key concept이다.
<small>`TPS = Toyota Production System`</small>
- Muda(Uselessness): 낭비, 비 부가가치 활동
- Mura(Unevenness): 공평, 흐름의 가변성
- Muri(Overburden): 과중한 부담

---
# Lean에서의 Waste 

**Muda**: `낭비`, `비 부가가치 활동`을 의미함

`*` Transport: 제품 수송에 드는 비용
`*` Inventory: 제품 저장에 드는 비용(재고)
`*` Motion: 제품, 이동
`*` Waiting: 대기
`*` Over-production: 과다 생산
`*` Over-processing: 과다 가공
`*` Defects: 불량

---
# Lean에서 Waste

**Mura**: Unevenness
- lack of uniformity, irregularity, inequality ...
- 결과물의 품질이 일정(균일)하지 못한 것
- `JIT(Just In Time)` 방식으로 해결
  - <small>Keeping little or no inventory</small>
  - <small>FIFO(First In First Out)</small>

---
# Lean에서 Waste

**Muri**: Overburden
- perforce, beyond one's power, immoderation ...
- `standardized work(표준화된 작업)으로 개선`

---
# Waste<small>는 어떻게 제거하는가</small>

---
# Waste<small>는 어떻게 제거하는가</small>

`Waste(Muda)`를 해결하는 방법(Countermeasures)

`Transport` - <small>Value Stream Mapping, Continuous Flow</small>
`Inventory` - <small>JIT, Continuous Flow, Kanban(Pull System)</small>
`Motion` - <small>Value Stream Mapping</small>
`Waiting` - <small>Continuous Flow</small>
`Over-production` - <small>Takt Time, Kanban(Pull System)</small>
`Over-processing` - <small>Kaizen</small>
`Defects` - <small>Standardized Work</small>

---
# Value Stream Mapping
Analyzing the current state and designing a future state for the series of events that take a product or service from its beginning through to the customer.

<img src="C:\Users\pineoc\Downloads\ValueStreamMapParts.png" height="350"/>

---
# Continuous Flow
Work in progress smoothly flows through production with minimal buffers between steps of the manufacturing process

![](C:\Users\pineoc\Downloads\cont-flow.png)

---
# JIT(Just In Time)
`Reducing flow times` within production system as well as response times from suppliers and to customers.

<img src="https://vative.com.au/wp-content/uploads/2015/03/JIT_VSM.png" height="350"/>

---
# Kanban(Pull System)
lean method to manage and improve work across human systems.

<img src="https://wac-cdn.atlassian.com/dam/jcr:bed936e1-0649-4278-a4dd-222b98e96fa5/agile_kanban_board.png?cdnVersion=jo" height="350"/>

---
# Lean Software Development

---
## Lean Software Development

> Lean software development(LSD) is a translation of `lean manufacturing` principles and practices to the `software development domain`.
 
목표: 
<small>시스템의 </small>`낭비`<small>를 줄이고, 고객에게 더 높은 가치를 만든다.</small>

---
# Lean SD, Waste
소프트웨어에서의 9 Waste

`1` Building the wrong feature or product
`2` Mismanaging the backlog
`3` Rework
`4` Unnecessarily complex solutions
`5` Extraneous cognitive load
`6` Psychological distress
`7` Waiting/multitasking
`8` Knowledge loss
`9` Ineffective communication.

---
# Lean SD, 7 Principles

- Eliminate `Waste`: 낭비 제거
- Amplify `learning`: 학습!
- Decide as `late` as possible: 느린 결정
- Deliver as `fast` as possible: 빠른 전달
- Empower the `team`: 팀 존중
- Build `integrity in`: 내제화
- See the `whole`: 전체보기

---
### Lean SD, Principles - <small>`Eliminate Waste`</small>

- `Value stream mapping`을 통해 `waste`를 찾는다
- (앞에 있던 9개의 waste 리스트)
- waste가 있는 지점을 찾고 제거한다
- 핵심 공정만 남을 때까지 `iteratively`하게

---
### Lean SD, Principles - <small>`Amplify learning`</small>

Software development is a continuous learning process based on `iterations` when writing code.

- `잦은 반복(iteration)`<small>과 고객의 피드백을 통해 경험과 지식을 창출하라</small>
- 잦은 반복
  - <small>요구사항 -> 설계 -> 개발 -> 테스트</small>
- 방식
  - <small>Pair Programming, Code Review ...</small>

---
### Lean SD, Principles - <small>`Decide as late as possible`</small>

- <small>예측이 아닌</small> `사실을 기반`<small>으로 결정을 할 수 있을 때까지 확정을 늦춰라</small>
- 왜?
  - <small>결정을 미루라는 말이 아님, 정보를 최대한 많이 가지고 있을 때의 결정이 유리하기 때문</small>
  - 개발 환경 = 예측이 불가능한 상황
  - 결정은 하되 변화를 수용할 수 있어야 함

---
### Lean SD, Principles - <small>`Deliver as fast as possible`</small>

- <small>고객의 확실한 요구사항을 파악하기 위해 제품을 가능한 빨리 인도하라</small>
- <small>품질의 내재화가 필수 조건이다</small>
- 필요조건
  - <small>낭비의 제거, 품질의 내재화</small>
  - <small>일의 양 제한(WIP 제한)</small>

---
### Lean SD, Principles - <small>`Empower the team`</small>

- `Respect People`
- <small>사람을 대체 가능한 인력으로 다루지 말라</small>
- <small>사람을 신뢰하고, 전문 기술을 가질 수 있도록 인재를 육성하라</small>

---
### Lean SD, Principles - <small>`Build integrity in`</small>

- <small>결함을 예방하는</small> `테스트`<small>를 통해 코드의 품질을 내재화하라</small>
- 실행방법: TDD, Continuous Integration,
Pair Programming...
- 빅뱅 통합보다 `지속적 통합`을 하라
- 자동화된 단위 테스트와 인수 테스트 작성을 하라

---
### Lean SD, Principles - <small>`See the whole`</small>

- <small>부분 최적화가 전체를 최적화하지 않을 수 있다</small>
- `문제의 근본 원인`<small>을 찾아 전체를 최적화하라</small>

> Think `big`, act `small`, fail `fast`; learn `rapidly`

---
# Lean Software Practices - <small>`Waste를 줄이기 위한 방법들`</small>
`*` Seeing `waste`
`*` Value stream mapping
`*` Set-based development
`*` Pull systems(Kanban)
`*` Queuing theory
`*` Motivation
`*` Measurements
`*` TDD(Test Driven Development)

---
# Lean & Agile(Scrum)

---
# Lean & Agile(Scrum)

- 공통점
  - 요구사항의 변화를 적극적으로 수용
  - 제품을 고객에게 빠르게 전달, 고객 가치와 만족도를 높이는데 목적
- 차이점
  - Agile: 개인 또는 팀간에 `고객과 협업`하고 빠른 개발을 수행하는 것에 초점(고객과 협업)
  - Lean: 고객의 관점에서 전체 프로세스 상에서 `낭비를 제거`하여 고객 가치를 높이는 것에 초점

---
# 고맙습니다