import { useSelector } from 'react-redux';
import { afterMountDispatch } from '../../common/hooks/afterMountDispatch';
import { selectShownTodos } from '../../slices/todos/todoSelectors';
import { fetchTodos } from '../../slices/todos/todosSlice';
import { AppState } from '../../store';

export const useTodos = () => {
  const isPending = useSelector((state: AppState) => state.todos.isPending);
  const shownTodos = useSelector(selectShownTodos);
  afterMountDispatch(fetchTodos());

  return {
    isPending,
    shownTodos
  };
};
