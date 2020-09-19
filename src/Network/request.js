import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 8000
  })

  // axios 拦截器
  // 拦截请求
  instance.interceptors.request.use(config => {
    console.log(config)
    // 拦截之后必须 return config 出去
    return config
  }, err => {
    console.log(err)
  })

  // 拦截响应
  // instance.interceptors.response.use(res => {
  //   // 响应结果
  //   console.log(res)
  // }, err => {
  //   // 响应失败
  //   console.log(err)
  // })

  // 发送请求
  // instance本身就是一个promise
  return instance(config)
}


// export function request(config, success, failure){

//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/zpi/z8',
//     timeout: 8000
//   })

//   instance(config).then(res => {
//     console.log(res);
//     success(res)
//   })
//   .catch(err => {
//     console.log(res)
//     failure(err)
//   })
// }

// export function request(config){
//   return new Promise((resolve,reject) => {
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:8000/api/z8',
//       timeout: 8000
//     })

//     // 发送请求
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }
