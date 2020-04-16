export interface State {
  ids: string[];
  loading: boolean;
  error: string;
  query: string;
}

export class SearchState implements State {
  ids: string[];
  loading: boolean;
  error: string;
  query: string;

  static initial: State = (
    {
      ids: [],
      loading: false,
      error: '',
      query: '',
    }
  );
}
