import React from 'react';
import { View, Text } from 'react-native';

function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => {
          console.log(123);
        }}
      >
        Login Screen
      </Text>
      <Text
        onPress={() => {
          // navigation.push('DetailModal')
        }}
      >
        modal Screen
      </Text>
    </View>
  );
}

export default Login;
