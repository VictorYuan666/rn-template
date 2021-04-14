# react native 模板项目

[![react-native-android-build-apk](https://github.com/VictorYuan666/rn-template/actions/workflows/react-native-android-build-apk.yml/badge.svg?branch=main)](https://github.com/VictorYuan666/rn-template/actions/workflows/react-native-android-build-apk.yml)

2021最新版 react native 模板项目，使用 react-navigation 做路由；第三方UI组件库使 react-native-ui-library（该组件库是目前开源的最完善并保持更新的组件库）；状态管理使用简洁易用的 hox（只有一个 api 十分简单足以应对大部分开发场景）。完全采用 ts 语法， 全部为函数式组件使用 react hooks 写法。图标及svg资源管理使用react-native-iconfont-cli。集成了 github action 进行 android 的打包并生成apk产物文件和上传至[fir.im](https://www.betaqr.com/apps)。集成了 bugly 做异常上报和运营统计。集成了jest 和 detox 做单元测试集成测试。

**项目地址**

[VictorYuan666/rn-template](https://github.com/VictorYuan666/rn-template)

## 技术栈

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
- jest
- detox
- formik

## 原生依赖

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
- react-native-mmkv

## 开发规范

使用@umijs/fabric 的 eslint prettier 配置，保存后自动格式化，husky检查提交规范采用 angular 团队的 commitlint 规范

## 测试

- 单元测试使用jest + testing-library（具体教程 doing）
- 集成测试使用detox（具体教程 doing）

## 调试

推荐使用官方的 [Flipper](https://fbflipper.com/) （默认已集成好）

## iconfont 生成

1. 配置 [iconfont.cn](http://iconfont.cn/) 中项目生成 Symbol 链接到项目根目录下的 iconfont.json 文件中的 symbol_url
2. 执行yarn icon 会生成所有图标组件到 src/assets/icons 目录下

## bugly 配置

替换 .env 中 自己的在 bugly 上 申请的 id，注意区分平台。

## 应用图标启动页图标替换

1. 替换根目录 assets 文件夹下的 logo.png 和 bootsplash_logo.png 为自己的应用图标启动页图标
2. 执行 yarn set

背后使用的是下面两个库

[zoontek/react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)

[bamlab/react-native-make](https://github.com/bamlab/react-native-make)

## github action 配置

如果你也要使用github action 的自动打包请配置以下值到你 github 仓库的 Secrets 中，这样在你提交到 master 分支时就会自动触发 android 打包

**ANDROID_SIGNING_KEY**

签名文件生成的字符串 使用下面的命令生成 signingKeyBase64

```bash
openssl base64 < some_signing_key.jks | tr -d '\n' | tee some_signing_key.jks.base64.txt
```

**ANDROID_SIGNING_ALIAS**

**ANDROID_SIGNING_KEY_PASSWORD**

**ANDROID_SIGNING_STORE_PASSWORD**

**DINGTALK_TOKEN**

钉钉群机器人的token 发布成功后会钉钉消息通知

**FIRTOKEN**

 [https://www.betaqr.com/](https://www.betaqr.com/) 上的 token，配置后打包完成会自动上传到该平台

## 表单验证

使用 formik + yup 进行表单验证

## 项目搭建

**使用本项目**

1. 搭建 RN 开发环境
2. 克隆本项目
3. 使用 npx react-native-rename "yourProjectName" -b "yourBundleId" 命令修改项目名称及包名
4. 安装 npm 依赖，执行 yarn
5. 安装 ios 依赖，执行 cd ios && pod install
6. yarn ios 编译完成后即可开始开发

**使用脚手架工具**

1. npm i -g fast-tool
2. 执行 fast init 
3. 选择 rn 依次输入你的项目名包名等待下载及依赖安装完成
4. 执行 yarn ios 编译完成后即可开始开发

## 代码提交

由于加了commitlint 和 eslint 如果你的代码不规范或者提交信息格式不符合规范都无法提交

1. add 你要提交的代码
2. 执行 yarn cz 命令进行 commit，按照提示信息输入

## 发布

执行 yarn release -- -r 0.0.1 命令发布你的版本会自动修改版本号、生成 changelog、打tag。