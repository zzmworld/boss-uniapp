import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from './store'
import pageHead from './components/page-head/page-head.vue'

Vue.component('page-head',pageHead)
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
