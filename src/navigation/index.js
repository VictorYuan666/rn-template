import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { Detail, Home } from '@/pages/home';
import React, { useEffect, useState } from 'react';

import { Appearance } from 'react-native';
import { Icon } from '@/components';
import { Login } from '@/pages/auth';
import { Mine } from '@/pages/mine';
import { NavigationContainer } from '@react-navigation/native';
import { Splash } from '@/pages/guide';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TAB_SCREENS = {
  Home: {
    title: 'Home',
    component: Home,
    options: {
      tabBarLabel: '首页',
      tabBarIcon: ({ color, size }) => <Icon name="check-circle" color={color} size={size} />,
    },
  },
  Mine: {
    title: 'Mine',
    component: Mine,
    options: {
      tabBarLabel: '我的',
      tabBarIcon: ({ color, size }) => <Icon name="check-circle" color={color} size={size} />,
    },
  },
};

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#888',
      }}
    >
      {Object.keys(TAB_SCREENS).map((name) => (
        <Stack.Screen
          key={name}
          name={name}
          component={TAB_SCREENS[name].component}
          options={{
            title: TAB_SCREENS[name].title,
            ...TAB_SCREENS[name].options,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const AUTH_SCREENS = {
  Login: { title: '登录', component: Login },
};

const MAIN_SCREENS = {
  Splash: {
    component: Splash,
    options: {
      headerShown: false,
    },
  },
  TabScreen: {
    title: '',
    component: TabScreen,
    options: {
      headerShown: false,
    },
  },
  Detail: {
    title: '详情',
    component: Detail,
  },
};

// const MODAL_SCREENS = {
//   DetailModal: { title: 'modal', component: Splash },
// };

function MainNav() {
  // const { token } = useSelector(state => state.app);

  const SCREEN = MAIN_SCREENS;

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: '#e91e63',
        headerTitleAlign: 'center',
        headerTruncatedBackTitle: true,
        headerBackTitleVisible: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        headerBackImage: ({ tintColor }) => <Icon name="left" color={tintColor} size={24} />,
      }}
    >
      {Object.keys(SCREEN).map((name) => (
        <Stack.Screen
          key={name}
          name={name}
          component={SCREEN[name].component}
          options={{ title: SCREEN[name].title }}
        />
      ))}
  
    </Stack.Navigator>
  );
}

// function ModalNav() {
//   return (
//     <>
//       {Object.keys(MODAL_SCREENS).map(name => (
//         <Stack.Screen
//           key={name}
//           name={name}
//           component={MODAL_SCREENS[name].component}
//           options={{ title: MODAL_SCREENS[name].title }}
//         />
//       ))}
//     </>
//   );
// }

function Navigation() {
  // const colorScheme = useColorScheme();
  // useEffect(() => {
  //   const subscription = Appearance.addChangeListener(({ colorScheme }) => {
  //     console.log(colorScheme, 'colorScheme');
  //     dispatch.app.update({
  //       dark: colorScheme === 'dark',
  //     });
  //   });

  //   return () => {
  //     subscription?.remove();
  //   };
  // }, []);

  return (
    <NavigationContainer
    // initialState={initialState}
    // onStateChange={(state) =>
    //   AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    // }
    >
      <Stack.Navigator mode="modal" headerMode="float" screenOptions={{ headerShown: false }}>
        <Stack.Screen key={'main'} name={'main'} component={MainNav} />
        {/* {ModalNav()} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
