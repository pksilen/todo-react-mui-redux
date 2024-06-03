import { useDispatch } from 'react-redux';
import { ViewMode, ViewType, setViewMode, setViewType } from '../../slices/controls/controlsSlice';
import { toggleShouldShowUndoneTodosOnly } from '../../slices/todos/todosSlice';

export const useControls = () => {
  const dispatch = useDispatch();

  return {
    setViewMode: (viewMode: ViewMode) => dispatch(setViewMode(viewMode)),
    setViewType: (viewType: ViewType) => dispatch(setViewType(viewType)),
    toggleShouldShowUndoneTodosOnly: () => dispatch(toggleShouldShowUndoneTodosOnly())
  };
};
