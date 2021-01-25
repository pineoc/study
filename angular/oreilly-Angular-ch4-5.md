# Oreilly Angular - The Complete Guide 2020

<https://learning.oreilly.com/videos/angular-the/9781788998437>

## Chapter 4: Debugging

에러가 발생할 경우 디버깅하는 방법을 배움
어떻게 에러를 읽고 어디를 봐야하는지를 보았으나 기본적인 디버깅 내용이었음

main.js로 컴파일된 것은 sourcemap을 통해 디버깅해 볼 수 있음

angular augury라는 툴이 있으니 써보자

## Chapter 5: Components & Databinding Deep Dive

드디어 컴포넌트!

@Input() 매우 중요
컴포넌트에 데이터를 전달해주는 것임. **중요함**

@Input('알리아스 이름') 으로 알리아스 변경할 수 있음

@Output()은 이벤트를 줄 때 사용함 컴포넌트간에 이벤트 통신으로 데이터를 주고 받을때 사용하는 것을 배움
얘도 @Output('알리아스 이름')으로 알리아스 사용할 수 있음

### 이벤트를 받는 컴포넌트

```ts
(eventName) = eventReceiveFunction($event)
```

### 이벤트를 주는 컴포넌트

```ts
@Output() eventName = new EventEmitter<eventObject>(); // 이벤트를 정의하고

// 이벤트 전달
eventName.emit(eventObject)
```

### 스타일 한정

`encapsulation: ViewEncapsulation.None` 옵션을 주면 캡슐레이션이 안됨 (컴포넌트 한정 스타일이 안됨)

### local references

`#serverNameInput`과 같이 컴포넌트의 템플릿에서 사용할 수 있는 레퍼런스로 `#이름`으로 사용하고 데이터를 ts로 넘길 수 있는데 이 레퍼런스는 ts 코드에서는 사용할 수 없다.

```html
<div class="row">
  <div class="col-xs-12">
    <p>Add new Servers or blueprints!</p>
    <label>Server Name</label>
    <input type="text" class="form-control" [(ngModel)]="newServerName">
    <input
      type="text"
      class="form-control"
      #serverNameInput>
    <label>Server Content</label>
    <input type="text" class="form-control" [(ngModel)]="newServerContent">
    <br>
    <button
      class="btn btn-primary"
      (click)="onAddServer()">Add Server</button>
    <button
      class="btn btn-primary"
      (click)="onAddBlueprint()">Add Server Blueprint</button>
  </div>
</div>
```

`@ViewChild('serverNameInput')`으로 ts 코드에서 사용할 수 있음

```ts
@ViewChild('serverNameInput') serverContentInput: ElementRef;

console.log(serverContentInput.nativeElement.value);
```

<ng-content></ng-content>을 이용해서 컴포넌트로 넘기지 않고 상위 컴포넌트에서 컨텐츠를 작성할 수 있음

```html
<!-- app.component.html -->
<div class="container">
  <app-cockpit
    (serverCreated)="onAddServerAdded($event)"
    (blueprintCreated)="onAddBlueprintAdded($event)">
  </app-cockpit>
  <hr>
  <div class="row">
    <div class="col-xs-12">
      <app-server-element *ngFor="let serverElement of serverElements"
      [srvElement]="serverElement">
      <p>
        <strong *ngIf="serverElement.type === 'server'" style="color: red">{{
          serverElement.content
        }}</strong>
        <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
      </p>
    </app-server-element>
    </div>
  </div>
</div>
```

```html
<!-- server-element.component.html -->
<div class="panel panel-default">
  <div class="panel-heading">{{ element.name }}</div>
  <div class="panel-body">
    <!-- <p>
      <strong *ngIf="element.type === 'server'" style="color: red">{{
        element.content
      }}</strong>
      <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>
    </p> -->
    <ng-content></ng-content>
  </div>
</div>
```

컨텐츠 내용을 상위 컴포넌트로 옮기고 ng-content로 표현할 수 있음
이렇게하면 좋은 것은 필요할 때 하위에 파라미터를 넘기거나 할 필요없이 바로 구현할 수 있다는 장점이 있음

### 라이프사이클

<https://angular.kr/guide/lifecycle-hooks>

각 라이프사이클에 맞춰 데이터를 접근해서 확인하거나 수정할 수 있음
라이프사이클과 관련한 자세한 내용은 링크 참고
