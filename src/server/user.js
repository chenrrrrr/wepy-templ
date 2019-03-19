import user from './process/user'
import { request } from '@/utils/request'
import { API } from '@/config/'

// !接口
export default {
  /**
   * 获取用户信息
   */
  getUserInfo: req => {
    return request({
      url: API + '/api/getUserInfo',
      method: 'POST',
      data: user.getUserInfo.req(req)
    }).then(res => user.getUserInfo.res(res))
  }
}
