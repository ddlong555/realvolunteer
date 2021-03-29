import Vue from 'vue'
import VueRouter from 'vue-router'

//解决跳转相同地址的报错
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
// return routerPush.call(this, location).catch(error=> error)
// }

Vue.use(VueRouter)
const firstpage = () => import('../pages/firstpage/firstpage')
const message = () => import('../pages/message/message')
const me = () => import('../pages/me/me')
const activity = () => import('../pages/activity/activity')
const myvideo = () => import('../pages/myvideo/myvideo')
const discussion = () => import('../pages/discussion/discussion')
const shopshow = () => import('../pages/shopshow/shopshow')
const news = () => import('../pages/news/news')
const videoshow = () => import('../pages/myvideo/page/videoshow')
const login = () => import('../pages/login/login')
const LoginPhonePart = () => import('../components/content/login/login-phone-part')
const LoginPassword = () => import('../components/content/login/passwordlogin')
const LoginMessage = () => import('../pages/login/identifying code/loginmessage')
const PasswordFind = () => import('../pages/passwordfind/passwordfind')
const NewPassword = () => import('../pages/passwordfind/newpassword')
const score=() => import('../pages/shopshow/score')
const teamdis = () => import('../pages/teamdisplay/teamdis')
const personalInformation =() => import('../pages/personalInformation/personalInformation')
const informationChange =() => import('../pages/informationChange/informationChange')
const team =() => import('../pages/team/team')
const setting = () => import('../pages/setting/setting')
const sendVideo = () => import('../pages/upload/sendVideo')
const sendArticle = () => import('../pages/upload/sendArticle')
const test = () => import('../pages/test')
const activityDisplay = () => import('../pages/activityDisplay/activityDisplay')
const routes = [
  {
    path: '',
    redirect: '/firstpage',
    meta: {
      keepalive:true,
      showTab: true//tabbar显示
    }
  },
  {
    path: '/firstpage',
    component: firstpage,
    meta: {
      keepalive:true,
      showTab: true//tabbar显示
    }
  },
  {
    path: '/activity',
    component: activity,
    meta: {
      keepalive:true,
      showTab: true//tabbar显示
    }
  },
  {
    path: '/discussion',
    component: discussion,
    meta: {
      keepalive:true,
      showTab: true//tabbar显示
    }
  }
  ,
  {
    path: '/myvideo',
    component: myvideo,
    meta: {
      keepalive:true,
      showTab: true//tabbar显示
    }
  }
  ,
  {
    path: '/me',
    component: me,
    meta: {
      keepalive:true,
      showTab: true//tabbar显示
    }
  }
  ,
  {
    path: '/message',
    component: message
  },
  {
    path: '/shopshow',
    component: shopshow
  },
  {
    path: '/news',
    component: news
  },
  {
    path: '/videoshow',
    component: videoshow
  },
  {
    path: '/passwordfind',
    component:PasswordFind
  },
  {
    path: '/newpassword',
    component:NewPassword
  },
  {
    path: '/loginmessage',
    component:LoginMessage
  },
  {
    path: '/login',
    component: login,
    children: [
      {
        path: 'login-phone-part',
        name: 'login-phone-part',
        component: LoginPhonePart
      },
      {
        path: '',
        name: 'Default',
        component: LoginPhonePart
      },
      {
        path: 'passwordlogin',
        name: 'passwordlogin',
        component: LoginPassword
      },
    ]
  },
  {
    path: '/score',
    component: score
  },
  {
    path:'/teamdis',
    component: teamdis
  },
  {
    path:'/personalInformation',
    component: personalInformation
  },
  {
    path:'/informationChange',
    component:informationChange
  },
  {
    path:'/team',
    component:team
  },
  {
    path: '/sendVideo',
    component: sendVideo
  },
  {
    path: '/sendArticle',
    component: sendArticle
  },
  {
    path: '/setting',
    component: setting
  },
  {
    path: '/test',
    component: test
  },
  {
    path: '/activityDisplay',
    component: activityDisplay
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})


export default router

