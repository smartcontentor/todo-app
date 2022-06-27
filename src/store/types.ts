import { TodoType } from '@pages/todos';
import { StoreActions } from './enums';

export interface StoreStateTypes {
  todos: TodoType[];
  newInputText: string;
}

export interface StoreProviderTypes {
  state: StoreStateTypes;
  dispatch: React.Dispatch<StoreActionTypes>;
}

export interface PayloadTypes {
  todo: TodoType;
  newInputText: string;
}

export interface StoreActionTypes {
  type: StoreActions;
  payload: any;
}
