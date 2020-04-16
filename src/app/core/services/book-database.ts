import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from '../features/books/models/book';

@Injectable()
export class BookStoreDatabase {

    books: Book[] = [];

    query(books: string) {
        return of(this.books);
    }

    insert(books: string, bs: Book[]) {
        const newBook = [...this.books];
        newBook.push(...bs);
        this.books = newBook;
        return of(bs);
    }

    executeWrite(books: string, delete1: string, ids: string[]) {
        let newBook = [...this.books];
        for (const id of ids) {
            newBook = newBook.filter(e => e.id !== id);
        }
        this.books = newBook;
        return of(true);
    }

    open(booksApp: string): void {
        return undefined;
    }
}
