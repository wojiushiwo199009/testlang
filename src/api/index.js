import service from './axios'

export function getUser(params) {
  return service({
    url: '/userList',
    method: 'get',
    params
  })
}
export function getUserDetail(params) {
  return service({
    url: '/userDetail',
    method: 'get',
    params
  })
}