import {BookActions, BookActionTypes} from '../books-store/actions';
import {SearchState, State} from './state';

export function searchReducer(state = SearchState.initial, action: BookActions): State {
  switch (action.type) {
    case BookActionTypes.Search: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          error: '',
          query,
        };
      }

      return {
        ...state,
        loading: true,
        error: '',
        query,
      };
    }

    case BookActionTypes.SearchComplete: {
      return {
        ids: action.payload.map(book => book.id),
        loading: false,
        error: '',
        query: state.query,
      };
    }

    case BookActionTypes.SearchError: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
