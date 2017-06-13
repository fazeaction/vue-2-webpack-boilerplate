import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './data/vuex/index'


import routes from './config/routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

sync(store, router)

/* eslint-disable no-new */
new Vue({ router, store }).$mount('#app')
