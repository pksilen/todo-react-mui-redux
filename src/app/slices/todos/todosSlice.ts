import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { todoService } from '../../services/FakeTodoService';
import { Dispatch } from '../../store';
import { Todo } from './Todo';

export type TodosState = {
  editableTodoId: string | null;
  hasError: boolean;
  isPending: boolean;
  lowerCaseTodoFilterText: string;
  shouldShowUndoneTodosOnly: boolean;
  todos: Todo[];
};

const initialState: TodosState = {
  editableTodoId: null,
  hasError: false,
  isPending: false,
  lowerCaseTodoFilterText: '',
  shouldShowUndoneTodosOnly: false,
  todos: []
};

const findTodo = (todos: Todo[], id: string) => todos.find((todo) => todo.id === id);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    clearError: (state) => {
      state.hasError = false;
    },

    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const todo = findTodo(state.todos, action.payload.id);

      if (todo) {
        todo.title = action.payload.title;
      }
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload);

      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1);
      }
    },

    setEditableTodo: (state, action: PayloadAction<string | null>) => {
      state.editableTodoId = action.payload;
    },

    setTodoFilter: (state, action: PayloadAction<string>) => {
      state.lowerCaseTodoFilterText = action.payload.toLowerCase();
    },

    startFetchingTodos: (state: TodosState) => {
      state.isPending = true;
    },

    todoAddingFailed: (state: TodosState) => {
      state.hasError = true;
    },

    todoAddingSucceeded: (state: TodosState, action: PayloadAction<Todo>) => {
      state.hasError = false;
      state.todos.push(action.payload);
    },

    todosFetchingFailed: (state: TodosState) => {
      state.isPending = false;
      state.hasError = true;
    },

    todosFetchingSucceeded: (state: TodosState, action: PayloadAction<Todo[]>) => {
      state.isPending = false;
      state.todos = action.payload;
    },

    toggleShouldShowUndoneTodosOnly: (state) => {
      state.shouldShowUndoneTodosOnly = !state.shouldShowUndoneTodosOnly;
    },

    toggleTodoDone: (state, action: PayloadAction<string>) => {
      const todo = findTodo(state.todos, action.payload);

      if (todo) {
        todo.isDone = !todo.isDone;
      }
    }
  }
});

export const {
  clearError,
  editTodo,
  removeTodo,
  setEditableTodo,
  setTodoFilter,
  startFetchingTodos,
  todoAddingFailed,
  todoAddingSucceeded,
  todosFetchingFailed,
  todosFetchingSucceeded,
  toggleShouldShowUndoneTodosOnly,
  toggleTodoDone
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

export const addTodo = (title: string) => async (dispatch: Dispatch) => {
  const todo = { id: uuidv4(), title, isDone: false };
  const error = await todoService.createTodo(todo);
  dispatch(error ? todoAddingFailed() : todoAddingSucceeded(todo));
};

export const fetchTodos = () => async (dispatch: Dispatch) => {
  dispatch(startFetchingTodos());
  const [todos, error] = await todoService.getTodos();
  dispatch(error ? todosFetchingFailed() : todosFetchingSucceeded(todos));
};
