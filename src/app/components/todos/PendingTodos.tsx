import { useSelector } from 'react-redux';
import { Pending } from '../../common/components/Pending';
import { Heading4 } from '../../common/components/typography/Heading4';
import { AppState } from '../../store';
import classes from './Todos.module.scss';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const PendingTodos = ({ children }: Props) => {
  const isPending = useSelector((state: AppState) => state.todos.isPending);

  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      {children}
    </Pending>
  );
};
