import { Component, OnInit } from '@angular/core';
import {DbService} from "./db.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-studentsinfo',
  template: `
    <br>
    <div><label>Name :</label>{{student.name}}</div>
    <div><label>Student ID :</label>{{student.stuID}}</div>
    <div><label>eMail :</label>{{student.email}}</div>
    `,
  styles: []
})
export class StudentsinfoComponent implements OnInit {

  private subscription: Subscription;
  private id:number;
  private student;
  constructor(private db : DbService, private activatedRoute: ActivatedRoute ) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']);
  }

  ngOnInit() {
    this.student = this.db.getData()[this.id-1];
  }

}
