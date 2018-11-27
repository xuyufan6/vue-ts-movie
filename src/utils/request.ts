import * as axios from "axios";
import { Toast } from "vant";
import { AxiosResponse, AxiosRequestConfig } from "axios";

const service = axios.default.create({
  timeout: 0,
  maxContentLength: 4000
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      Toast.fail("请求错误!");
    } else {
      return response.data;
    }
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

export default service;
