import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers()
  {
    const users=[
      {userId:10,userName:'karan'},
      {userId:20,userName:'praju'}
      
    ];
    return users;
  }

  constructor() { }
}
