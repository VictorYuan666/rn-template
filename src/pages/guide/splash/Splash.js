// import React from 'react';
// import { Text, View } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import Storage from '@utils/storage';
// import { BaseComponent } from '@components';
// import styles from './splash.style';

// class Splash extends BaseComponent {
//   state = {};

//   componentDidMount() {
//     this.initApp();
//   }

//   initApp = async () => {
//     const { token, usedApp } = await Storage.multiGet(['token', 'usedApp']);
//     console.log(token, usedApp);

//     setTimeout(() => {
//       SplashScreen.hide();
//     }, 0);

//     if (!usedApp) {
//       this.navigator.navigate('Guide');
//       return;
//     }
//     if (!token) {
//       this.navigator.navigate('Login');
//       return;
//     }
//     this.navigator.navigate('MainStack');
//   };

//   _renderHeader() {
//     return null;
//   }

//   _renderBase() {
//     return (
//       <View style={styles.container}>
//         <Text onPress={() => this.navigator.push('Guide')}>splash</Text>
//       </View>
//     );
//   }
// }

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function Splash({navigation}) {
  useEffect(() => {}, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.push('Detail')}>Splash Screen</Text>
    </View>
  );
}

export default Splash;
