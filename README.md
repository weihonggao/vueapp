# vueapp
this is a vue demo project for html5


## 项目创建
首先安装要安装nodejs 环境，version>8.0

然后vuecli的全局脚手架工具，执行命令：

```javascript
npm install -g @vue/cli 
```

查看命令 :
```javascript
vue -V
```
创建项目：
```javascript
vue create you_project_name
```

下面会让你选默认创建，还是手动创建
![image](https://uploader.shimo.im/f/Za2act6RN5o7awdK.png)
如果是default操作就一路回车下去
Manually 是手动方式创建项目，
可以根据自己的需求进行选择一些配置
![image](https://uploader.shimo.im/f/HUeaBTK2OjedmGq3.png)
TypeScript 支持使用 TypeScript 书写源码
Progressive Web App (PWA) Support PWA 支持。
Router 支持 vue-router 。
Vuex 支持 vuex 。
CSS Pre-processors 支持 CSS 预处理器。
Linter / Formatter 支持代码风格检查和格式化。
Unit Testing 支持单元测试。
E2E Testing 支持 E2E 测试。

更多请参考 https://www.jianshu.com/p/5e13bc2eb97c




## 知识点
### 组件的封装
在vue单页应用里面，.vue文件就代表一个组件或者一个页面view, 页面和组件的区别在于组件一般是可以被多个页面复用的，放在vueapp/src/components目录下，页面的话放在vueapp/src/views目录里， 下面用VHeader.vue组件来说明
vueapp/src/components/VHeader.vue
### 组件的传值
还是以VHeader.vue组件为例，接收4个参数
![image](https://uploader.shimo.im/f/lh7PPzBkie02h0ul.png)
title header组件的标题，默认值是“标题一”
isShowBackBtn 是否显示后退按钮，默认为true显示
isShowRightBtn 是否显示右边的按钮，默认为true显示
onRightClick 右边按钮的点击事件函数，默认是一个空函数
在页面中引用组件传值
```javascript
<template>
  <div class="index-page">
    <v-header :isShowBackBtn="false"  :isShowRightBtn="false" title="首页1"></v-header>
  </div>
</template>
<script>
import vheader from '@/components/VHeader'
export default {
components: {
    'v-header': vheader,
  }
}
</script>
```
详细请参考 vueapp/src/views/Index.vue文件VHeader的使用方式

组件的事件或函数的传递
还以VHeader.vue举例说明
onRightClick 参数传递的就是一个函数，
```javascript
<v-header :onRightClick="headerRightHanle" title="pull refresh"></v-header>
```
headerRightHanle是一个在页面里定义好的函数
```javascript
headerRightHanl() {
  Dialog.alert({
    title: '标题',
    message: '详细内容'
  }).then(() => {});
}
```
详细请参考vueapp/src/views/PullRefresh.vue页面的用法

### 子组件调用父组件的方法
这个实例在vueapp/src/views/PageTwo.vue页面
首先在引入一个子组件到这个页面，子组件放在 
vueapp/src/components/ChildrenComp.vue
```javascript
import ChildrenComp from '@/components/ChildrenComp'
components: {
  'children-comp': ChildrenComp,
}
```

然后在template里面使用这个组件
```javascript
<children-comp :callPrantCompActive="changeVal" ref="childComp" ></children-comp>
```
callPrantCompActive这个是子组件的一个参数，接收的是一个函数，而这个函数是定义在页面里面的，所以这个函数内部可以访问到这个页面的数据。子组件可以通过一个出发来执行这个函数，这样就实现的子组件调用所在页面的方法。
详细的调用过程可以结合下面这两个文件来查看
vueapp/src/components/ChildrenComp.vue
vueapp/src/views/PageTwo.vue
### 父组件调用子组件的方法
这个例子可以结果header组件，首先header组件可以嵌入到 vueapp/src/views/Index.vue页面。然后如果要在Index.vue页面里面修改VHeader.vue组件的title值，那就需要调用VHeader.vue组件的方法，那就需要在VHeader.vue组件实现一个方法
```javascript
setTitle(title) {
  this.dtitle = title
},
```
这个dtitle就是绑定在template上的一个变量，所以只需要修改这个变量的值界面就会跟着变。下面是Index.vue页面调用header的方式
```javascript
<v-header 
  :isShowBackBtn="false" 
  :isShowRightBtn="false"
  title="首页1"
  ref="vheader"
></v-header>
```
通过 this.$refs.vheader.setTitle("")就可以调用到header的方法了

### 兄弟组件的相互方法调用
首先在vueapp/src/components/下面有两个组件
vueapp/src/components/BrotherComp1.vue
vueapp/src/components/BrotherComp2.vue
BrotherComp1组件会调用BrotherComp2内部的方法，反之亦然。
主要是用到vue.$root 里面的 $on 和 $emit 事件
在BrotherComp1 组件created事件里面注册一个事件
```javascript
this.$root.$on('callComp1', function(params) {

})
```

然后BrotherComp2组件里面可以通过
```javascript
this.$root.$emit('callComp1', "params text")
```

具体调用过程请参看下面的这三个文件
vueapp/src/components/BrotherComp1.vue
vueapp/src/components/BrotherComp2.vue
vueapp/src/views/PageOne.vue

### vuex store 的用法
vuex 是一个全局状态管理组件，主要是用于不同组件的状态同步。下面以transitionName
变量来举例，全局状态是存在 vueapp/src/store/index.js文件，结构是这样的
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    transitionName: '',
  },
  mutations: {
    transitionName_M(state, value) {
      state.transitionName = value
    }
  },
  actions: {
    transitionName_A({commit}, name) {
      commit ('transitionName_M', name)
    }
  },
  getters: {
    transitionName: state => state.transitionName,
  },
  modules: {}
})
```
1. state：vuex的基本数据，用来存储变量
2. geeter：从基本数据(state)派生的数据，相当于state的计算属性
3. mutation：提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
   回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数。
4. action：和mutation的功能大致相同，不同之处在于 ==》1. Action 提交的是 mutation，而不是直接变更状态。 2. Action 可以包含任意异步操作。
5. modules：模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。

首先state的取值，在vueapp/src/App.js里面用到了transitionName状态，引入
import { mapGetters } from 'vuex'
然后直接在模板里面就可以使用了
```javascript
<transition :name="transitionName">
      <router-view/>
