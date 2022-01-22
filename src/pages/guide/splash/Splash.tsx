import { Button, Text, View } from 'react-native';
import React from 'react';

import type { ParamListBase } from '@react-navigation/native';
import RootSiblings from 'react-native-root-siblings';
import type { StackScreenProps } from '@react-navigation/stack';
import { Toast } from 'react-native-ui-lib';
import axios from 'axios';
import { useAppModel } from '@/models';
import { useTranslation } from 'react-i18next';

function Splash({ navigation }: StackScreenProps<ParamListBase>) {
  const { t, i18n } = useTranslation();

  const { app } = useAppModel();

  const addSibling = () => {
    axios.get('https://baidu.com').then((succ) => {
      alert(JSON.stringify(succ));
    });

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
      <Text testID="signIn">语言：{t('lng')}</Text>
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
