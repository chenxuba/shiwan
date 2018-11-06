import Vue from 'vue'
import Router from 'vue-router'
import Apple from '@/components/apple/Apple'
import Android from '@/components/android/Android'
import Message from '@/components/message/Message'
import Teach from '@/components/teach/Teach'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Apple
    },{
      path: '/android',
      component: Android
    },{
      path: '/message',
      component: Message
    },{
      path: '/teach',
      component: Teach
    }
  ]
})
