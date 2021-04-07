import React, {useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useSelector, useDispatch} from 'react-redux';
import {Icon} from '@ant-design/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import themes from '@themes';
import {Splash} from '@pages/guide';
import {Login} from '@pages/auth';
import {Home, Detail} from '@pages/home';
import {Mine} from '@pages/mine';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TAB_SCREENS = {
  Home: {
    title: 'Home',
    component: Home,
    options: {
      tabBarLabel: '首页',
      tabBarIcon: ({color, size}) => (
        <Icon name="home" color={color} size={size} />
      ),
    },
  },
  Mine: {
    title: 'Mine',
    component: Mine,
    options: {
      tabBarLabel: '我的',
      tabBarIcon: ({color, size}) => (
        <Icon name="user" color={color} size={size} />
      ),
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
      }}>
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
  Login: {title: '登录', component: Login},
};

const MAIN_SCREENS = {
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

const MODAL_SCREENS = {
  DetailModal: {title: 'modal', component: Splash},
};

function MainNav() {
  const [loading, setLoading] = useState(false);
  const {token} = useSelector((state) => state.app);

  const SCREEN = token ? MAIN_SCREENS : AUTH_SCREENS;
  useEffect(() => {
    setLoading(false);
    SplashScreen.hide();
  }, []);
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
        headerBackImage: ({tintColor}) => (
          <Icon name="left" color={tintColor} size={24} />
        ),
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ModalNav() {
  return (
    <>
      {Object.keys(MODAL_SCREENS).map((name) => (
        <Stack.Screen
          key={name}
          name={name}
          component={MODAL_SCREENS[name].component}
          options={{title: MODAL_SCREENS[name].title}}
        />
      ))}
    </>
  );
}

function Navigation(props) {
  const {dark} = useSelector((state) => state.app);
  const dispatch = useDispatch();
  // const colorScheme = useColorScheme();
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      console.log(colorScheme, 'colorScheme');
      dispatch.app.update({
        dark: colorScheme === 'dark',
      });
    });

    return () => {
      subscription?.remove();
    };
  }, []);
  return (
    <NavigationContainer
      // initialState={initialState}
      // onStateChange={(state) =>
      //   AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      // }
      theme={dark ? themes.darkTheme : themes.defaultTheme}>
      <Stack.Navigator
        mode="modal"
        headerMode="float"
        screenOptions={{headerShown: false}}>
        <Stack.Screen key={'main'} name={'main'} component={MainNav} />
        {/* {ModalNav()} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
