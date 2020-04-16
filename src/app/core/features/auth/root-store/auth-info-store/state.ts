import {User} from '../../models/user';

export interface State {
    loggedIn: boolean;
    user: User | null;
}

export class  AuthInfoState implements State{
    static initial: State = {
        loggedIn: false,
        user: null,
    };
    loggedIn: boolean;
    user: User | null;
}
