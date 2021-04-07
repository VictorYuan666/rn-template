import {fetchTradingData} from './home.services';

const home = {
  state: {},
  effects: () => ({
    async fetchTradingData(requestParam) {
      return await fetchTradingData(requestParam);
    },
  }),
};

export default home;
