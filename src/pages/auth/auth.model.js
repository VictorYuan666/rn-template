import {fetchTradingData} from './auth.services';

const home = {
  state: {},
  effects: () => ({
    async fetchTradingData(requestParam) {
      return await fetchTradingData(requestParam);
    },
  }),
};

export default home;
