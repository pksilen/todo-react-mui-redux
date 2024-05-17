import { useDispatch } from 'react-redux';
import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from 'app/common/components/buttons/IconRadioButtonGroup';
import {
  DarkModeIcon,
  LightModeIcon,
  ListIcon,
  TableIcon
} from 'app/common/components/icons/Icons';
import { Switch } from 'app/common/components/switches/Switch';
import {
  ViewType,
  activateDarkMode,
  activateLightMode,
  showTodosList,
  showTodosTable
} from 'app/slices/controlsSlice';
import { toggleShouldShowUndoneTodosOnly } from '../../slices/todos/todosSlice';
import classes from './Controls.module.scss';

type ViewMode = 'dark' | 'light';

export const Controls = () => {
  const dispatch = useDispatch();

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    {
      icon: <ListIcon />,
      onClick: () => dispatch(showTodosList()),
      value: 'list'
    },
    {
      icon: <TableIcon />,
      onClick: () => dispatch(showTodosTable()),
      value: 'table'
    }
  ];

  const viewModeButtons: IconRadioButtonProps<ViewMode>[] = [
    {
      icon: <LightModeIcon />,
      onClick: () => dispatch(activateLightMode()),
      value: 'light'
    },
    {
      icon: <DarkModeIcon />,
      onClick: () => dispatch(activateDarkMode()),
      value: 'dark'
    }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch
        label="Show undone only"
        onClick={() => dispatch(toggleShouldShowUndoneTodosOnly())}
      />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="dark" />
    </section>
  );
};
