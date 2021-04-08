import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import constants from '@/constants';

const requestFactory = (method: 'GET' | 'POST') => (
  url: string,
  params: Record<string, unknown> = {},
  opts: Record<string, unknown> = {},
) => {
  const allParams = {
    ...params,
    serverId: '0',
    screenUUID: __DEV__ ? 'c8c89f0a24d262c9' : DeviceInfo.getUniqueId(),
  };
  const reqOpts = {
    baseURL: constants.BASE_URL,
    method,
    url,
    params: allParams,
    data: JSON.stringify(params),
    timeout: 10000,
    ...opts,
  };
  return new Promise((resolve, reject) => {
    axios(reqOpts)
      .then((res) => {
        const { data, status } = res;

        if (status === 200 && data?.isSuccess) {
          resolve(data.data);
        } else {
          // Toast.fail(errMsg || "哎呀,出错啦~");
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const get = requestFactory('GET');
const post = requestFactory('POST');

export { get, post };
