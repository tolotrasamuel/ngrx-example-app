import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Joke } from '../../models/joke';
import {JokesState} from '../../root-store/state';
import * as JokeStoreSelectors from '../../root-store/selectors';
import {LoadRequestAction} from '../../root-store/joke-store/actions';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes$: Observable<Joke[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<JokesState>) { }

  ngOnInit() {
    this.jokes$ = this.store$.select(
      JokeStoreSelectors.getAllJokes
    );

    this.error$ = this.store$.select(
      JokeStoreSelectors.getError
    );

    this.isLoading$ = this.store$.select(
      JokeStoreSelectors.getIsLoading
    );

    this.store$.dispatch(
      new LoadRequestAction()
    );
  }

  onRefresh() {
    this.store$.dispatch(
      new LoadRequestAction()
    );
  }

}
