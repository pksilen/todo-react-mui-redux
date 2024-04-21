import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { afterMountDispatch } from '../../../utils/utils';
import { Todo } from '../../slices/Todo';
import { fetchTodos } from '../../slices/todosSlice';
import classNames from './Todos.module.scss';
import TodosViewFactory from './TodosViewFactory';

export default function Todos() {
  const { isLoading, lowerCaseTodoFilterText, shouldShowUndoneOnly, todos } =
    useSelector((state: AppState) => state.todos);

  const viewType = useSelector(
    (state: AppState) => state.viewControls.viewType
  );

  afterMountDispatch(fetchTodos());

  const todoListItems = todos
    .filter(({ title }) =>
      title.toLowerCase().includes(lowerCaseTodoFilterText)
    )
    .filter(
      ({ isDone }) => (shouldShowUndoneOnly && !isDone) || !shouldShowUndoneOnly
    )
    .map((todo: Todo) => TodosViewFactory.createTodoView(viewType, todo));

  return (
    <div className={classNames.container}>
      {isLoading ? (
        <Typography variant="h4">Loading todos...</Typography>
      ) : (
        TodosViewFactory.createTodosView(viewType, todoListItems)
      )}
    </div>
  );
}
