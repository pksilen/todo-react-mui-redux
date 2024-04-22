import { v4 as uuidv4 } from 'uuid';
import { Dispatch } from '../../../store';
import todoService from '../../services/FakeTodoService';
import { todoAddingFailed, todoAddingSucceeded } from '../todosSlice';

const addTodo = (title: string) => async (dispatch: Dispatch) => {
  const todo = { id: uuidv4(), title, isDone: false };
  const error = await todoService.createTodo(todo);
  dispatch(error ? todoAddingFailed() : todoAddingSucceeded(todo));
};

export default addTodo;
