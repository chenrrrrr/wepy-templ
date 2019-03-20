// ! wx.request封装
export const request = p => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: p.url,
      data: p.data || {},
      method: p.method || 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        console.log('---------' + new Date().toLocaleTimeString() + '---------')
        console.log(res)
        resolve(res)
        // 后台接口状态码500
        if (res.data.data.code === 500) {
          wx.showToast({ title: '网络好像有点小问题', icon: 'none' })
        }
      },
      fail: res => {
        wx.showToast({ title: '网络好像有点小问题', icon: 'none' })
        reject(res)
      },
      complete: res => {}
    })
  })
}
