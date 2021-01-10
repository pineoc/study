# Oreilly Angular - The Complete Guide 2020

<https://learning.oreilly.com/videos/angular-the/9781788998437>

## Chapter 2: 

### Component

- main.ts에 있는 `platformBrowserDynamic().bootstrapModule(AppModule)`를 통해 AppModule을 가져오고, app/app.module.ts에 있는 정보중 bootsrap에 있는 AppComponent를 통해 앱을 실행한다.
- index.html에 추가하지 않고 app.component.html에 추가한다.

```ts
@Component({
  selector: 'app-server',
  // selector: '.app-server', 클래스로 컴포넌트를 쓸 수 있음
  // selector: '[app-server]', 엘리멘트 프로퍼티로 컴포넌트를 쓸 수 있음
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

컴포넌트를 클래스, 프로퍼티로 사용할 수 있다는 것을 처음 알았다!

### 데이터 바인딩

데이터 바인딩 = 커뮤니케이션

- 스트링 인터폴레이션 {{ name }}
- 프로퍼티 바인딩 [] = ""
- 이벤트 바인딩 () = ""

### 이벤트 바인딩
