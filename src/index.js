import 'react-native-gesture-handler';
import React from 'react';
import {Provider as AProvider} from '@ant-design/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import Navigation from '@navigation';
import {store, persistor} from '@store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AProvider>
            <Navigation />
          </AProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
