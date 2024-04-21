import { Todo } from '../slices/Todo';

export interface TodoService {
  createTodo(todo: Todo): Promise<Error | null>;
  getTodos(): Promise<[Todo[], Error | null]>;
}
