import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const themes = {
  darkTheme: {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(1, 1, 1)',
      card: 'rgb(18, 18, 18)',
      text: 'rgb(229, 229, 231)',
      border: 'rgb(39, 39, 41)',
    },
  },
  defaultTheme: {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(224, 224, 224)',
    },
  },
};

export default themes;
