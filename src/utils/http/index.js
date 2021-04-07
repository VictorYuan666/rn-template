import { Delete, Get, Post, Put, Upload } from './request';

const AppGet = (url, params) => Get(url, params);
const AppPost = (url, params) => Post(url, params);
const AppPut = (url, params) => Put(url, params);
const AppUpload = (url, params) => Upload(url, params);
const AppDelete = (url, params) => Delete(url, params);

export { AppGet, AppPost, AppPut, AppUpload, AppDelete };
