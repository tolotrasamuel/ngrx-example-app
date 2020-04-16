import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { defer } from 'rxjs';
import { of } from 'rxjs';

import {
  LoadFail,
  LoadSuccess,
  AddBookSuccess,
  AddBookFail,
  CollectionActionTypes,
  RemoveBook,
  RemoveBookFail,
  RemoveBookSuccess,
  AddBook,
} from './actions';
import { switchMap, toArray, map, catchError, mergeMap } from 'rxjs/operators';
import {Book} from '../../models/book';
import {BookStoreDatabase} from '../../../core/services/book-database';

@Injectable()
export class CollectionEffects {
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('books_app');
  });

  @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.Load),
    switchMap(() =>
      ( this.db
        .query('books') as Observable<Book[]>)
        .pipe(
          map((books: Book[]) => new LoadSuccess(books)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  @Effect()
  addBookToCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.AddBook),
    map((action: AddBook) => action.payload),
    mergeMap(book =>
      (this.db
        .insert('books', [book]) as Observable<Book[]>)
        .pipe(
          map(() => new AddBookSuccess(book)),
          catchError(() => of(new AddBookFail(book)))
        )
    )
  );

  @Effect()
  removeBookFromCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.RemoveBook),
    map((action: RemoveBook) => action.payload),
    mergeMap(book =>
      (this.db
        .executeWrite('books', 'delete', [book.id])  as Observable<boolean>)
        .pipe(
          map(() => new RemoveBookSuccess(book)),
          catchError(() => of(new RemoveBookFail(book)))
        )
    )
  );

  constructor(private actions$: Actions, private db: BookStoreDatabase) {}
}
