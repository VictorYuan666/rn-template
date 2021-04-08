import { createModel } from 'hox';
import { useSetState } from 'ahooks';

function useApp() {
  const [app, setApp] = useSetState({ a: 1 });

  return {
    app,
    setApp,
  };
}

export default createModel(useApp);
