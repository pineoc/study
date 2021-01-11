import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '.app-server', 클래스로 컴포넌트를 쓸 수 있음
  // selector: '[app-server]', 엘리멘트 프로퍼티로 컴포넌트를 쓸 수 있음
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
  styles: [`
    .online {color: white;}
  `]
})
export class ServerComponent implements OnInit {
  serverId: number;
  serverStatus: string = 'offline';
  constructor() {
    this.serverId = Math.round(Math.random()*100);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getServerStatus(): string {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }

}
