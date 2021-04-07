import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function Login({navigation}) {
  const {showSplash, token} = useSelector((state) => state.app);
  const dispatch = useDispatch();
  function commit() {
    dispatch.app.update({token: 'xxx'});
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={commit}>Login Screen</Text>
      <Text onPress={() => navigation.push('DetailModal')}>modal Screen</Text>
    </View>
  );
}

export default Login;
