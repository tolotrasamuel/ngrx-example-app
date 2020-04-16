export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

export class CollectionState implements State{

  static  initial: State = (
    {
      loaded: false,
      loading: false,
      ids: [],
    }
  );
  loaded: boolean;
  loading: boolean;
  ids: string[];
}
