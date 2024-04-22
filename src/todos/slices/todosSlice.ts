import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from '../../store';
import todoService from '../services/FakeTodoService';
import { Todo } from './Todo';

export interface TodosState {
  hasError: boolean;
  isLoading: boolean;
  lowerCaseTodoFilterText: string;
  shouldShowUndoneOnly: boolean;
  todos: Todo[];
}

const initialState: TodosState = {
  hasError: false,
  isLoading: false,
  lowerCaseTodoFilterText: '',
  shouldShowUndoneOnly: false,
  todos: []
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    clearError: (state) => {
      state.hasError = false;
    },

    editTodo: (state, action: { payload: { id: string; title: string } }) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.title = action.payload.title;
      }
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);

      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },

    toggleShouldShowUndoneOnly: (state) => {
      state.shouldShowUndoneOnly = !state.shouldShowUndoneOnly;
    },

    setTodoFilter: (state, action: PayloadAction<string>) => {
      state.lowerCaseTodoFilterText = action.payload;
    },

    toggleTodoDone: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },

    todoAddingSucceeded: (state: TodosState, action: PayloadAction<Todo>) => {
      state.hasError = false;
      state.todos.push(action.payload);
    },

    todoAddingFailed: (state: TodosState) => {
      state.hasError = true;
    },

    startFetchingTodos: (state: TodosState) => {
      state.isLoading = true;
    },

    todosFetchingSucceeded: (
      state: TodosState,
      action: PayloadAction<Todo[]>
    ) => {
      state.isLoading = false;
      state.todos = action.payload;
    },

    todosFetchingFailed: (state: TodosState) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const {
  clearError,
  editTodo,
  removeTodo,
  toggleShouldShowUndoneOnly,
  setTodoFilter,
  toggleTodoDone,
  todoAddingSucceeded,
  todoAddingFailed,
  startFetchingTodos,
  todosFetchingSucceeded,
  todosFetchingFailed
} = todosSlice.actions;

export default todosSlice.reducer;

export const fetchTodos = () => async (dispatch: Dispatch) => {
  dispatch(startFetchingTodos());
  const [todos, error] = await todoService.getTodos();
  dispatch(error ? todosFetchingFailed() : todosFetchingSucceeded(todos));
};
