import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '../models/user';
import * as fromAuth from '../root-store/selectors';
import {AuthState} from '../root-store/state';
import {Login} from '../root-store/login-page-store/actions';

@Component({
  selector: 'bc-login-page',
  template: `
    <bc-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </bc-login-form>
  `,
  styles: [],
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Login($event));
  }
}
