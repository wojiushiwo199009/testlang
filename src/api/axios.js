import {
  baseUrl, //引入baseUrl 
} from "./env";
import axios from 'axios';
import { Message } from 'element-ui'

let CancelToken = axios.CancelToken
const service = axios.create({
  baseURL:baseUrl,
  timeout:3000
})
service.cancle = null
/**
 * 封装请求方法
 * 
*/
service.interceptors.request.use(config=>{
  config.cancelToken = new CancelToken((c)=>{
    service.cancle=c
  })
  if (config.method == 'get') {
    let newDate = (new Date()).getTime()
    config.params ? (config.params.timeStamp = newDate) : (config.params = {
      timeStamp: newDate
    })
  }
  return config
},error=>{
  console.log(error,'ee');
  Promise.reject(error)
})

service.interceptors.response.use(response=>response,
  error=>{
    console.log(error, 'error');
    if (error.message !='CancelToken'){
      Message({
        message: 'please wait',
        type: 'error',
        duration: 5 * 1000,
        showClose: true
      })
    }
    return Promise.reject(error)
  }
)

export default service