import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { vsButton, vsSelect, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'

import 'material-icons/iconfont/material-icons.css';

Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
