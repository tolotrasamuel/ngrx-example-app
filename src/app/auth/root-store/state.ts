import * as fromRoot from '../../reducers';
import {AuthInfoState} from './auth-info-store/state';
import {LoginState} from './login-page-store/state';

export interface AuthState {
    status: AuthInfoState;
    loginPage: LoginState;
}

export interface State extends fromRoot.State {
    auth: AuthState;
}
