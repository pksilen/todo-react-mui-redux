import { PaletteMode, ThemeOptions } from '@mui/material';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialThemeOptions } from './initialThemeOptions';

export type ViewMode = PaletteMode;
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
    setViewMode: (state, action: PayloadAction<ViewMode>) => {
      if (state.themeOptions.palette) {
        state.themeOptions.palette.mode = action.payload;
      }
    },

    setViewType: (state, action: PayloadAction<ViewType>) => {
      state.viewType = action.payload;
    }
  }
});

export const { setViewMode, setViewType } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
