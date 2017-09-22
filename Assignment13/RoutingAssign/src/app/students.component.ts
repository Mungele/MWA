import { Component, OnInit } from '@angular/core';
import {DbService } from './db.service'
@Component({
  selector: 'app-students',
  template: `
    
    <div>
      <ul>
        <li *ngFor="let item of students"><a [routerLink]="['./',item.id]" >{{item.name}}</a></li>
      </ul>
    </div>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {

  private students;
  constructor(private db : DbService ) {

  }

  ngOnInit() {
    this.students = this.db.getData()
  }

}
