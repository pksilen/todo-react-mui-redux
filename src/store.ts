import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/slices/todosSlice';
import viewControlsSlice from './todos/slices/viewControlsSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    viewControls: viewControlsSlice
  }
});

export type AppState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
