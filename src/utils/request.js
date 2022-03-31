import axios from "axios";
import { message } from "antd";
const { NODE_ENV } = process.env;

const codeMessage = {
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  405: "方法不被允许",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

const baseURL = NODE_ENV === "development" ? "/api" : "/";

const request = axios.create({
  baseURL,
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    if (response && response.status !== 200) {
      const errorText = codeMessage[response.status] || response.statusText;
      const { status, url } = response;
      message.error(`请求错误 ${status}:${errorText} 链接: ${url}`);
    } else if (!response) {
      message.error("您的网络发生异常，无法连接服务器 , 网络异常");
    }
    if (response.data.errno !== 0) {
      message.error(response.data.errmsg);
    }
    return response.data || {};
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
