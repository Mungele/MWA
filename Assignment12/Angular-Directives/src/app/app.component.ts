import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>
      Welcome to {{title}}!
    </h1>
  </div>
  <app-my-component [myarray]="inputArray"></app-my-component>
  <h4>Upper directive </h4>
  <ul>
    <li> item 1</li>
    <li appUpper >item 2</li>
    <li appUpper >item 3</li>
    <li> item 4</li>
  </ul>
  <h4>Visibility directive </h4>
  <ul>
    <li> item 1</li>
    <li [appMyvisibility] = true >item 2</li>
    <li [appMyvisibility] = false >item 3</li>
    <li> item 4</li>
  </ul>
  <h4>Color directive </h4>
  <button appMycolor (emitter)="colorHandler($event)">click me</button>
  <div *ngIf="color">current color  at parent is : {{color}}</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular with Directives';
  inputArray: string[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
  color: string;
  colorHandler(color) {
    this.color = color;
  }
}
