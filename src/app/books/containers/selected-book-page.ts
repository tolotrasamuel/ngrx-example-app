import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromBooks from '../root-store/selectors';
import * as collection from '../root-store/collection-store/actions';

import { Book } from '../models/book';
import {BookListState} from '../root-store/books-store/state';

@Component({
  selector: 'bc-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-book-detail>
  `,
})
export class SelectedBookPageComponent {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<BookListState>) {
    this.book$ = store.pipe(select(fromBooks.getSelectedBook));
    this.isSelectedBookInCollection$ = store.pipe(
      select(fromBooks.isSelectedBookInCollection)
    );
  }

  addToCollection(book: Book) {
    this.store.dispatch(new collection.AddBook(book));
  }

  removeFromCollection(book: Book) {
    this.store.dispatch(new collection.RemoveBook(book));
  }
}
