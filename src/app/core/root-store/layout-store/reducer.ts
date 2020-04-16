import {LayoutState, State} from './state';
import {LayoutActions, LayoutActionTypes} from './actions';


export function layoutReducer(
    state: State = LayoutState.initial,
    action: LayoutActions
): State {
    switch (action.type) {
        case LayoutActionTypes.CloseSidenav:
            return {
                showSidenav: false,
            };

        case LayoutActionTypes.OpenSidenav:
            return {
                showSidenav: true,
            };

        default:
            return state;
    }
}

