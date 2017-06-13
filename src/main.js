import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './data/vuex/store'

import routes from './config/routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({ router, store }).$mount('#app')
