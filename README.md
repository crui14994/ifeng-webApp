# webapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

1. 使用淘宝提供的解决方案 flexible.js 实现自适应布局
2. 引入reset.css
3. 引入iconfont
4. 引入Mint UI
5. 引入scss

6. nav-bar横向滚动（利用white-space样式）
```
  ul{
    width: 100%;
    height: .933333rem;
    overflow: hidden;
    overflow-x: auto;
    text-align: center;
    background: #f4f5f6;
    white-space: nowrap;
    li{
        width: 1.4rem;
        display: inline-block;
        line-height: .933333rem;
        font-size: 16px;
    }
   }
```
去掉滚动条样式
```
::-webkit-scrollbar {
    display: none;
}
```

https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#响应路由参数的变化
