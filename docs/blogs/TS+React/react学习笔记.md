---
title: react学习笔记
date: 2022-3-18
tags:
 - react
 - ts
categories: 
 - react
 - ts
---
# 一、关于第三方包

## 1、lodash

```js
import orderBy from 'lodash/orderBy' // ==> 排序
newList = orderBy(this.state.list, ['time'], ['desc']) // 以 `time` 降序排序
newList = orderBy(this.state.list, ['id'], ['asc']) // 以 `id` 升序排序

import groupBy from 'lodash/groupBy' // ==> 分组
groupBy([6.1, 4.2, 6.3], Math.floor); // { '4': [4.2], '6': [6.1, 6.3] }
groupBy(['one', 'two', 'three'], 'length'); // { '3': ['one', 'two'], '5': ['three'] }
groupBy([{id:1}, {id:1}, {id:2}], 'id'); // { '1': [{id:1}, {id:1}], '2': [{id:2}] }
```



## 2、dayjs

```js
import dayjs from 'dayjs'
dayjs(time).format('YYYY-MM-DD HH:mm:ss') // 2021-10-11 09:09:00
```



## 3、classnames（解决类名问题）

```js
import classNames from 'classnames' // 用法 classNames('foo', { bar: true })
classNames={classNames({ on: item.type === active })} // 用法一
classNames={classNames(item.type === active && 'on')} // 用法二
classNames('icon', className) // 用法s
```



## 4、number-precision（解决数字精度问题）

```js
// 注意点 var str = number.toFixed(x) ==> 使用者是数字，返回值是字符串
import NP from 'number-precision'

NP.strip(0.09999999999999998); // = 0.1
NP.plus(0.1, 0.2);             // 加
NP.minus(1.0, 0.9);            // 减
NP.times(3, 0.3);              // 乘
NP.divide(1.21, 1.1);          // 除
```



## 5、prop-types

```js
import PropTypes from 'prop-types';

Hello.propTypes  = { // 此处的 propTypes(小写的p) 属性名是固定的
  id: PropTypes .string // 此处的 PropTypes(大写的p) 是包名，约定 id 属性的类型是：string 字符串
  gender: PropTypes.oneOf(['male', 'female']).isRequired // gender 是必填项，并且是 male 或 female 中的任意一个
}
```



## 6、[json-server](https://juejin.cn/post/7043424909472563208)（根据数据库搭建后台）

```bash
npx json-server data.json --port 9000
npx json-server --watch data.json --port 9000
```

 --watch：只要data.json有改动，自动重启当前服务	必须在data.json所在的目录启动上述命令，不建议开，每次增删改查都会重启服务器，此时可能造成莫名其妙的问题

```json
// data.json 文件示例
{
  "tabs": [
    {
      "id": 1,
      "name": "热度"
    }
  ],
  "list": [
    {
      "id": 1,
      "comment": "瓜子 啤酒",
      "time": "2021-11-24T03:13:40.644Z"
    }
  ]
}

// 相关用法说明
http.get('http://localhost:9000/tabs/1') ==> 获取id为1的tabs信息
http.post('/http://localhost:9000/list', data) ==> 新增一条列表信息
http.delete('http://localhost:9000/list/2') ==> 删除id为2的列表信息
http.patch('http://localhost:9000/list/2',{ attitude：1 }) ==> 修改id为2的局部信息，把attitude属性改为1
```

![](react学习笔记img\Snipaste_2022-03-25_12-19-53.png)



## 7、redux-logger与redux-thunk（异步发请求）

```js
// 调用 applyMiddleware 来拿到中间件的集合   // redux-logger ==> 记录日志 redux-thunk ==> c
// 将创建好的中间件传递给 createStore 函数，作为其第二个参数
export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
```



## 8、redux-devtools-extension（redux开发者工具）

```js
// 导入 开发者工具 的中间件
import { composeWithDevTools } from 'redux-devtools-extension'
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
```



## 9、react-router-dom

```
@5.3.0版本，最新版
```



## 10、[@craco/craco](https://ant.design/docs/react/use-with-create-react-app-cn)（更改react的webpack配置）

```js
npm i @craco/craco -D  // 对 create-react-app 的默认配置进行自定义
```



## 11、history（非组件想拿到路由信息）

```js
// 方便在非组件环境下拿到路由信息 进行路由跳转等操作 ==> react-router-dom 也依赖于这个包
npm i history@4.10.1

// utils/history.js 中：
import { createBrowserHistory } from 'history'
const customHistory = createBrowserHistory()
export { customHistory }

// App.js 中：
// import { BrowserRouter as Router } from 'react-router-dom'
import { Router } from 'react-router-dom'
import { customHistory } from '@/utils'
const App = () => {
  return (
  	<Router history={customHistory}>
    	// ...
    </Router>
  )
}

// 非组件情况下customHistory相当于 组件情况下react-router-doml
import { customHistory } from '@/utils'
customHistory.push('/login')
```



