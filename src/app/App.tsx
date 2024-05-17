import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Provider, useSelector } from 'react-redux';
import classNames from './App.module.scss';
import AddTodo from './components/addtodo/AddTodo';
import ViewControls from './components/controls/ViewControls';
import ErrorCatcher from './components/errorboundary/ErrorCatcher';
import Header from './components/header/Header';
import Todos from './components/todos/Todos';
import { AppState, store } from './store';

export default function App() {
  const themeOptions = useSelector((state: AppState) => state.controls.themeOptions);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
