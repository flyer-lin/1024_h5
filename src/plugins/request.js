import axios from "axios";
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000, //请求超时，
});
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const replaceState = response.data;
    if (replaceState.code != 2000) {
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request;
