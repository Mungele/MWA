import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }
  private students = [
    {id:'1', name:'Asaad Saad', stuID:'1234', email:'asaad@mum.edu'},
    {id:'2', name:'Aisha Kulindwa', stuID:'2341', email:'akulindwa@mum.edu'},
    {id:'3', name:'Sam Khlok', stuID:'3412', email:'skhlok@mum.edu'},
    {id:'4', name:'Maria Kebede', stuID:'4123', email:'mkebede@mum.edu'}];
  getData(){
    return this.students;
  }

}
