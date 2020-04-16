import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AppComponent} from './containers/app';
import {NotFoundPageComponent} from './containers/not-found-page';
import {LayoutComponent} from './components/layout';
import {NavItemComponent} from './components/nav-item';
import {SidenavComponent} from './components/sidenav';
import {ToolbarComponent} from './components/toolbar';
import {MaterialModule} from '../material';

import {GoogleBooksService} from './services/google-books';
import {BookStoreDatabase} from './services/book-database';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './root-store/reducer';

export const COMPONENTS = [
    AppComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,


        StoreModule.forRoot(reducers, {metaReducers}),

    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [GoogleBooksService, BookStoreDatabase],
        };
    }
}
