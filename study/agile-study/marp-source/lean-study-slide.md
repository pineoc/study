<!-- $theme: gaia -->
<!-- page_number: true -->

# Lean에 대해 알아보자

#### @pineoc
###### 이윤석

---
# Index

1. Lean?
1. Lean Software Development
1. Kanban
1. Appendix A, 4 Principles Lean Management

---
# Lean?

- 사전적 정의: 야윈, 마른, `절감한`
- ## [Lean Manufacturing(Wiki)](https://en.wikipedia.org/wiki/Lean_manufacturing)
  - From Toyota Production System(TPS)
  - `Waste` Minimization & `Value` Maximization
  - `Continuously Improve` Processes

---
# Lean
##### maximize `customer value` while minimizing `waste`

---
## Lean Software Development
###### Lean software development(LSD) is a translation of `lean manufacturing` principles and practices to the `Software Development Domain`.

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

- Waste가 있는 지점을 찾고 제거한다
- `핵심 공정`만 남을 때까지 `iteratively`하게

<img src="http://knowledgeblob.com/wp-content/uploads/2015/11/WastesOfSoftware1.jpg" height="350"/>

---
### Lean SD, Principles - <small>`Amplify learning`</small>
##### `반복(iteration)`<small>과 피드백을 통해 경험과 지식을 창출하라</small>
- 반복: <small>요구사항 -> 설계 -> 개발 -> 테스트</small>

![](C:\Users\pineoc\Downloads\Untitled%20Diagram.png)

---
### Lean SD, Principles - <small>`Decide as late as possible`</small>

<img src="C:\Users\pineoc\Downloads\inform.jpg" height="300"/>
<img src="C:\Users\pineoc\Downloads\dragon.png" height="250"/>

> `결정을 한번만에 할 수 있을 때`, 결정할 수 있는 재료가 다 모였을 때 `좋은 결정`을 할 수 있다!

---
### Lean SD, Principles - <small>`Deliver as fast as possible`</small>

- Why? <small>고객의 `요구사항`을 파악하기 위해</small>
- <small>`품질을 보장`할 `기술의 내재화`가 필요</small>

<img src="C:\Users\pineoc\Downloads\loop-fast-delivery.png" height="300"/>

---
### Lean SD, Principles - <small>`Empower the team`</small>
### `Respect People`
##### <small>전문 기술을 가질 수 있도록 인재를 육성하라</small>

---
### Lean SD, Principles - <small>`Build integrity in`</small>

- <small>결함을 예방하는</small> `테스트`<small>를 통해 코드의 품질을 내재화하라</small>
- 빅뱅 통합보다 `지속적 통합`, 자동화된 `단위 테스트`와 `인수 테스트` 작성을 하라

<center>
<img src="C:\Users\pineoc\Downloads\ci.png" height="180"/>
<img src="https://spin.atomicobject.com/wp-content/uploads/acceptance_testing_diagram.png" height="180"/>
<small>CI(Continuous Integration), Acceptance Test</small>
</center>

---
### Lean SD, Principles - <small>`See the whole`</small>

- <small>부분 최적화가 전체를 최적화하지 않을 수 있다</small>
- `문제의 근본 원인`<small>을 찾아 전체를 최적화하라</small>

> Think `big`, act `small`, fail `fast`; learn `rapidly`

<img src="https://buildinginformationmanagement.files.wordpress.com/2013/08/elephant-bim.jpg" height="300"/>

---
# Kanban
#### Lean SD Framework

---
# Kanban
###### Kanban Board Example
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Kanban_board_example.jpg" width="350"/>
<img src="https://wac-cdn.atlassian.com/dam/jcr:bed936e1-0649-4278-a4dd-222b98e96fa5/agile_kanban_board.png?cdnVersion=it" width="500"/>

---
# Kanban

- 간판(看板), Visual Card
- 일을 `작은 조각`으로 나누고, 카드에 각 항목을 기입한 후 벽에 붙인다
- 일의 상태에 따라 보드의 Column을 나눈다
- Column 마다 `WIP` 수를 제한한다
<small>(WIP = Work In Progress)</small>
- `리드타임(lead time)`을 측정한다

---
# Kanban - `Lead Time`
- Lead Time = End Time(Done) - Start Time(Backlog)
- 티켓 `생성 시점` ~ `제품에 반영`되기까지 걸린 시간

<img src="https://jira.atlassian.com/secure/attachment/108613/cfd.jpg" height="350"/>

---
# Kanban
#### ![](C:\Users\pineoc\Downloads\kanban-general%20(1).png)

---
# Kanban
###### `WIP를 제한`하고 생산 `흐름을 관리`하여
###### 고객에게 `가치`를 `빠르게` 전달한다.
###### 팀원들과 `함께` `명시적 정책`을 만들어 개발을 진행하고, 
###### 프로세스에 대한 `피드백`을 거쳐서 `끊임없이` 최적화 한다.

---
# Kanban
##### Limiting WIP(Work In Progress)

---
# Kanban - `Limiting WIP`
#### Why?
- <small>팀은 작게 나눈 일을 `집중`하면서 </small>`Throughput`<small>을 올릴 수 있다.</small>
- <small>생산 흐름을 매끄럽게 제어하기 위해!</small>

<img src="http://www.setheliot.com/blog/wp-content/uploads/2016/07/072016_1830_HowWIPLimit2.png"/>

---
# Kanban - `Limiting WIP`
##### Not Good!
# ![](http://www.setheliot.com/blog/wp-content/uploads/2016/07/072016_1830_HowWIPLimit3.png)

---
# Kanban - `Limiting WIP`
##### Good!
# ![](http://www.setheliot.com/blog/wp-content/uploads/2016/07/072016_1830_HowWIPLimit5.png)

---
# Kanban - `Limiting WIP`
###### 작업 흐름 각 단계마다 동시에 진행 가능한 작업 수 제한
- 자원의 활용도(Throughput)가 높아짐
  - <small>Low WIP --> Developer idle++ --> bad `productivity`
  - High WIP --> Task idle++ --> bad `lead time`</small>

<img src="https://res.infoq.com/articles/how-kanban-works/en/resources/FIG2.png" height="250"/>

---
# Kanban & Lean SD
##### `기민하게` 상품을 출시하기 위한 스케줄링 시스템
##### `Waste` Minimization & `Customer Value` Maximization

---
# Appendix A
#### 4 Principles Lean Management

---
## 4 Principles Lean Management
###### <iframe width="560" height="315" src="https://www.youtube.com/embed/wfsRAZUnonI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---
# 고맙습니다