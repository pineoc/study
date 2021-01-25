import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() called', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
  }

  ngDoCheck() {
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked() {
    console.log('')
  }

}
