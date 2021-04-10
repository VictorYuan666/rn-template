import './themes';
import './i18n';

import React, { useEffect } from 'react';

import Navigation from '@/navigation';
import RNBootSplash from 'react-native-bootsplash';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
