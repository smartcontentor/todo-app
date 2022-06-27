import React, { useContext } from 'react';

import TodoItemComponent from '../TodoItem';
import { TodoType } from '@pages/todos';
import { StyledTodoList } from '@pages/todos/components/TodoList/styles';
import { StoreContext } from '@store';

function TodoListComponent(): React.ReactElement {
  const {
    state: { todos },
  } = useContext(StoreContext);

  return (
    <>
      <StyledTodoList>
        {todos.length > 0
          ? todos.map((todo: TodoType) => <TodoItemComponent key={todo.id} todo={todo} />)
          : 'Nothing to Do!!!!'}
      </StyledTodoList>
    </>
  );
}

export default TodoListComponent;
