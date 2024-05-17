import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'app/common/components/badges/Badge';
import { SearchInput } from 'app/common/components/inputs/SearchInput';
import { Heading2 } from 'app/common/components/typography/Heading2';
import { selectUndoneTodoCount } from '../../slices/todos/todoSelectors';
import { setTodoFilter } from '../../slices/todos/todosSlice';
import classes from './Header.module.scss';

export const Header = () => {
  const undoneTodoCount = useSelector(selectUndoneTodoCount);
  const dispatch = useDispatch();

  return (
    <header className={classes.todosHeader}>
      <Badge content={undoneTodoCount} color="error">
        <Heading2>Todos</Heading2>
      </Badge>
      <SearchInput
        className={classes.todoSearch}
        onChange={(event) => dispatch(setTodoFilter(event.target.value))}
        placeholder="Search todos..."
      />
    </header>
  );
};
