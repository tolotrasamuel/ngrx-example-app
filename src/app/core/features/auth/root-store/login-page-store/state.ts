
export interface State {
    error: string | null;
    pending: boolean;
}
export class LoginState implements State{
    static intial: State = {
        error: null,
        pending: false,
    };
    error: string | null;
    pending: boolean;

}
