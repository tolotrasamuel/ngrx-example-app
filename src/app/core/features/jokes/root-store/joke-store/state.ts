import {createEntityAdapter, Dictionary, EntityAdapter, EntityState} from '@ngrx/entity';
import {Joke} from '../../models/joke';

export const adapter: EntityAdapter<Joke> = createEntityAdapter<Joke>({
    selectId: model => model.id,
    sortComparer: (a: Joke, b: Joke): number =>
        b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<Joke> {
    isLoading?: boolean;
    error?: any;
}


export class JokePageState implements State {
    static initial = adapter.getInitialState(
        {
            isLoading: false,
            error: null
        }
    );
    isLoading?: boolean;
    error?: any;
    ids: string[] | number[];
    entities: Dictionary<Joke>;

}
