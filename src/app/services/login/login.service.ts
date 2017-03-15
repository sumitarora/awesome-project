import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(email: string, password: string): Promise<boolean> {
    if (email === 'email@email.com' && password === 'password') {
      return Promise.resolve(true);
    } else {
      return Promise.reject(false);
    }
  }

}
