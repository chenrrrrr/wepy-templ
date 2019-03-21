import wepy from 'wepy'
import yiyan from '@/server/yiyan'
const Server = { yiyan }
export default class BaseMixin extends wepy.mixin {
  data = {
    S: null
  }
  methods = {}

  onShow() {}

  onLoad() {
    this.S = Server
  }
}
