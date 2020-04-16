import {ActionReducerMap} from '@ngrx/store';
import {jokesReducer} from './joke-store/reducer';
import {JokesState} from './state';

export const reducers: ActionReducerMap<JokesState> = {
  joke: jokesReducer,
};
