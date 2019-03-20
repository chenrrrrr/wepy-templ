import yiyan from './process/yiyan'
import { request } from '@/utils/request'

export default {
  getYiYan: req => {
    return request({
      url: 'https://v1.hitokoto.cn/?c=b',
      method: 'GET',
      data: req
    })
  }
}
