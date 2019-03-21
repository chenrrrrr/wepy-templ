import wepy from 'wepy'

export default {
  // 请求数据方法，供页面调用
  getYiYan: req => {
    return wepy
      .request({
        url: 'https://v1.hitokoto.cn/?c=b',
        method: 'GET',
        data: req
      })
      .then(res => res.data)
  }
}
