import {AuthActions, AuthActionTypes} from './actions';
import {LoginState, State} from './state';


export function loginPageReducer(state = LoginState.intial, action: AuthActions): State {
    switch (action.type) {
        case AuthActionTypes.Login: {
            return {
                ...state,
                error: null,
                pending: true,
            };
        }

        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                error: null,
                pending: false,
            };
        }

        case AuthActionTypes.LoginFailure: {
            return {
                ...state,
                error: action.payload,
                pending: false,
            };
        }

        default: {
            return state;
        }
    }
}
