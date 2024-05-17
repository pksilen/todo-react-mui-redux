import { todoService } from 'app/services/FakeTodoService';
import { TodosState, addTodo, clearError, todosReducer } from './todosSlice';

jest.mock('../../services/FakeTodoService');

describe('todosReducer', () => {
  describe('clearError', () => {
    it('should clear error state', () => {
      // GIVEN
      const initialState = { hasError: true };

      // WHEN
      const newState = todosReducer(initialState as TodosState, clearError());

      // THEN
      expect(newState.hasError).toBe(false);
    });
  });
  describe('addTodo', () => {
    it('should successfully add todo', async () => {
      // GIVEN
      const dispatch = jest.fn();
      (todoService.createTodo as jest.Mock).mockResolvedValue(null);

      // WHEN
      await addTodo('test todo')(dispatch);

      // THEN
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'todos/todoAddingSucceeded',
          payload: expect.objectContaining({
            title: 'test todo',
            isDone: false
          })
        })
      );
    });
  });
});
