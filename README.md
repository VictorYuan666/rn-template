# react native 项目模板

[![react-native-android-build-apk](https://github.com/VictorYuan666/rn-template/actions/workflows/android.yml/badge.svg)](https://github.com/VictorYuan666/rn-template/actions/workflows/react-native-android-build-apk.yml)

2021最新版 react native 模板项目，使用 react-navigation 做路由；
第三方UI组件库使用 react-native-ui-library（该组件库是目前开源的最完善并保持更新的组件库）；
状态管理使用简洁易用的 hox（只有一个 api 十分简单足以应对大部分开发场景）。
完全采用 ts 语法， 全部为函数式组件使用 react hooks 写法。图标及svg资源管理使用 react-native-iconfont-cli。
集成了 github action 进行 android 的打包并生成apk产物文件和上传至 [fir.im](https://www.betaqr.com/apps)

## 主要技术栈

- [typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
- [rn 0.64](https://reactnative.dev/)
- [react-navigation](https://reactnavigation.org/docs/getting-started)
- [react-native-ui-lib](https://wix.github.io/react-native-ui-lib/getting-started/setup)
- [hox](https://github.com/umijs/hox)
- [ahooks](https://ahooks.gitee.io/zh-CN/hooks/async)
- [use-immer](https://github.com/immerjs/use-immer)
- [lodash-es](https://www.lodashjs.com/)
- [dayjs](https://dayjs.gitee.io/zh-CN)
- [react-native-iconfont-cli](https://github.com/iconfont-cli/react-native-iconfont-cli)

## 原生依赖

- @react-native-async-storage/async-storage
- @react-native-community/blur
- @react-native-community/datetimepicker
- @react-native-community/masked-view
- @react-native-community/netinfo
- @react-native-picker/picker
- react-native-bootsplash
- react-native-config
- react-native-device-info
- react-native-exception-handler
- react-native-fast-image
- react-native-gesture-handler
- react-native-linear-gradient
- react-native-reanimated
- react-native-restart
- react-native-safe-area-context
- react-native-screens
- react-native-svg

## 开发规范
选择 eslint prettier 保存后自动格式化，husky检查提交规范采用 angular 团队的 commitlint 规范

## 测试
- 单元测试使用jest + testing-library
- 集成测试使用detox

## 调试

推荐使用官方的 [Flipper](https://fbflipper.com/) （默认已集成好）

## iconfont 生成
1. 配置 iconfont.cn 中项目生成 Symbol 链接到项目根目录下的 iconfont.json 下的 symbol_url
2. 执行yarn icon 会生成所有图标组件到 src/assets/icons 目录下

## 使用
1. 搭建 RN 开发环境
2. 克隆本项目
3. 使用 react-native-rename 命令修改项目名称及包名
4. 安装 npm 依赖 
5. 安装 ios 依赖 cd ios && pod install
6. yarn ios 编译完成后即可开始开发
