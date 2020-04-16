import * as fromRoot from '../../reducers';
import {JokePageState} from './joke-store/state';

export interface JokesState {
  joke: JokePageState;
}

export interface State extends fromRoot.State {
  jokes: JokesState;
}
