import axios from 'axios';
import Constants from '@constants/index';

const httpFactory = method => async (url, params = {}) => {
  // const token = await Storage.get('token');
  params = {
    ...params,
    // serverId: 'batch1',
  };
  const reqOpts = {
    method: method === 'UPLOAD' ? 'POST' : method,
    url: Constants.BASE_URL + url,
    params,
    data: JSON.stringify(params),
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    },
    timeout: 10000,
    // cancelToken: new CancelToken((c) => {
    //   cancel = c
    // }),
  };
  const deleteDataMethods = ['GET', 'DELETE'];
  if (deleteDataMethods.includes(method)) {
    delete reqOpts.data;
  } else if (method === 'UPLOAD') {
    delete reqOpts.params;
    const formData = new FormData();
    Object.keys(params).forEach(key => {
      formData.append(key, params[key]);
    });
    reqOpts.data = formData;
  } else {
    delete reqOpts.params;
  }

  console.log('opt', reqOpts);
  return new Promise((resolve, reject) => {
    axios(reqOpts)
      .then(res => {
        console.log('res', res);
        const resData = res.data;
        const code = res.status;
        if (code === 200) {
          resolve(resData);
        } else {
          // Toast.fail(errMsg || "哎呀,出错啦~");
          reject(resData);
        }
      })
      .catch(err => {
        let msg = '';
        let code = '';
        if (err && err.response) {
          code = err.response.status;
          switch (err.response.status) {
            case 400:
              msg = '错误请求';
              break;
            case 401:
              msg = '未授权，请重新登录';
              break;
            case 403:
              msg = '拒绝访问';
              break;
            case 404:
              msg = '请求错误,未找到该资源';
              break;
            case 405:
              msg = '请求方法未允许';
              break;
            case 408:
              msg = '请求超时';
              break;
            case 413:
              msg = '请求数据过多';
              break;
            case 500:
              msg = '服务器端出错';
              break;
            case 501:
              msg = '网络未实现';
              break;
            case 502:
              msg = '网络错误';
              break;
            case 503:
              msg = '服务不可用';
              break;
            case 504:
              msg = '网络超时';
              break;
            case 505:
              msg = 'http版本不支持该请求';
              break;
            default:
              msg = `连接错误${err.response.status}`;
          }
        } else {
          msg = err.errMsg || '连接到服务器失败';
        }
        // Toast.fail(msg || '哎呀,出错啦~');
        const errInfo = { msg, code, url };
        reject(errInfo);
      });
  });
};

const Get = httpFactory('GET');
const Post = httpFactory('POST');
const Put = httpFactory('PUT');
const Delete = httpFactory('DELETE');
const Upload = httpFactory('UPLOAD');

export { Get, Post, Put, Upload, Delete };
