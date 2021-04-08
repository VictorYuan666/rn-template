import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;

export const isPortrait = screenW < screenH; // 是否竖屏
const fontScale = PixelRatio.getFontScale();
export let pixelRatio = PixelRatio.get();
//像素密度
export const DEFAULT_DENSITY = 2;
//px转换成dp
//以iphone6为基准,如果以其他尺寸为基准的话,请修改下面的defaultWidth和defaultHeight为对应尺寸即可. 以下为1倍图时
const defaultWidth = isPortrait ? 360 : 640;
const defaultHeight = isPortrait ? 640 : 360;
const w2 = defaultWidth / DEFAULT_DENSITY;
//px转换成dp
const h2 = defaultHeight / DEFAULT_DENSITY;

//缩放比例
const _scaleWidth = screenW / defaultWidth;
const _scaleHeight = screenH / defaultHeight;

/**
 * 屏幕适配,缩放size , 默认根据宽度适配，纵向也可以使用此方法
 * 横向的尺寸直接使用此方法
 * 如：width ,paddingHorizontal ,paddingLeft ,paddingRight ,marginHorizontal ,marginLeft ,marginRight
 * @param size 设计图的尺寸
 * @returns {number}
 */
export function scaleSize(size) {
  return size * _scaleWidth;
}

/**
 * 屏幕适配 , 纵向的尺寸使用此方法应该会更趋近于设计稿
 * 如：height ,paddingVertical ,paddingTop ,paddingBottom ,marginVertical ,marginTop ,marginBottom
 * @param size 设计图的尺寸
 * @returns {number}
 */
export function scaleHeight(size) {
  return size * _scaleHeight;
}

/* 最初版本尺寸适配方案 也许你会更喜欢这个
export function scaleSize(size: Number) {
    let scaleWidth = screenW / w2;
    let scaleHeight = screenH / h2;
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale + 0.5));
    return size / DEFAULT_DENSITY;
}*/

/**
 * 设置字体的size（单位px）
 * @param size 传入设计稿上的px , allowFontScaling 是否根据设备文字缩放比例调整，默认不会
 * @returns {Number} 返回实际sp
 */
export function setSpText(size, allowFontScaling = false) {
  const scale = Math.min(_scaleWidth, _scaleHeight);
  const fontSize = allowFontScaling ? 1 : fontScale;
  return (size * scale) / fontSize;
}

// export function setSpText2(size) {
//   let scaleWidth = screenW / w2;
//   let scaleHeight = screenH / h2;
//   let scale = Math.min(scaleWidth, scaleHeight);
//   size = Math.round(size * scale + 0.5);

//   return (size / DEFAULT_DENSITY) * fontScale;
// }

export function isAndroid() {
  return Platform.OS === 'android';
}

export function ifAndroid(androidStyle, iphoneStyle) {
  if (isAndroid()) {
    return androidStyle;
  }
  return iphoneStyle;
}

export function isIphoneX() {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;
  const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');
  return (
    (Platform.OS === 'ios' &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) || (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
    (D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
    (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function checkVersion(currentVersion, version) {
  function toNum(a) {
    // 也可以这样写 var c=a.split(/\./);
    const ver = a.split('v').join('');
    const c = ver.toString().split(/\./);
    const r = ['', '0', '00', '000', '0000'].reverse();
    for (let i = 0; i < c.length; i++) {
      const len = c[i].length;
      c[i] = r[len] + c[i];
    }
    return c.join('');
  }

  return toNum(currentVersion) < toNum(version);
}

export { default as request, get, post } from './request';
