import * as fromRouter from '@ngrx/router-store';
import {RouterStateUrl} from '../../shared/utils';
import {LayoutState} from './layout-store/state';

export interface State {
    layout: LayoutState;
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}
export interface RootState extends State{

}
