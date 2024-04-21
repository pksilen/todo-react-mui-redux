import { Button, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import { AppState, store } from '../../../store';
import { clearError } from '../../slices/todosSlice';
import classNames from './ErrorCatcher.module.scss';

type Props = {
  children: ReactNode;
};

export default function ErrorCatcher({ children }: Props) {
  const hasError = useSelector((state: AppState) => state.todos.hasError);

  const fallback = (
    <div className={classNames.fallbackContainer}>
      <Typography variant="h3">Something went wrong.</Typography>
      {hasError && (
        <Button
          onClick={() => store.dispatch(clearError())}
          sx={{ marginTop: '20px' }}
          variant="contained"
        >
          Ok
        </Button>
      )}
    </div>
  );

  return (
    <ErrorBoundary fallback={fallback}>
      {hasError ? fallback : children}
    </ErrorBoundary>
  );
}