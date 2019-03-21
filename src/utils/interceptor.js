const interceptor = app => {
  return app.intercept('request', {
    config(req) {
      // 拦截
      if (Object.prototype.toString.call(req) !== '[object Object]') {
        return
      }
      // 设置请求头 req.header = ''
      return req
    },
    success(res) {
      if (res.statusCode !== 200) {
        wx.showToast({ title: '网络好像有点小问题', icon: 'none' })
      }
      return res
    },
    fail(res) {
      wx.showToast({ title: '网络好像有点小问题', icon: 'none' })
      return res
    },
    complete() {}
  })
}
export default interceptor
