import { createContext, useReducer } from 'react';

import { addNewTodo, changeTodoStatus, deleteTodo, setNewInputText } from './actions';
import { StoreStateTypes, StoreActionTypes, StoreProviderTypes } from './types';
import { StoreActions } from './enums';

const initialState = {
  newInputText: '',
  todos: [
    {
      id: '1',
      text: 'buy some stuff',
      isDone: true,
    },
    {
      id: '2',
      text: 'finish home work',
      isDone: false,
    },
    {
      id: '3',
      text: 'do laundry',
      isDone: true,
    },
  ],
};

function initialReducer(state: StoreStateTypes, action: StoreActionTypes) {
  const { type, payload } = action;
  switch (type) {
    case StoreActions.ADD_TODO:
      return addNewTodo(state, payload);
    case StoreActions.DELETE:
      return deleteTodo(state, payload);
    case StoreActions.CHANGE_STATUS:
      return changeTodoStatus(state, payload);
    case StoreActions.NEW_INPUT_TEXT:
      return setNewInputText(state, payload);
    default:
      throw new Error(`the action with ${type} doesn't exist`);
  }
}

function useStore(): [StoreStateTypes, React.Dispatch<StoreActionTypes>] {
  const [state, dispatch] = useReducer(initialReducer, initialState);

  return [state, dispatch];
}

export const StoreContext = createContext<StoreProviderTypes>(null!);

export { useStore, initialState };
