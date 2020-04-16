import {ActionReducerMap} from '@ngrx/store';
import {AuthState} from './state';

import {authInfoReducer} from './auth-info-store/reducer';
import {loginPageReducer} from './login-page-store/reducer';

export const reducers: ActionReducerMap<AuthState> = {
    status: authInfoReducer,
    loginPage: loginPageReducer,
};
