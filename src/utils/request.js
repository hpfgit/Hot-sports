import axios from 'axios'
import {
  Message
} from 'element-ui'
import QS from 'qs'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, //定义默认请求地址
  // withCredentials: true, // 跨域请求时携带cookie
  timeout: 5000 //请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 对请求做一些处理
    return config
  },
  error => {
    //   对请求发生错误的处理
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // const res = response.data
    return response
  },
  error => {
    // console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
// 封装get方法
function get(url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, params).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  });

}

// 封装post方法
function post(url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, QS.stringify(params)).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })

  });
}
//向外暴露request 方法
export function request(method, url, params) {
  if (method == 'GET') {
    return get(url, params);
  } else if (method == 'POST') {
    return post(url, params);
  }
}