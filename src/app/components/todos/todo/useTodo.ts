import { useDispatch, useSelector } from 'react-redux';
import {
  changeTodoTitle,
  removeTodo,
  setTodoAsEditable,
  toggleTodoDone
} from 'app/slices/todos/todosSlice';
import { AppState } from 'app/store';

export const useTodo = (id: string) => {
  const editableTodoId = useSelector((state: AppState) => state.todos.editableTodoId);
  const dispatch = useDispatch();

  return {
    isEditable: editableTodoId === id,
    changeTitle: (title: string) => dispatch(changeTodoTitle({ id, title })),
    remove: () => dispatch(removeTodo(id)),
    setAsEditable: () => dispatch(setTodoAsEditable(id)),
    toggleDone: () => dispatch(toggleTodoDone(id))
  };
};
