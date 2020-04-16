import {createFeatureSelector, createSelector,} from '@ngrx/store';
import * as fromJokePage from './joke-store/selectors';
import {JokesState} from './state';
import * as fromJokeListState from './joke-store/state';



// Added by Tolotra

export const getJokeState = createFeatureSelector<JokesState>('jokes');

export const getJokePageState = createSelector(
    getJokeState,
    (state: JokesState) => state.joke
);


export const getError = createSelector(
    getJokePageState,
    fromJokePage.getError
);


export const getIsLoading = createSelector(
    getJokePageState,
    fromJokePage.getIsLoading
);


export const {
    selectIds: getJokeIds,
    selectEntities: getJokeEntities,
    selectAll: getAllJokes,
    selectTotal: getTotalJokes,
} = fromJokeListState.adapter.getSelectors(getJokePageState);


