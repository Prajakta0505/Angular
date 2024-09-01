import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class UserService {

  constructor() { }

  users()
  {
    return[
      {name:'praju',age:21,email:'praju@test.com'},
      {name:'Ak',age:22,email:'ak@gmail.com'}
    ];
  }
}
