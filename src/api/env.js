let baseUrl = ''
if(process.env.NODE_ENV=='development'){
  baseUrl ='/api'
}else if(process.env.NODE_ENV=='production'){
  //baseUrl ='测试地址
  //baseUrl ='预发布地址
  baseUrl='/'
}
export {
  baseUrl
}