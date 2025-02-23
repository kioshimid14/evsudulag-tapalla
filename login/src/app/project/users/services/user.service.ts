import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserData } from '../mock/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private currUser: UserModel | null = null;

  validateLogin(username: string, password: string) : boolean {
    const user = UserData.find(u => u.username === username && u.password === password);

    if(user) {
      this.currUser = user;
      return true;
    }
    return false;
  }

  getCurrUser(): UserModel | null {
    return this.currUser;
  }
}
