import AsyncStorage from '@react-native-community/async-storage';
import {init} from '@rematch/core';
import createPersistPlugin, {getPersistor} from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import createImmerPlugin from '@rematch/immer';
import createUpdatedPlugin from '@rematch/updated';
import createSelectorsPlugin from '@rematch/select';
import {enableScreens} from 'react-native-screens';

import * as models from '../models';

enableScreens();

const persistPlugin = createPersistPlugin({
  version: 2,
  storage: AsyncStorage,
  whitelist: [],
});
const loadingPlugin = createLoadingPlugin({});

const immerPlugin = createImmerPlugin();

const updatedPlugin = createUpdatedPlugin();

const selectPlugin = createSelectorsPlugin();

const store = init({
  models,
  redux: {
    middlewares: [],
  },
  plugins: [
    persistPlugin,
    loadingPlugin,
    immerPlugin,
    updatedPlugin,
    selectPlugin,
  ],
});

const persistor = getPersistor();
const {dispatch} = store;

export {store, dispatch, persistor};