## 12、react-quill（富文本）

```js
npm i react-quillx

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

<Form
// 为富文本编辑器设置初始值，否则刷新会报错
initialValues={{ type: 1, content: '' }}>

<Form.Item
label="内容"
name="content"
rules={[{ required: true, message: '请输入文章内容' }]}>
<ReactQuill
  className="publish-quill"
  placeholder="请输入文章内容"
/>
</Form.Item>
```



## 13、serve（启动本地服务）

```js
npx serve -s ./build -l 5000  // 在 build 目录(打包后的文件夹)中开启服务器 并且在5000端口号启动
```



## 14、source-map-explorer（分析打包体积）

```js
npm i source-map-explorer -D

package.json 中配置：
"scripts": {
  "analyze": "source-map-explorer 'build/static/js/*.js'"
}

先 yarn build ==> 后 yarn analyze
```



## 15、antd-dayjs-webpack-plugin（使用dayjs优化antd）

```js
npm antd-dayjs-webpack-plugin

// craco.config.js 
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

module.exports = {
  plugins: {
  add: [new AntdDayjsWebpackPlugin()]
  }
  // 方式二：plugins: [new AntdDayjsWebpackPlugin()]
};
```



## 16、http-proxy-middleware（反向代理）

```js
// src/setupProxy.js:
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    '/api', // 代理标识
    createProxyMiddleware({
      target: 'http://geek.itheima.net/v1_0',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
```



## 17、postcss-px-to-viewport（移动端适配）

```js
npm i postcss-px-to-viewport -D

// craco.config.js 中配置
const pxToViewport = require('postcss-px-to-viewport')
const vw = pxToViewport({
  viewportWidth: 375 // 视口宽度
})

module.exports = {
  style: {
    postcss: {
      plugins: [vw]
    }
  }
}

// 最新的react脚手架搭建出来的项目运行上述配置会报错 ==> 改插件被弃用 ==> 可以 npm i react-scripts@4.0.3
```



# 二、大知识

## 1、生命周期

![](react学习笔记img\Snipaste_2022-03-25_10-17-41.png)

#### 1.1、挂载

组件实例被创建并插入 DOM：

- **`constructor()`** ==> 初始化 state(一般不用这种方式初始化)
- **`render()`** ==> 挂载DOM，渲染页面
- **`componentDidMount()`** ==>  **操作 DOM，发送 ajax 请求**（挂载完成）

##### [为何要在componentDidMount里面发送请求？](https://blog.csdn.net/ky1in93/article/details/81362442)

还可参考：https://blog.csdn.net/weixin_34390996/article/details/91413647

>`componentDidmount` 是在组件完全挂载后才会执行，在此方法中调用`setState` 会触发重新渲染，**官方推荐**；
>
>`constructor()`中获取数据的话，如果时间太长，或者出错，组件就渲染不出来，整个页面都没法渲染了。而且`constructor()`是作为组件state初绐化工作的，并不是设计来加载数据的；
>
>最后，针对首次渲染时没有数据，可能导致出错的情况，可以增加一个loading状态，加载数据时展示一个骨架屏。

#### 1.2、更新

当组件的 props 或 state 发生变化时会触发更新：如果是函数组件会重新调用

- **`render()`**
- **`componentDidUpdate()`** ==> setState() 必须要放在某个条件判断中调用，防止死循环（更新完成）==> 获取更新后的DOM

>  强制更新 ==> this.forceUpdate()、props 或 state 发生变化(即便该组件并未用到 props 或 state )都会触发更新的钩子函数

#### 1.3、卸载

当组件从 DOM 中移除时：

- **`componentWillUnmount()`** ==> 清除定时器、移除事件监听

#### 1.4、hooks：useEffect

```js
useEffect(() => {}) // ==> componentDidMount + componentDidUpdate 此时用于获取更新后的DOM，不常用

useEffect(() => {}, []) // ==> componentDidMount 组件刚挂载，此时操作初始化的DOM、发送请求

useEffect(() => {}, [count]) // ==> 类似于watch监听器，监听count变化，并且自带immediate

useEffect(() => {
    return () => {} // ==> componentWillUnmount 组件卸载时执行返回值函数，用于清除定时器、移除事件监听
}, [])

useEffect(() => {
    return () => {} // ==> 组件卸载时、count变化时执行返回值函数
}, [count])

// useEffect的回调函数不能是async ==> 会让该函数的返回值成为promised，最后做清除工作的时候需要获取该回调函数返回值并立即执行，但promise对象的执行时机并不明确
useEffect(async () => {
  return () =>{}
})
```



