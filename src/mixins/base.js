import wepy from 'wepy'
import user from '@/server/user'
const Server = { user }
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
