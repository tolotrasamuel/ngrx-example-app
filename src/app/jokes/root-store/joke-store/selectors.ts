import { State} from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;
