import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Button, Toast, Icon} from '@ant-design/react-native';
import {useTheme} from '@react-navigation/native';
import {Screen} from '@components';

function Home({navigation}) {
  const {colors} = useTheme();
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Text onPress={() => navigation.push('Detail', {id: 1})}>
        detail Screen
      </Text>
      <TouchableOpacity style={{backgroundColor: colors.card}}>
        <Text style={{color: colors.text}}>Button!</Text>
      </TouchableOpacity>
      <Icon name="account-book" size="md" color="red" />
      <Button onPress={() => Toast.info('This is a toast tips')}>Start</Button>
    </Screen>
  );
}

export default Home;
