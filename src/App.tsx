import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { useUpdateAtom } from 'jotai/utils';
import Animated, { withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { createModel } from 'hox';

import Stack from './stacks';
import { authAtom } from 'modules/auth/authService';
import Iconfont from 'components/Iconfont';
import { theme, darkTheme } from './theme';

enableScreens();
// helpers.registerCustomIcon(Iconfont);s
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

  const updateAuth = useUpdateAtom(authAtom);
  const [dark] = useState(false);

    const counter = useCounterModel();

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  /**
   * 全局的错误处理，当接口返回的是登录失败时自动登出进入登录页面重新登录
   * @param error
   */
  const handleError = (error: Error) => {
    if (error.message === 'LoginFailure') {
      updateAuth({ signedIn: false });
    }
  };
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <View>
      <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'red' }, animatedStyles]} />
      <Button onPress={() => (offset.value = withSpring(Math.random()))} title="Move" />
      <Button onPress={() => counter.increment()} title="+" />
      <Text>{counter.count}</Text>
    </View>
  );
}

{
  /* <SafeAreaProvider>
<SWRConfig
  value={{
    onError: handleError,
  }}
>
  <ThemeProvider theme={dark ? darkTheme : theme}>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </ThemeProvider>
</SWRConfig>
</SafeAreaProvider> */
}
