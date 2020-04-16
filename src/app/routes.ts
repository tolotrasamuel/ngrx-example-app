import { Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';
import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
    canActivate: [AuthGuard],
  }, {
    path: 'jokes',
    loadChildren: './jokes/jokes.module#JokesModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

