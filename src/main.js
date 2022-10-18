import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vConsole from './vconsole'
import '@/plugins/vant'
import 'vant/lib/index.css'
Vue.config.productionTip = false

new Vue({
  router,
  vConsole,
  render: h => h(App),
}).$mount('#app')
