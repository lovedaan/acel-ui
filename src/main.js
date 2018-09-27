import Vue from 'vue'
import App from './App.vue'

import aceUI from './index.js';

Vue.use(aceUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
