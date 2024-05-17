import { ThemeOptions } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

const initialThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark'
  },
  typography: {
    body1: {
      fontSize: '16px',
      fontWeight: 300
    },
    fontFamily: ['Neue Haas Grotesk Text', 'sans-serif'].join(','),
    h2: {
      fontWeight: 500,
      letterSpacing: '-0.25rem'
    }
  }
};

export type ViewType = 'list' | 'table';

type State = {
  themeOptions: ThemeOptions;
  viewType: ViewType;
};

const initialState: State = {
  themeOptions: initialThemeOptions,
  viewType: 'list'
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    activateDarkMode: (state) => {
      state.themeOptions = {
        ...state.themeOptions,
        palette: { mode: 'dark' }
      };
    },

    activateLightMode: (state) => {
      state.themeOptions = {
        ...state.themeOptions,
        palette: { mode: 'light' }
      };
    },

    showTodosList: (state) => {
      state.viewType = 'list';
    },
    showTodosTable: (state) => {
      state.viewType = 'table';
    }
  }
});

export const { activateDarkMode, activateLightMode, showTodosList, showTodosTable } =
  controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;
