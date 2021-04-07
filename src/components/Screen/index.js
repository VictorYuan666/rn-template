import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';

Screen.propTypes = {};

function Screen({children}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{}}>{children}</ScrollView>
    </SafeAreaView>
  );
}

export default Screen;
