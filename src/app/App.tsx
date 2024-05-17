import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import classNames from './App.module.scss';
import { AddTodo } from './components/addtodo/AddTodo';
import { Controls } from './components/controls/Controls';
import { ErrorBoundary } from './components/errorboundary/ErrorBoundary';
import { Header } from './components/header/Header';
import { TodosList } from './components/todos/TodosList';
import { TodosTable } from './components/todos/TodosTable';
import { AppState } from './store';

export default function App() {
  const themeOptions = useSelector((state: AppState) => state.controls.themeOptions);
  const viewType = useSelector((state: AppState) => state.controls.viewType);

  return (
    <div className={classNames.container}>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline />
        <Header />
        <Controls />
        <ErrorBoundary>
          {viewType === 'list' ? <TodosList /> : <TodosTable />}
          <AddTodo />
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}
