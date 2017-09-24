import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUserData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/1').map((res: Response) => res.json());
  }

  getPostData() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1').map((res: Response) => res.json());
  }

}
