import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupName,
  FormArray} from "@angular/forms";
import {DBService} from "./db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myForm: FormGroup;
  user:any;
  post: any[]=[];

  constructor(private fb: FormBuilder, private db:DBService){
    this.myForm = this.fb.group({
      'user': fb.group({
      'email'
    :
      ['akulindwa@mum.edu', Validators.compose([Validators.required, Validators.email])],
        'name'
    :
      ['Aisha', [Validators.required]],
        'post'
    :
      ['', [Validators.minLength(10)]]
    })
  });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }
  getData(){
    this.db.getUserData().forEach(user => {
      this.user=user;
    })
    this.db.getPostData().forEach(post => {
      this.post.push(post);
    })
  }

  onSubmit():void{

    console.log(this.myForm.value);
  }
}
