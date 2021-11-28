import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [toggleState, setToggleState] = useState(initialState);
  const toggle = useCallback(() => setToggleState((state) => !state), []);

  return [toggleState, toggle];
};

export default useToggle;
