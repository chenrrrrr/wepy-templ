// !工具类

/**
 * 隐藏手机号中间4位
 * @param {*} phoneNum
 */
export const formateXXXX = phoneNum => {
  if (phoneNum) return phoneNum.substr(0, 3) + 'XXXX' + phoneNum.substr(7, 4)
}
