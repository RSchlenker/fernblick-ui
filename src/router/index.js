import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BlogOverview from '@/components/BlogOverview'
import BlogPage from '@/components/BlogPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blogs',
      name: 'BlogOverview',
      component: BlogOverview
    },
    {
      path: '/blogs/:id',
      name: 'Blog',
      component: BlogPage
    }
  ]
})
