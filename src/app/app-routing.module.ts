import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './core/features/auth/services/auth-guard.service';
import {NotFoundPageComponent} from './core/containers/not-found-page';
import {BooksModule} from './core/features/books/books.module';
import {JokesModule} from './core/features/jokes/jokes.module';

export const routes: Routes = [
    {path: '', redirectTo: '/books', pathMatch: 'full'},
    {
        path: 'books',
        loadChildren: () => BooksModule,
        canActivate: [AuthGuard],
    }, {
        path: 'jokes',
        loadChildren: () => JokesModule,
        canActivate: [AuthGuard],
    },
    {path: '**', component: NotFoundPageComponent},
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
