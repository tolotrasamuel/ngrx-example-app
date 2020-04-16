import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { throwError } from 'rxjs';
import { User, Authenticate } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  login({ username, password }: Authenticate): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return throwError('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
