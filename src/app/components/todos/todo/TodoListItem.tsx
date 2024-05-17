import classNames from 'classnames';
import { IconOrButton } from 'app/common/components/buttons/IconOrButton';
import { CheckIcon, EditIcon, RemoveIcon, TodoIcon } from 'app/common/components/icons/Icons';
import { EditTextInput } from 'app/common/components/inputs/EditTextInput';
import { ListItem } from 'app/common/components/list/ListItem';
import { ListItemIcon } from 'app/common/components/list/ListItemIcon';
import { ListItemText } from 'app/common/components/list/ListItemText';
import { Todo } from '../../../slices/todos/Todo';
import { removeTodo, setEditableTodo, toggleTodoDone } from '../../../slices/todos/todosSlice';
import classes from './TodoListItem.module.scss';
import { useTodo } from './useTodo';

type Props = {
  readonly todo: Todo;
};

export const TodoListItem = ({ todo: { id, title, isDone } }: Props) => {
  const { dispatch, editableTodoId, editTodoTitle } = useTodo(id);
  const titleClasses = classNames(classes.title, isDone && classes.isDone);

  return (
    <ListItem className={classes.todo}>
      <ListItemIcon icon={<TodoIcon color={isDone ? 'success' : 'error'} />} />
      {editableTodoId === id ? (
        <EditTextInput aria-label="Edit todo" onEditComplete={editTodoTitle} text={title} />
      ) : (
        <ListItemText
          className={titleClasses}
          onDoubleClick={() => dispatch(setEditableTodo(id))}
          text={title}
        />
      )}
      <div className={classes.buttons}>
        <IconOrButton
          icon={<CheckIcon />}
          onClick={() => dispatch(toggleTodoDone(id))}
          text={isDone ? 'Mark undone' : 'Mark done'}
        />
        <IconOrButton
          icon={<EditIcon />}
          onClick={() => dispatch(setEditableTodo(id))}
          text="Edit"
        />
        <IconOrButton
          icon={<RemoveIcon />}
          onClick={() => dispatch(removeTodo(id))}
          text="Remove"
        />
      </div>
    </ListItem>
  );
};
