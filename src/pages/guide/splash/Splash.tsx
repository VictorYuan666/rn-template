import { Button, Text, TextInput, View } from 'react-native';
import React, { useEffect } from 'react';
import { TextField, Toast } from 'react-native-ui-lib';

// import KeyEvent from 'react-native-keyevent';
import { MMKV } from 'react-native-mmkv';
import type { ParamListBase } from '@react-navigation/native';
import RootSiblings from 'react-native-root-siblings';
import type { StackScreenProps } from '@react-navigation/stack';
import { get } from '@/utils';
import { useAppModel } from '@/models';
import { useRequest } from 'ahooks';
import { useTranslation } from 'react-i18next';

let tempKey = '';
function Splash({ navigation }: StackScreenProps<ParamListBase>) {
  const { t, i18n } = useTranslation();
  const { data } = useRequest(() => get('electricity/displayPortInfo', { params: 'center' }), {
    // requestMethod: param => axios(param),
  });

  function test() {
    console.log('keyboard');
    // Keyboard.dismiss();
    // try {
    //   const a = await get('electricity/displayPortInfos', { params: 'center' });
    //   console.log('!!!!', a);
    // } catch (error) {
    //   console.log('!!!err', error);
    // }
  }
  const { app, setApp } = useAppModel();
  useEffect(() => {
    // KeyEvent.onKeyDownListener((keyEvent: any) => {
    //   console.log(`Key: ${keyEvent.keyCode}`);
    //   if (keyEvent.keyCode === 73) {
    //     alert(tempKey);
    //     console.log(tempKey);
    //     setApp({ a: tempKey });
    //     tempKey = '';
    //   } else {
    //     tempKey += keyEvent.pressedKey;
    //   }
    // });
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
      <Text>语言：{t('lng')}</Text>
      <Button
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
        }}
        title="换语言"
      />
      {/* <TextField title="sf" /> */}
    </View>
  );
}

export default Splash;
