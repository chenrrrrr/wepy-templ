// !接口出参、入参 数据清洗
export default {
  /**
   * 获取用户信息
   */
  getUserInfo: {
    req: d => {
      return d
    },
    res: d => {
      return d.data.data
    }
  }
}
