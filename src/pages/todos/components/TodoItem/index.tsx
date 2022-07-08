import { useCallback, useContext } from 'react';

import ButtonComponent from '@components/Button';
import CheckBoxComponent from '@components/CheckBox';
import { TodoType } from '@pages/todos';
import { StoreContext } from '@store';
import { StoreActions } from '@store/enums';
import { TodoItemWrapper } from './styles';

export type TodoItemProps = {
  todo: TodoType;
};

function TodoItemComponent({ todo }: TodoItemProps) {
  const { dispatch } = useContext(StoreContext);

  const handleChangeTodoStatus = useCallback(() => {
    dispatch({
      type: StoreActions.CHANGE_STATUS,
      payload: todo,
    });
  }, [dispatch, todo]);

  const handleDeleteTodo = useCallback(() => {
    dispatch({
      type: StoreActions.DELETE,
      payload: todo,
    });
  }, [dispatch, todo]);

  return (
    <TodoItemWrapper key={todo.id} todo={todo}>
      <CheckBoxComponent
        id={todo.id}
        labelText={todo.text}
        checked={todo.isDone}
        returnValue={todo}
        onChange={handleChangeTodoStatus}
      />
      <ButtonComponent
        aria-label="delete-button"
        returnValue={todo}
        icon="fa-solid fa-trash-can"
        colorIcon="error"
        onClick={handleDeleteTodo}
      />
    </TodoItemWrapper>
  );
}

export default TodoItemComponent;
