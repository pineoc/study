import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '.app-server', 클래스로 컴포넌트를 쓸 수 있음
  // selector: '[app-server]', 엘리멘트 프로퍼티로 컴포넌트를 쓸 수 있음
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  constructor() { }

  ngOnInit(): void {
  }

  getServerStatus(): string {
    return 'Offline';
  }

}
