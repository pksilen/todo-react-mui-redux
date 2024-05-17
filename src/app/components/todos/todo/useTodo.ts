import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from 'app/slices/todos/todosSlice';
import { AppState } from 'app/store';

export const useTodo = (id: string) => {
  const editableTodoId = useSelector((state: AppState) => state.todos.editableTodoId);
  const dispatch = useDispatch();

  const editTodoTitle = (title: string) => {
    dispatch(editTodo({ id, title }));
  };

  return { dispatch, editableTodoId, editTodoTitle };
};
