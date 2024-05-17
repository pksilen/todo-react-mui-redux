import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function afterMountDispatch(action: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
}
