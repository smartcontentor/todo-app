import { TodoType } from '@pages/todos';
import { PayloadTypes, StoreStateTypes } from './types';

export function addNewTodo(state: StoreStateTypes, payload: string): StoreStateTypes {
  state.newInputText = '';
  return {
    ...state,
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
        text: payload.trim(),
        isDone: false,
      },
    ],
  };
}

export function deleteTodo(state: StoreStateTypes, payload: TodoType): StoreStateTypes {
  return {
    ...state,
    todos: state.todos.filter((currentTodo: TodoType) => currentTodo !== payload),
  };
}

export function changeTodoStatus(state: StoreStateTypes, payload: TodoType): StoreStateTypes {
  return {
    ...state,
    todos: state.todos.map((currentTodo: TodoType) =>
      currentTodo === payload ? { ...payload, isDone: !payload.isDone } : currentTodo
    ),
  };
}

export function setNewInputText(state: StoreStateTypes, payload: string) {
  return { ...state, newInputText: payload };
}
