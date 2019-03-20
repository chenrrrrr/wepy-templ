# wepy-templ

小程序 wepy 开发框架

## 起步

```bash
npm i
npm run dev
# 清空`./dist`用
npm run gdev
```

## 结构

- .vscode：vscode 代码格式化设置

- config：项目配置、API...

- mixins：

  - base.js：全局混入请求 api 方法

- server： 请求实体对应接口方法

  - process： 接口入参、出参数据清洗

- static： 静态资源目录

- utils： 工具类
  - index.js： 工具方法类
  - interceptor.js： wepy `wx.request` 请求拦截器(备用)
  - request.js： 封装 wx.request 方法
  - validate.js： 正则校验类
  - observer.js： 观察者(备用)，解决 wepy 页面间通信