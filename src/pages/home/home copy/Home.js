import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Screen} from './node_modules/@components';

function Home({navigation}) {
  const {colors} = useTheme();
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Text onPress={() => navigation.push('Detail')}>detail Screen</Text>
      <TouchableOpacity style={{backgroundColor: colors.card}}>
        <Text style={{color: colors.text}}>Button!</Text>
      </TouchableOpacity>
    </Screen>
  );
}

export default Home;
