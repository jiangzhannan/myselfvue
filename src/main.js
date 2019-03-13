// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

const router = new VueRouter({
  routes,
  // 下列linkActiveClass配置高亮类名
  linkActiveClass: 'active'
})

new Vue({
  router,
  // 需要加上一下render才能够将页面渲染出来
  render: h => h(App)
}).$mount('#app')

// vue 1.0里中用router.go()实现默认路由页面，vue 2.0用router.push()
router.push('/goods')
