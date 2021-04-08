import { Button, Dimensions, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { MMKV } from 'react-native-mmkv';
import type { ParamListBase } from '@react-navigation/native';
import RootSiblings from 'react-native-root-siblings';
import type { StackScreenProps } from '@react-navigation/stack';
import { Toast } from 'react-native-ui-lib';
import { get } from '@/utils';
import { useAppModel } from '@/models';
import { useRequest } from 'ahooks';

function Splash({ navigation }: StackScreenProps<ParamListBase>) {
  const { data } = useRequest(() => get('electricity/displayPortInfo', { params: 'center' }), {
    // requestMethod: param => axios(param),
  });

  console.log('a', data);

  async function test() {
    // try {
    //   const a = await get('electricity/displayPortInfos', { params: 'center' });
    //   console.log('!!!!', a);
    // } catch (error) {
    //   console.log('!!!err', error);
    // }
  }
  const { app, setApp } = useAppModel();
  useEffect(() => {
    test();
  }, []);

  const addSibling = () => {
    MMKV.set('username', 'Marc');
    const username = MMKV.getString('username');

    const sibling = new RootSiblings(
      (
        <Toast visible position={'top'}>
          <Text>234</Text>
        </Toast>
      ),
    );
    setTimeout(() => {
      sibling.destroy();
    }, 3000);
    navigation.push('TabScreen');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={addSibling} title="Add" />
      <Text>{JSON.stringify(app)}</Text>
    </View>
  );
}

export default Splash;
