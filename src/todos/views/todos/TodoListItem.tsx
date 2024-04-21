import { TaskAlt } from '@mui/icons-material';
import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { store } from '../../../store';
import { Todo } from '../../slices/Todo';
import { editTodo, removeTodo, toggleTodoDone } from '../../slices/todosSlice';

type Props = {
  todo: Todo;
};

export default function TodoListItem({ todo: { id, title, isDone } }: Props) {
  return (
    <ListItem sx={{ display: 'flex' }}>
      <ListItemIcon>
        <TaskAlt color={isDone ? 'success' : 'error'} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        sx={{ textDecoration: isDone ? 'line-through' : '' }}
      />
      <Button
        onClick={() => store.dispatch(toggleTodoDone(id))}
        sx={{ flexShrink: 0 }}
      >
        {isDone ? 'Mark undone' : 'Mark done'}
      </Button>
      <Button
        onClick={() =>
          store.dispatch(editTodo({ id, title: title + ' edited' }))
        }
        sx={{ flexShrink: 0 }}
      >
        Edit
      </Button>
      <Button
        onClick={() => store.dispatch(removeTodo(id))}
        sx={{ flexShrink: 0 }}
      >
        Remove
      </Button>
    </ListItem>
  );
}
