import {AuthInfoState} from './auth-info-store/state';
import {LoginState} from './login-page-store/state';
import {RootState} from '../../../root-store/state';

export interface AuthState {
    status: AuthInfoState;
    loginPage: LoginState;
}

export interface State extends RootState {
    auth: AuthState;
}
