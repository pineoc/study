# Oreilly Angular - The Complete Guide 2020

<https://learning.oreilly.com/videos/angular-the/9781788998437>

## Chapter 9: Using Services and Dependency Injection

Service, DI를 배웠다.
service-start 프로젝트를 만들고 공부했음.

### Services

따로 Serivce라는 데코레이터 없이 사용함 (사실 Injectable 쓰긴해야하는 것 같음)
Angular에서는 각 컴포넌트 안에서 바로 서비스를 init 하지 않고 아래와 같이 사용함.
아래의 코드는 accountsService를 app.module쪽으로 올리고 사용해서 provider가 비어있음.
강의 초기에는 LoggingService, AccountsService가 provider에 들어가있었음

```ts
import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status: '+ status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    // DO NOT USE SERVICE LIKE THIS ON ANGULAR
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
```

### Dependency Injection(DI, 의존성 주입)

이 강의에서는 서비스를 이용하면서 각 컴포넌트에 서비스를 어떻게 사용할 수 있는지 의존성 주입과 함께 알려주었음

이것도 참고해서 읽어보았다.
<https://angular.kr/guide/dependency-injection>


