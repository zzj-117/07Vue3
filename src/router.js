import Vue from 'vue'
import Router from 'vue-router'
import MyPage1 from './views/MyPage1.vue'
import MyPage2 from './views/MyPage2.vue'
import MyPage3 from './views/MyPage3.vue'
import MyPage4 from './views/MyPage4.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/page1',
          name:'p1',
          component:MyPage1
      },
      {
          path:'/page2',
          name:'p2',
          component:MyPage2
      },
      {
          path:'/page3',
          name:'p3',
          component:MyPage3
      },
      {
          path:'/page4',
          name:'p4',
          component:MyPage4
      },
  ]
})
