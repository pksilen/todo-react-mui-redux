import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'app/slices/todos/todosSlice';

export const useTodoAdding = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  const maybeAddTodo = () => {
    if (todoTitle) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(addTodo(todoTitle) as any);
      setTodoTitle('');
    }
  };

  return { maybeAddTodo, setTodoTitle, todoTitle };
};
