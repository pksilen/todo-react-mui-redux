import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { store } from '../../../store';
import addTodo from '../../slices/actions/addTodo';
import classNames from './AddTodo.module.scss';

export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState('');

  function maybeAddTodo() {
    if (todoTitle) {
      store.dispatch(addTodo(todoTitle) as any);
      setTodoTitle('');
    }
  }

  return (
    <div className={classNames.container}>
      <TextField
        id="addtodo"
        fullWidth
        label="Add new todo..."
        onChange={(event) => setTodoTitle(event.target.value)}
        value={todoTitle}
        variant="standard"
      />
      <Button
        color="primary"
        onClick={maybeAddTodo}
        variant="contained"
        sx={{ flexShrink: 0, marginLeft: '25px' }}
      >
        Add todo
      </Button>
    </div>
  );
}
