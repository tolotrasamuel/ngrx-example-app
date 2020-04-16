import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {
    StoreRouterConnectingModule,
    RouterStateSerializer,
} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


import {AppRoutingModule,} from './app-routing.module';
import {CustomRouterStateSerializer} from './shared/utils';

import {environment} from '../environments/environment';
import {CoreModule} from './core/core.module';
import {AuthModule} from './core/features/auth/auth.module';
import {AppComponent} from './core/containers/app';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,


        /**
         * @ngrx/router-store keeps router state up-to-date in the store.
         */
        StoreRouterConnectingModule.forRoot({
            /*
              They stateKey defines the name of the state used by the router-store reducer.
              This matches the key defined in the map of reducers
            */
            stateKey: 'router',
        }),

        /**
         * Store devtools instrument the store retaining past versions of state
         * and recalculating new states. This enables powerful time-travel
         * debugging.
         *
         * To use the debugger, install the Redux Devtools extension for either
         * Chrome or Firefox
         *
         * See: https://github.com/zalmoxisus/redux-devtools-extension
         */
        StoreDevtoolsModule.instrument({
            name: 'NgRx Book Store DevTools',
            logOnly: environment.production,
        }),

        /**
         * EffectsModule.forRoot() is imported once in the root module and
         * sets up the effects class to be initialized immediately when the
         * application starts.
         *
         * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
         */
        EffectsModule.forRoot([]),


        CoreModule.forRoot(),

        AuthModule.forRoot(),

        AppRoutingModule,

    ],
    providers: [
        /**
         * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
         * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
         * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
         */
        {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
