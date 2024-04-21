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

interface State {
  themeOptions: ThemeOptions;
  viewType: ViewType;
}

const initialState: State = {
  themeOptions: initialThemeOptions,
  viewType: 'list'
};

const viewControlsSlice = createSlice({
  name: 'viewControls',
  initialState,
  reducers: {
    switchToDarkMode: (state) => {
      state.themeOptions = {
        palette: { mode: 'dark' },
        typography: initialThemeOptions.typography
      };
    },

    switchToLightMode: (state) => {
      state.themeOptions = {
        palette: { mode: 'light' },
        typography: initialThemeOptions.typography
      };
    },

    switchToTodosListView: (state) => {
      state.viewType = 'list';
    },
    switchToTodosTableView: (state) => {
      state.viewType = 'table';
    }
  }
});

export const {
  switchToDarkMode,
  switchToLightMode,
  switchToTodosListView,
  switchToTodosTableView
} = viewControlsSlice.actions;

export default viewControlsSlice.reducer;
