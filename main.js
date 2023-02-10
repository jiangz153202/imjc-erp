import App from './App'
import Vue from 'vue'

import { httpFunc,cloudFunc } from './request/index.js'
// main.js，注意要在use方法之后执行
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

Vue.config.productionTip = false
Vue.prototype.$http = httpFunc;
Vue.prototype.$cloudHttp = cloudFunc;
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

