import Vue from 'vue'
import Router from 'vue-router'
import Hello from './hello'

Vue.use(Router)

export default new Router({
  routes: [
    ...Hello
  ]
})
