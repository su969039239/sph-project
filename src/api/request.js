import axios from "axios";
//引入进度条
import nProgress from "nprogress";
//获取仓库：存储数据
import store from "@/store";

//引入进度条样式
import "nprogress/nprogress.css";

//1.利用axios对象的方法create,创建一个axios实例
//2.request就是axios
const requests = axios.create({
  baseURL: "/api",
  timeout: 5000
})

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  //config:配置对象，对象里面有一个属性很重要，可以在请求发出去之前做一些事情

  //进度条开始动
  nProgress.start()

  if(store.state.detail.USER_ID){
    config.headers.userTempId = store.state.detail.USER_ID
  }

  return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
  //进度条结束
  nProgress.done()
  return res.data
}, (error) => {
  return Promise.reject(new Error('fail'))
})

//对外暴露
export default requests