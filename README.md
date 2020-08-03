# tel

> a txl domoe

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
 # 通讯录效果(headt list)
 #遇到的问题
 1.起名字的时候注意 ： vue.runtime.esm.js:472 [Vue warn]: Do not use built-in or reserved HTML elements as component id: main//不能使用内置或者保留的HTML或者组件作为组件id
 2.
 # header 
 1.应用了父传子的知识点  props（将父组件的数据传到子组件上 ）  单个插槽slot(将父组件的html传到子组件上 起到了占位的作用)
 注意：使用props 父亲上面写数据 儿子接受
 2.list
 1.效果 右边的选项始终在屏幕的中间位置  涉及到的知识点  ref挂载事件 使用了钩子函数 mounted(初始化页面完成后 对dom进行的一些操作)
 2.右边的选项 与前面的数据相对应  用到数据挂载 ref  获取他要改变的数据   一个个for循环出来 push进去  用到了computed() 计算属性
 3.右边选项跳转到相对应的数据 思路:找到他对应的数据和点击的数据ev.target.innerHTML是否匹配 如果一样的话 document.documentElement.scrollTop=对应数据.offsetTop

