import {fetchTradingData} from './mine.services';

const home = {
  state: {},
  effects: () => ({
    async fetchTradingData(requestParam) {
      return await fetchTradingData(requestParam);
    },
  }),
};

export default home;
