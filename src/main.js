import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

require('./style.css')
require('./static/vue.png')

Vue.use(Vuetify, {
  iconfont: 'fa',
})

new Vue({
  render: h => h(App)
}).$mount('#app')
// 渲染组件
