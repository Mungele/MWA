import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styles: []
})
export class MypostComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
