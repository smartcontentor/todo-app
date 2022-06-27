import React, { useCallback } from 'react';

import ButtonComponent from '@components/Button';
import TodoListComponent from './components/TodoList';
import { StyledTodoForm, StyledTodoInput, StyledTodosContainer } from '@pages/todos/styles';
import { StoreContext, useStore } from '@store/index';
import { StoreActions } from '@store/enums';

export interface TodoType {
  id: string;
  text: string;
  isDone: boolean;
}

function TodosComponent(): React.ReactElement {
  const [state, dispatch] = useStore();
  const { newInputText } = state;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (newInputText.trim().length !== 0) {
        dispatch({
          type: StoreActions.ADD_TODO,
          payload: newInputText,
        });
      }
    },
    [dispatch, newInputText]
  );

  const handleNewTodoInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: StoreActions.NEW_INPUT_TEXT,
        payload: event.target.value,
      });
    },
    [dispatch]
  );

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <StyledTodosContainer>
        <StyledTodoForm onSubmit={handleSubmit}>
          <StyledTodoInput
            type="text"
            placeholder="Enter Todo Text"
            onChange={handleNewTodoInputChange}
            value={state.newInputText}
          />
          <ButtonComponent type="submit" color="primary" text="Add New" />
        </StyledTodoForm>
        <TodoListComponent />
      </StyledTodosContainer>
    </StoreContext.Provider>
  );
}

export default TodosComponent;
