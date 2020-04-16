import {SearchState} from './search-store/state';
import {CollectionState} from './collection-store/state';
import {BookListState} from './books-store/state';
import {RootState} from '../../../root-store/state';

export interface BooksState {
  search: SearchState;
  books: BookListState;
  collection: CollectionState;
}


export interface State extends RootState {
  books: BooksState;
}
