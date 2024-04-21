import SearchIcon from '@mui/icons-material/Search';
import {
  Badge,
  BadgeProps,
  InputAdornment,
  styled,
  TextField,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import { AppState, store } from '../../../store';
import { setTodoFilter } from '../../slices/todosSlice';
import classNames from './Header.module.scss';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: '16px',
    padding: '2px 4px',
    right: -3,
    top: 15
  }
}));

export default function Header() {
  const undoneTodoCount = useSelector(
    (state: AppState) =>
      state.todos.todos.filter(({ isDone }) => !isDone).length
  );

  return (
    <header className={classNames.header}>
      <StyledBadge badgeContent={undoneTodoCount} color="error">
        <Typography variant="h2">Todos</Typography>
      </StyledBadge>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        onChange={(event) => store.dispatch(setTodoFilter(event.target.value))}
        placeholder="Search todos..."
        sx={{ flexGrow: 1, marginLeft: '40px' }}
        variant="standard"
      />
    </header>
  );
}