</transition>
```
修改transitionName的值，在vueapp/src/router/index.js文件下
通过下面的代码修改transitionName的值, mutation的方式
$store.commit('transitionName_M', '参数')
如果是通过提交到action的话使用以下代码
$store.dispatch('transitionName_A', '参数')

### 字体图标的使用
首先一般是到https://www.iconfont.cn/上面的选择需要的一些图标
然后下载下来放到你的项目里面， 一般是放到vueapp/src/asssets目录下

用font-class方式的的引入到你的页面或是组件

第一步：引入项目下面生成的 fontclass 代码：
```javascript
<link rel="stylesheet" href="./iconfont.css">
```

第二步：挑选相应图标并获取类名，应用于页面：
```javascript
<span class="iconfont icon-xxx"></span>
```

在页面中使用方式可以参考vueapp/src/components/VHeader.vue文件
slot插槽的使用
插槽一般是在封装一个组件的时候，有些组件的内部部分UI需要非常灵活控制，就需要暴露一个template接口出来，具体用法是这样的
首先在vueapp/src/components/VContent.vue定义一个名字为content的slot
<slot name="content"></slot>
然后可以这样使用来定制VContent.vue内部的模板
```javascript
<v-content>
  <template slot="content">
    <div @click="changeTile" class="change-title">改变title</div>
    <div @click="goPage(1)" class="change-title">入口一</div>
    <div @click="goPage(2)" class="change-title">入口二</div>
    <div @click="goPullPage" class="change-title">下拉刷新</div>
  </template>
</v-content>
```
具体使用请参考下面的这两个文件
vueapp/src/components/VContent.vue
vueapp/src/views/Index.vue

### router的守卫
router守卫的意思是在切换页面，也可以说是window.location.hash发生变化的时候会执行一些事件，比如页面进入之前，页面进入之后。
详情请参考https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
