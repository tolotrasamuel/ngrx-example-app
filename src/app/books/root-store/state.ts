import {SearchState} from './search-store/state';
import * as fromRoot from '../../reducers';
import {CollectionState} from './collection-store/state';
import {BookListState} from './books-store/state';

export interface BooksState {
  search: SearchState;
  books: BookListState;
  collection: CollectionState;
}


export interface State extends fromRoot.State {
  books: BooksState;
}
