import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { UserService } from './../user.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: []
})
export class TemplateDrivenComponent {

  posts;
  isDataAvailable:boolean = false;

  constructor(private userService: UserService) {
    this.userService.getPostData().subscribe(data => {
      this.posts = data;
    });
   }

  ngOnInit() {
    
  }


 
}
