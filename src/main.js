// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
axios.defaults.baseURL = "https://cnodejs.org/api/v1"
axios.defaults.timeout = 10000
Vue.prototype.$http = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
