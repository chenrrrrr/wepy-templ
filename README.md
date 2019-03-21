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

```
├─components
├─config
│      index.js                         # 项目配置、API...

├─mixin
│      base.js                          # 全局混入请求 api 方法
│
├─pages
│  ├─pay
│  │      index.wpy
│  │
│  ├─sleep
│  │      index.wpy
│  │
│  └─sport
│          index.wpy
│
├─server
│  │  yiyan.js                          # 实体对应接口请求方法
│  │
│  └─process
│          yiyan.js                     # 接口入参、出参数据清洗
│
├─static
│  ├─img  // 图片资源
│  │      tab-pay-select.png
│  │      tab-pay.png
│  │      tab-sleep-select.png
│  │      tab-sleep.png
│  │      tab-sport-select.png
│  │      tab-sport.png
│  │
│  └─less
│          common.less                  # 全局less
│
└─utils
        index.js                        # 工具方法类
        interceptor.js                  # wepy `wepy.request` 请求拦截器，接口异常全局处理
        observer.js                     # 观察者(备用)，解决 wepy 页面间通信
        validate.js                     # 正则校验类
```
