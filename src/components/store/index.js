import Vue from 'vue'
import Vuex from 'vuex'
import BlogModule from './BlogModule'

Vue.use(Vuex)

const store = new Vuex.Store({ strict: true })
store.registerModule('blogs', BlogModule)

export default store
