import { useSelector } from 'react-redux';
import { afterMountDispatch } from 'app/common/hooks/afterMountDispatch';
import { selectShownTodos } from 'app/slices/todos/todoSelectors';
import { fetchTodos } from 'app/slices/todos/todosSlice';

export const useTodos = () => {
  const shownTodos = useSelector(selectShownTodos);
  afterMountDispatch(fetchTodos());
  return shownTodos;
};
