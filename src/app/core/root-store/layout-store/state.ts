export interface State {
    showSidenav: boolean;
}

export class LayoutState implements State {
    static initial: State = {
        showSidenav: false,
    };
    showSidenav: boolean;

}
