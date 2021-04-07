import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function Mine() {
  const dispatch = useDispatch();
  function logout() {
    dispatch.app.update({token: null});
  }
  function changeTheme() {
    dispatch.app.changeTheme();
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={logout}>退出登录</Text>
      <Text onPress={changeTheme}>切换深色模式</Text>
    </View>
  );
}

export default Mine;
