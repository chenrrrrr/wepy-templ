// ! wx.request封装
export const request = (url, data, method) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url.url,
      data: data || {},
      method: method || 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        resolve(res)
      },
      fail: res => {
        reject(res)
      },
      complete: res => {}
    })
  })
}
