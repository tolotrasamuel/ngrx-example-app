import {AuthInfoState, State} from './state';
import {AuthActions, AuthActionTypes} from '../login-page-store/actions';


export function authInfoReducer(state = AuthInfoState.initial, action: AuthActions): State {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
            };
        }

        case AuthActionTypes.Logout: {
            return AuthInfoState.initial;
        }

        default: {
            return state;
        }
    }
}
