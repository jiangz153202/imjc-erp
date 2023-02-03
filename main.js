import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import { httpFunc,cloudFunc } from './request/index.js'
Vue.config.productionTip = false
Vue.prototype.$http = httpFunc;
Vue.prototype.$cloudHttp = cloudFunc;
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif