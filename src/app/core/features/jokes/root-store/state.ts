import {JokePageState} from './joke-store/state';
import {RootState} from '../../../root-store/state';

export interface JokesState {
  joke: JokePageState;
}

export interface State extends RootState {
  jokes: JokesState;
}
