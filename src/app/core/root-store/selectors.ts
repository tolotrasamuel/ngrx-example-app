import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromLayout from './layout-store/selectors'
import {LayoutState} from './layout-store/state';
/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<LayoutState>('layout');

export const getShowSidenav = createSelector(
    getLayoutState,
    fromLayout.getShowSidenav
);
