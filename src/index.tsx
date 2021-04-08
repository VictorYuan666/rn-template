import 'react-native-gesture-handler';

import React from 'react';
import Root from './App';
import { RootSiblingParent } from 'react-native-root-siblings';

function App() {
  return (
    <RootSiblingParent>
      <Root />
    </RootSiblingParent>
  );
}

export default App;
