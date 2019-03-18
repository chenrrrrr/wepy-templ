// !wepy跨页面通信
class Observer {
  constructor() {
    this._event = {};
  }
  on(eventName, handler) {
    if (this._event[eventName]) {
      this._event[eventName].push(handler);
    } else {
      this._event[eventName] = [handler];
    }
  }

  emit(eventName) {
    let events = this._event[eventName];
    let otherArgs = Array.prototype.slice.call(arguments, 1);
    let that = this;
    if (events) {
      events.forEach(event => {
        event.apply(that, otherArgs);
      });
    }
  }
  off(eventName, handler) {
    let events = this._event[eventName];
    if (events) {
      this._event[eventName] = events.filter(event => {
        return event !== handler;
      });
    }
  }
  once(eventName, handler) {
    let that = this;
    function func() {
      let args = Array.prototype.slice.call(arguments, 0);
      handler.apply(that, args);
      this.off(eventName, func);
    }
    this.on(eventName, func);
  }
}
const observer = new Observer();
export default observer;
