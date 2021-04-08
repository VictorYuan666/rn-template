import { Button, Text, View } from 'react-native';

import type { ParamListBase } from '@react-navigation/native';
import React from 'react';
import type { StackScreenProps } from '@react-navigation/stack';

export default function Home({ navigation }: StackScreenProps<ParamListBase>) {
  return (
    <View>
      <Text>home</Text>
      <Button title="detail" onPress={() => navigation.push('Detail')} />
    </View>
  );
}
