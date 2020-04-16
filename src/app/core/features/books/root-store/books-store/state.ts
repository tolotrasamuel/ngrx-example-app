import {createEntityAdapter, Dictionary, EntityAdapter, EntityState} from '@ngrx/entity';
import {Book} from '../../models/book';

export interface State extends EntityState<Book> {
  selectedBookId: string | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: (book: Book) => book.id,
  sortComparer: false,
});

export class BookListState implements State {
  static initial: State = adapter.getInitialState({
    selectedBookId: null,
  });
  selectedBookId: string | null;
  entities: Dictionary<Book>;
  ids: string[] | number[];

}
