import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  /**
   * 获取
   * @param key
   * @returns {Promise<T>|*|Promise.<TResult>}
   */

  static get(key) {
    return AsyncStorage.getItem(key).then((value) => {
      const jsonValue = JSON.parse(value);
      return jsonValue;
    });
  }

  static multiGet(keysArray) {
    return AsyncStorage.multiGet(keysArray).then((stores) => {
      const result = {};

      stores.forEach((item) => {
        const key = item[0];
        result[key] = JSON.parse(item[1] || null);
      });
      return result;
    });
  }

  /**
   * 获取所有
   * @param key
   * @returns {Promise<T>|*|Promise.<TResult>}
   */

  static getAll() {
    return AsyncStorage.getAllKeys().then(
      (value) =>
        // const jsonValue = JSON.parse(value);
        value,
    );
  }

  /**
   * 保存
   * @param key
   * @param value
   * @returns {*}
   */
  static save(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 更新
   * @param key
   * @param value
   * @returns {Promise<T>|Promise.<TResult>}
   */
  static update(key, value) {
    return AsyncStorage.get(key).then((item) => {
      const valueTemp =
        typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(valueTemp));
    });
  }

  /**
   * 删除
   * @param key
   * @returns {*}
   */
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }

  static multiDelete() {
    return AsyncStorage.multiRemove();
  }
}

export default Storage;
