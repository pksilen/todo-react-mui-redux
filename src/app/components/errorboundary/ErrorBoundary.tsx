import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'app/common/components/buttons/Button';
import { Heading3 } from 'app/common/components/typography/Heading3';
import { clearError } from 'app/slices/todos/todosSlice';
import { AppState } from 'app/store';
import classes from './ErrorBoundary.module.scss';

type Props = {
  children: React.ReactNode;
};

export const ErrorBoundary = ({ children }: Props) => {
  const hasError = useSelector((state: AppState) => state.todos.hasError);
  const dispatch = useDispatch();

  const errorSection = (
    <section className={classes.error}>
      <Heading3>Something went wrong.</Heading3>
      {hasError && (
        <Button className={classes.button} onClick={() => dispatch(clearError())}>
          Ok
        </Button>
      )}
    </section>
  );

  return (
    <ReactErrorBoundary fallback={errorSection}>
      {hasError ? errorSection : children}
    </ReactErrorBoundary>
  );
};
