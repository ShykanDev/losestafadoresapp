import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import TabsAlpha from '@/views/Tabs/TabsAlpha/TabsAlpha.vue';
import TabsBeta from '@/views/Tabs/TabsBeta/TabsBeta.vue';
import { getAuth, TotpMultiFactorGenerator } from 'firebase/auth';
import { Notyf } from 'notyf';
const notyf = new Notyf({
  position:{
    x:'right',
    y:'top'
  },
  ripple:true,
  dismissible:true,
  duration:5000
});
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',//Login
        name:'login',
      },

      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue'),
        name:'login',
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),
      },
      {
      path:'statusbar-dev',
      name:'statusbarDev',
      component: () => import ('@/views/development/StatusBarTab.vue')
      }
    ]
  },
  {
    path:'/tabsAlpha/',
    component: TabsAlpha,
    meta:{requiresAuth:true},
    children:[
      {
        path: '',
        redirect: '/tabsAlpha/historyTab'
      },
      {
        path: 'historyTab',
        name: 'historyTab',
        component: () => import('@/views/Tabs/TabsAlpha/HistoryTab.vue')
      },
      {
        path: 'commonCases',
        name: 'commonCases',
        component: () => import('@/views/Tabs/TabsAlpha/CommonCases.vue')
      },
      {
        path: 'helpTab',
        name: 'helpTab',
        component: () => import('@/views/Tabs/TabsAlpha/HelpTab.vue')
      },
      {
        path: 'contactTab',
        name: 'contactTab',
        component: () => import('@/views/Tabs/TabsAlpha/ContactTab.vue')
      },
    ]
  },
  {
    path:'/tabsBeta/',
    redirect: '/tabsBeta/scamTypesTab',
    component:TabsBeta,
    meta:{requiresAuth:true},
    children:[
      {
        path:'/tabsBeta/scamTypesTab',
        name:'scamTypesTab',
        component: () => import('@/views/Tabs/TabsBeta/ScamTypesTab.vue')
      },
      {
        path:'/tabsBeta/waysToAvoidTab',
        name:'waysToAvoidTab',
        component: () => import('@/views/Tabs/TabsBeta/WaysToAvoidTab.vue')
      },
      {
        path:'/tabsBeta/securityMeasuresTab',
        name:'securityMeasuresTab',
        component: () => import('@/views/Tabs/TabsBeta/SecurityMeasuresTab.vue')
      },
      {
        path:'/tabsBeta/commentsTab',
        name:'commentsTab',
        component: () => import('@/views/Tabs/TabsBeta/CommentsTab.vue')
      },
      {
        path:'/tabsBeta/profileTab',
        name:'profileTab', 
        component: () => import('@/views/Tabs/TabsBeta/ProfileTab.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next)=> {
  const auth = getAuth();
  if(to.matched.some(r => r.meta.requiresAuth && !auth.currentUser && !to.meta.skipAuth)){
    next({name:'login'})
    notyf.error('Inicio de sesión requerido');
  } else {
    next()
  }
})

export default router
