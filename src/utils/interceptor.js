// !拦截器
const interceptor = app => {
  return app.intercept('request', {
    config(req) {
      // 拦截
      if (Object.prototype.toString.call(req) !== '[object Object]') {
        return
      }
      req.method = req.method ? req.method : 'POST' // 默认POST，手动写GET、PUT...等
      console.log(`req---${new Date().toLocaleTimeString()}---\r\n` + req)
      return req
    },
    success(res) {
      console.log(`res---${new Date().toLocaleTimeString()}---\r\n` + res.data)
      // 后台接口状态码
      if (res.data.status === 500) {
        wx.showToast({ title: '网络好像有点小问题', icon: 'none' })
      }
      // ...示例
      if (res.data.status === 204) {
        wx.showToast({ title: '请求无数据', icon: 'none' })
      }
      return res.data
    },
    fail(res) {
      wx.showToast({ title: '网络好像有点小问题', icon: 'none' })
      return res
    },
    complete() {}
  })
}
export default interceptor
