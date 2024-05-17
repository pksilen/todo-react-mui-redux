import { createSelector } from '@reduxjs/toolkit';
import { isAny } from '../../common/utils/isAny';
import { AppState } from '../../store';
import { Todo } from './Todo';

export const selectUndoneTodoCount = createSelector(
  (state: AppState) => state.todos.todos,
  (todos) => todos.filter((todo) => !todo.isDone).length
);

export const selectShownTodos = createSelector(
  [
    (state: AppState) => state.todos.todos,
    (state: AppState) => state.todos.lowerCaseTodoFilterText,
    (state: AppState) => state.todos.shouldShowUndoneTodosOnly
  ],
  (todos, lowerCaseTodoFilterText, shouldShowUndoneTodosOnly) => {
    const titleContainsTodoFilterText = ({ title }: Todo) =>
      title.toLowerCase().includes(lowerCaseTodoFilterText);

    const isUndone = ({ isDone }: Todo) => !isDone;

    return todos
      .filter(titleContainsTodoFilterText)
      .filter(shouldShowUndoneTodosOnly ? isUndone : isAny);
  }
);
