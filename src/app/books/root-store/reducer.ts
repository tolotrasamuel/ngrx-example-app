import {ActionReducerMap} from '@ngrx/store';
import {BooksState} from './state';
import {searchReducer} from './search-store/reducer';
import {collectionReducer} from './collection-store/reducer';
import {booksReducer} from './books-store/reducer';

export const reducers: ActionReducerMap<BooksState> = {
  search: searchReducer,
  books: booksReducer,
  collection: collectionReducer,
};

