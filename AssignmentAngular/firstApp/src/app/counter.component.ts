import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>
  <button (click)="decrease()">-</button>
  {{counterValue}}
  <button (click)="increase()">+</button>
</p>
`,
  styles: ['p{ border: solid green;}'],
})
export class Counter {

  public counterValue:number = 5;

  @Output () messageEmitter = new EventEmitter();
  @Input() counter;

  constructor() { this.counterValue=0; }

  increase(){
    this.counterValue = this.counterValue + 1;
    this.messageEmitter.emit(this.counterValue);
    return false;
  }

  decrease(){
    this.counterValue-=1;
    this.messageEmitter.emit(this.counterValue);
    return false;
  }

  ngOnChanges() {
    this.counterValue = parseInt(this.counter);
  }

}
