import {CollectionActions, CollectionActionTypes} from '../collection-store/actions';
import {BookActions, BookActionTypes} from './actions';
import {adapter, BookListState, State} from './state';

export function booksReducer(
  state = BookListState.initial,
  action: BookActions | CollectionActions
): State {
  switch (action.type) {
    case BookActionTypes.SearchComplete:
    case CollectionActionTypes.LoadSuccess: {
      /**
       * The addMany function provided by the created adapter
       * adds many records to the entity dictionary
       * and returns a new state including those records. If
       * the collection is to be sorted, the adapter will
       * sort each record upon entry into the sorted array.
       */
      return adapter.addMany(action.payload, {
        ...state,
        selectedBookId: state.selectedBookId,
      });
    }

    case BookActionTypes.Load: {
      /**
       * The addOne function provided by the created adapter
       * adds one record to the entity dictionary
       * and returns a new state including that records if it doesn't
       * exist already. If the collection is to be sorted, the adapter will
       * insert the new record into the sorted array.
       */
      return adapter.addOne(action.payload, {
        ...state,
        selectedBookId: state.selectedBookId,
      });
    }

    case BookActionTypes.Select: {
      return {
        ...state,
        selectedBookId: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
