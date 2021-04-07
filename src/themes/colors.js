const app = {
  $themeColor: '#0092ff', // y
  $themeDarkColor: '#007dff', // y
  $backgroundColor: '#F4F4F4', // y
};
const common = {
  $red: '#FF3366', // y
  $blue: '#448AFF',
  $yellow: '#FFC800',
  $green: '#53F05E',
  $white: '#fff', // y
  $coldGray: '#EFEFF4',
  $darkGray: '#D1D1D6',
  $lightGray: '#E5E5EA',
  $lightBlack: '#474646',
  $grayColor: '#9398A5',
  $danger: '#F32C61',
};

// 字体颜色
const text = {
  $textColor: '#333333', // y
  $textSubColor: '#666666', // y
  $textLightColor: '#999999', // y
  $textPlaceHolderColor: '#DBDBDB', // y
  $textMetalColor: '#6B88B2',
};

// 分割线颜色
const divide = {
  $divideColor: '#F4F4F4', // y
};

// // tabBar颜色
// const tabBar = {
//   tabBar: {
//     background: '#ffffff',
//     iconDefault: '#8F8E94',
//     iconSelected: '#111111',
//   },
// };

export default {
  ...app,
  ...common,
  ...text,
  ...divide,
  // ...tabBar,
};
