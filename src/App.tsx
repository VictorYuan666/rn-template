import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import React, { useEffect, useState } from 'react';

import { Login } from '@/pages/auth';
import Navigation from '@/navigation';
import RNBootSplash from 'react-native-bootsplash';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UseRequestProvider } from 'ahooks';
import axios from 'axios';
import { createModel } from 'hox';
import { enableScreens } from 'react-native-screens';

enableScreens();

function useCounter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return {
    count,
    decrement,
    increment,
  };
}

const useCounterModel = createModel(useCounter);
export default function App() {
  const counter = useCounterModel();

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <RootSiblingParent>
    <SafeAreaProvider>
      <UseRequestProvider
        value={{
          refreshOnWindowFocus: true,
          requestMethod: async (param) => {
            console.log('param', param);
            return axios(param);
          },
        }}
      >
        <Navigation />
      </UseRequestProvider>
    </SafeAreaProvider>
    </RootSiblingParent>
  );
}
