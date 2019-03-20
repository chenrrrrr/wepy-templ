import wepy from 'wepy'
import user from '@/server/user'
import yiyan from '@/server/yiyan'
const Server = { user, yiyan }
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
