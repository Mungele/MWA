import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <div>
      <ul>
      <li  *ngFor="let item of myarray;">{{item}}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {

  @Input() myarray: string [];
  constructor() { }

  ngOnInit() {
  }

}
