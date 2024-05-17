import { useSelector } from 'react-redux';
import { afterMountDispatch } from 'app/common/hooks/afterMountDispatch';
import { selectShownTodos } from 'app/slices/todos/todoSelectors';
import { fetchTodos } from 'app/slices/todos/todosSlice';
import { AppState } from 'app/store';

export const useTodos = () => {
  const isPending = useSelector((state: AppState) => state.todos.isPending);
  const shownTodos = useSelector(selectShownTodos);
  afterMountDispatch(fetchTodos());

  return {
    isPending,
    shownTodos
  };
};
