import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {JokeStoreEffects} from './root-store/joke-store/effects';
import {RouterModule} from '@angular/router';
import {JokesComponent} from './container/jokes/jokes.component';
import {JokeCardListComponent} from './components/joke-card-list/joke-card-list.component';
import {JokeCardItemComponent} from './components/joke-card-item/joke-card-item.component';
import {reducers} from './root-store/reducer';
import {MaterialModule} from '../../../material';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild([{path: '', component: JokesComponent},]),
        StoreModule.forFeature('jokes', reducers),
        EffectsModule.forFeature([JokeStoreEffects])
    ],
    declarations: [
        JokesComponent,
        JokeCardListComponent,
        JokeCardItemComponent,
    ]
})
export class JokesModule {
}
