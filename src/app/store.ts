import { configureStore } from '@reduxjs/toolkit';
import { controlsReducer } from './slices/controlsSlice';
import { todosReducer } from './slices/todos/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    controls: controlsReducer
  }
});

export type AppState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
