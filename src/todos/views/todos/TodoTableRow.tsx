import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, IconButton, TableCell, TableRow } from '@mui/material';
import { store } from '../../../store';
import { Todo } from '../../slices/Todo';
import { editTodo, removeTodo, toggleTodoDone } from '../../slices/todosSlice';

type Props = {
  todo: Todo;
};

export default function TodoTableRow({ todo: { id, title, isDone } }: Props) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={isDone}
          color="success"
          onChange={() => store.dispatch(toggleTodoDone(id))}
        />
      </TableCell>
      <TableCell
        sx={{ flexGrow: 1, textDecoration: isDone ? 'line-through' : '' }}
      >
        {title}
      </TableCell>
      <TableCell align="right">
        <IconButton
          onClick={() =>
            store.dispatch(editTodo({ id, title: title + ' edited' }))
          }
        >
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => store.dispatch(removeTodo(id))}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
