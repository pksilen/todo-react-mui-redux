import {
  DarkMode,
  FormatListBulleted,
  GridOn,
  LightMode
} from '@mui/icons-material';
import {
  FormControlLabel,
  Switch,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import { store } from '../../../store';
import { toggleShouldShowUndoneOnly } from '../../slices/todosSlice';
import {
  switchToDarkMode,
  switchToLightMode,
  switchToTodosListView,
  switchToTodosTableView,
  ViewType
} from '../../slices/viewControlsSlice';
import classNames from './ViewControls.module.scss';

type ViewMode = 'dark' | 'light';

export default function ViewControls() {
  const [viewMode, setViewMode] = useState<ViewMode>('dark');
  const [viewType, setViewType] = useState<ViewType>('list');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeViewType(event: MouseEvent<HTMLElement>, viewType: any) {
    setViewType(viewType);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeViewMode(event: MouseEvent<HTMLElement>, newViewMode: any) {
    setViewMode(newViewMode);
  }

  return (
    <div className={classNames.container}>
      <ToggleButtonGroup
        exclusive
        onChange={changeViewType}
        size="small"
        value={viewType}
      >
        <ToggleButton
          onClick={() => store.dispatch(switchToTodosListView())}
          value="list"
        >
          <FormatListBulleted />
        </ToggleButton>
        <ToggleButton
          onClick={() => store.dispatch(switchToTodosTableView())}
          value="table"
        >
          <GridOn />
        </ToggleButton>
      </ToggleButtonGroup>
      <FormControlLabel
        control={
          <Switch
            onClick={() => store.dispatch(toggleShouldShowUndoneOnly())}
          />
        }
        label="Show undone only"
      />
      <ToggleButtonGroup
        exclusive
        onChange={changeViewMode}
        size="small"
        value={viewMode}
      >
        <ToggleButton
          onClick={() => store.dispatch(switchToLightMode())}
          value="light"
        >
          <LightMode />
        </ToggleButton>
        <ToggleButton
          onClick={() => store.dispatch(switchToDarkMode())}
          value="dark"
        >
          <DarkMode />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
