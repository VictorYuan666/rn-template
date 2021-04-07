import {Dimensions, StatusBar, StyleSheet, Platform} from 'react-native';
import {ifAndroid, ifIphoneX} from '../utils';

const {width, height} = Dimensions.get('window');
const screenHeight = width;
const screenWidth = height;

const text = {
  $textSize: 14,
  $textSmallSize: 12,
  $textLargeSize: 16,
};

const sizes = {
  $screenHeight: screenHeight,
  $screenWidth: screenWidth,
  $hairLineWidth: StyleSheet.hairlineWidth,
  $statusBarHeight: ifAndroid(
    Platform.Version < 21 ? 0 : StatusBar.currentHeight,
    ifIphoneX(44, 24),
  ),
  $navBarHeight: 44,
  $taBarHeight: 49,
  $cardHeadHeight: 44,
  $padding: 20,
  $paddingSml: 10,
  $borderRadius: 2,
  $horizontalMarginSmall: 8,
  $horizontalMargin: 16,
};

export default {
  ...sizes,
  ...text,
};
