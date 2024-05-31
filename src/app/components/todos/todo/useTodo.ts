import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo, setEditableTodo, toggleTodoDone } from 'app/slices/todos/todosSlice';
import { AppState } from 'app/store';

export const useTodo = (id: string) => {
  const editableTodoId = useSelector((state: AppState) => state.todos.editableTodoId);
  const dispatch = useDispatch();

  return {
    isEditable: editableTodoId === id,
    editTodoTitle: (title: string) => dispatch(editTodo({ id, title })),
    removeTodo: () => dispatch(removeTodo(id)),
    setEditableTodo: () => dispatch(setEditableTodo(id)),
    toggleTodoDone: () => dispatch(toggleTodoDone(id))
  };
};
