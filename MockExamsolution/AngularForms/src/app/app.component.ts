import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService){
    this.userForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    post: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)]))
  });
   
  //  this.userForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.compose([Validators.required, Validators.email])],
  //     post: ['', Validators.compose([Validators.required, Validators.minLength(10)])]
  //   });
    this.userForm.statusChanges.subscribe(data => console.log(data));
  }

  submitForm():void{
    console.log('Reactive Form Data: ');
    console.log(this.userForm.value);
  }

  getData(){
    this.userService.getUserData().subscribe(data => {
      this.userForm.controls['name'].setValue(data.name);
      this.userForm.controls['email'].setValue(data.email);
    });

    this.userService.getPostData().subscribe(data =>{
       this.userForm.controls['post'].setValue(data[0].body);
    });

  }

}
