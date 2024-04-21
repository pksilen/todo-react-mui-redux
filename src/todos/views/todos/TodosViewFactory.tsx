import { List, Table, TableBody } from '@mui/material';
import { ReactNode } from 'react';
import { Todo } from '../../slices/Todo';
import { ViewType } from '../../slices/viewControlsSlice';
import TodoListItem from './TodoListItem';
import TodoTableRow from './TodoTableRow';

export default class TodosViewFactory {
  static createTodosView(viewType: ViewType, children: ReactNode) {
    if (viewType === 'list') {
      return <List>{children}</List>;
    } else if (viewType === 'table') {
      return (
        <Table>
          <TableBody>{children}</TableBody>
        </Table>
      );
    }

    throw new Error('Unsupported view type');
  }

  static createTodoView(viewType: ViewType, todo: Todo) {
    if (viewType === 'list') {
      return <TodoListItem key={todo.id} todo={todo} />;
    } else if (viewType === 'table') {
      return <TodoTableRow key={todo.id} todo={todo} />;
    }

    throw new Error('Unsupported view type');
  }
}
