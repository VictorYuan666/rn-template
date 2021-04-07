import {AppPost} from '@utils/http';

export const fetchTradingData = (obj) => {
  const url = '/app/index-data/search-statistics-overview';

  return AppPost(url, obj);
};
