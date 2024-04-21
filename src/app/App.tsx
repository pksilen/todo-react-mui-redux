import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import AddTodo from '../todos/views/addtodo/AddTodo';
import ErrorCatcher from '../todos/views/errorcatcher/ErrorCatcher';
import Header from '../todos/views/header/Header';
import Todos from '../todos/views/todos/Todos';
import ViewControls from '../todos/views/viewcontrols/ViewControls';
import classNames from './App.module.scss';

export default function App() {
  const themeOptions = useSelector(
    (state: AppState) => state.viewControls.themeOptions
  );

  return (
    <div className={classNames.container}>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline />
        <Header />
        <ViewControls />
        <ErrorCatcher>
          <Todos />
          <AddTodo />
        </ErrorCatcher>
      </ThemeProvider>
    </div>
  );
}
