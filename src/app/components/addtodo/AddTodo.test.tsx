/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { addTodo } from 'app/slices/todos/todosSlice';
import { store } from '../../store';
import { AddTodo } from './AddTodo';


jest.mock('../../store');
jest.mock('../../slices/todos/actions/addTodo');

describe('AddTodo', () => {
  it('renders input for todo title and button for adding todo', () => {
    // WHEN
    render(<AddTodo />);

    // THEN
    const todoTitleInput = screen.getByLabelText(/Add new todo/i);
    const addTodoButton = screen.getByRole('button', {
      name: /Add todo/i
    });

    expect(todoTitleInput).toBeInTheDocument();
    expect(addTodoButton).toBeInTheDocument();
  });

  it('adds todo', () => {
    // GIVEN
    render(<AddTodo />);
    const todoTitleInput = screen.getByLabelText(/Add new todo/i);

    const addTodoButton = screen.getByRole('button', {
      name: /Add todo/i
    });

    // WHEN
    act(() => user.type(todoTitleInput, 'Test todo'));
    act(() => user.click(addTodoButton));

    // THEN
    expect(addTodo).toHaveBeenCalledWith('Test todo');
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('does not add todo when todo title is empty', () => {
    // GIVEN
    render(<AddTodo />);

    const addTodoButton = screen.getByRole('button', {
      name: /Add todo/i
    });

    // WHEN
    act(() => user.click(addTodoButton));

    // THEN
    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