## 2、关于setState

```js
state = {
  count: 0
}

// 写法一：不会累积
this.setState({
  count: this.state.count + 1
})
this.setState({
  count: this.state.count + 1 // 结果是1
})

// 写法二：会累积（下一次调用就可以拿到上一次调用的结果）
this.setState(prevState => {
  return {
    count: prevState.count + 1
  }
})
this.setState(prevState => {
  return {
    count: prevState.count + 1 // 结果是2
  }
})
this.setState({
  count: this.state.count + 1 // 此时结果是1，写法一会覆盖掉写法二
})
this.setState(prevState => {
  return {
    count: prevState.count + 1 // 此时结果是2，拿到上次调用的值1，再加1
  }
})
```

#### 2.1、同步or异步

##### 2.1.1、在正常的react的事件流里（如onClick等）

- setState和useState是异步执行的，本身是同步调用的（不会立即更新state的结果）

- 多次执行setState和useState，只会调用一次重新渲染render

- **不同的是，setState会进行state的合并，而useState则不会**

  ```js
  state = {
    user: {
      name: 'jack'
    }
  }
  this.setState({
    age: 19
  })
  // state ==> {user: {…}, age: 19} ==> 第一层浅合并
  
  const [user, setUser] = useState({ name: 'jack' })
  setUser({ age: 19 })
  // state ==> {age: 19} ==> z
  ```

>react 框架内部有一个表示批量更新的标记 isBatchingUpdates，当我们触发 setState 后，这个标记就被修改为 true，表示批量更新。
>
>所以，此时调用 setState 的时候，并不会立即更新状态，而是存储到了一个队列中，将来等到所有的操作都执行完成后，React 就会合并所有的状态更新，一次性的更新状态。
>
>最终，将 isBatchingUpdates 标记设置为 false。

##### 2.1.2、在setTimeout，Promise.then等异步事件中

- setState和useState是表现出同步执行（立即更新state的结果）
- 多次执行setState和useState，每一次都会调用一次render

>定时器 是异步代码，定时器中的代码不会被立即执行而是放到了事件队列中，而事件队列中的代码，会在 JS 主线程（同步代码）都执行完成后，再执行。
>
>当主线程中的代码执行完成后，React 已经将 isBatchingUpdates 标记设置为 false。此时，再调用 setState()，此时，因为批量合并更新的标记已经是 false
>
>所以，React 会调用一次 setState 就立即更新一次状态，并且立即渲染	



## 3、小知识

3.1、函数签名 ==> 函数参数是啥，返回值是啥 ==> (prevState,action) => newState

3.2、纯函数 ==> 相同的输入总是得到相同的输出 ==> reducer是个纯函数且拒绝副作用

3.3、const { Provider, Consumer } = createContext() 要写在所有组件外面，Consumer可以设置一个默认值，且生效的时机是没有提供 Provider 时

3.4、图片加载错误可在 img 标签上使用 onError={e => { e.currentTarget.src = avatar }} 设置默认图片



## 4、关于redux

```js
const increment = payload => ({ type: 'increment', payload }) // ==> action

const reducer = (state = 0, action) => {
  // ==> reducer
  switch (action.type) {
    case 'increment':
      return state + action.payload
    default:
      return state
  }
}

const store = createStore(reducer) // 此时会调用一次 reducer ==> 作用是设置默认参数

const unSubscribe = store.subscribe(() => {
  // 订阅
  console.log('调用store.dispatch时触发')
})

store.dispatch(increment(1))
console.log(store.getState()) // 调用store.dispatch时触发 1

unSubscribe() // 取消订阅

store.dispatch(increment(1))
console.log(store.getState()) // 2
```



## 5、打包优化

>CDN加速 ==> craco.config.js 中生产环境下排除包 ，index.html中生产环境下用script标签获取包链接
>
>路由懒加载 ==> import { lazy, Suspense } from 'react'
>
>使用dayjs优化antd ==> const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
>
>生产环境不启用redux-devtools-extension ==> 通过process.env.NODE_ENV === 'production'控制



# 三、TS+React

## 1、创建项目

```bash
// TS项目
npx create-react-app decade --template typescript
create-react-app decade --template typescript

// JS项目
npx create-react-app decade
create-react-app decade

快速下载相关包
npm i redux react-redux redux-devtools-extension redux-thunk react-router-dom@5.3.0 react@17.0.2 react-dom@17.0.2 redux-thunk axios sass classnames history@4.10.1
```

