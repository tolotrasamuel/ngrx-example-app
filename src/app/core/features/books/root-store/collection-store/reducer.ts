import {CollectionState, State} from './state';
import {CollectionActions, CollectionActionTypes} from './actions';

export function collectionReducer(
  state = CollectionState.initial,
  action: CollectionActions
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case CollectionActionTypes.LoadSuccess: {
      return {
        loaded: true,
        loading: false,
        ids: action.payload.map(book => book.id),
      };
    }

    case CollectionActionTypes.AddBookSuccess:
    case CollectionActionTypes.RemoveBookFail: {
      if (state.ids.indexOf(action.payload.id) > -1) {
        return state;
      }

      return {
        ...state,
        ids: [...state.ids, action.payload.id],
      };
    }

    case CollectionActionTypes.RemoveBookSuccess:
    case CollectionActionTypes.AddBookFail: {
      return {
        ...state,
        ids: state.ids.filter(id => id !== action.payload.id),
      };
    }

    default: {
      return state;
    }
  }
}
