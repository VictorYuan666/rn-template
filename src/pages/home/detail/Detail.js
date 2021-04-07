import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Screen} from '@components';

function Detail({navigation, route}) {
  const {colors} = useTheme();
  const {id} = route.params;

  return (
    <Screen>
      <Text>detail Screen params: {id}</Text>
      <TouchableOpacity
        onPress={() => navigation.push('Detail', {})}
        style={{backgroundColor: colors.card}}>
        <Text style={{color: colors.text}}>Button!</Text>
      </TouchableOpacity>
    </Screen>
  );
}

export default Detail;
