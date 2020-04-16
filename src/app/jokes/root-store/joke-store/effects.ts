import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {ActionTypes, LoadFailureAction, LoadRequestAction, LoadSuccessAction} from './actions';
import {DataService} from '../../services/data.service';

@Injectable()
export class JokeStoreEffects {
    constructor(private dataService: DataService, private actions$: Actions) {
    }

    @Effect()
    loadRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<LoadRequestAction>(
            ActionTypes.LOAD_REQUEST
        ),
        startWith(new LoadRequestAction()),
        switchMap(action =>
            this.dataService
                .getJokes()
                .pipe(
                    map(
                        items =>
                            new LoadSuccessAction({
                                items
                            })
                    ),
                    catchError(error =>
                        observableOf(new LoadFailureAction({error}))
                    ),)
        )
    );
}
